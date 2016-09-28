import {Aurelia} from 'aurelia-framework'
import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  // aurelia.use
  //   .standardConfiguration()
  //   .feature('resources');

  // if (environment.debug) {
  //   aurelia.use.developmentLogging();
  // }

  // if (environment.testing) {
  //   aurelia.use.plugin('aurelia-testing');
  // }

  // aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());

  // aurelia.start().then(() => aurelia.setRoot());
  return aurelia.loader.loadModule('jquery').then(() => {
    return aurelia.loader.loadModule('materialize-css').then(() => {
      aurelia.use
        .standardConfiguration()
        .feature('resources');

      if (environment.debug) {
        aurelia.use.developmentLogging();
      }

      if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
      }
      aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());

      return aurelia.start().then(() => aurelia.setRoot());
    });
  });
}
