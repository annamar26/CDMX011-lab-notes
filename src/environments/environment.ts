// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from '@firebase/app';
export const environment = {
  production: false,
  firebaseConfig :{
    apiKey: "AIzaSyBjIW-h5b8P-jM11oMGDOTxq3KUBxl8o5c",
    authDomain: "labnotes-annamar26.firebaseapp.com",
    projectId: "labnotes-annamar26",
    storageBucket: "labnotes-annamar26.appspot.com",
    messagingSenderId: "1045558994318",
    appId: "1:1045558994318:web:c686b2c349b61ef4d2f0df"
  },
  initializeApp
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
