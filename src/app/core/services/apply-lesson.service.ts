import { Injectable } from '@angular/core';


import firebase from '@firebase/app';

// These imports load individual services into the firebase namespace.
import '@firebase/database';
import { appl } from '../../../types/application';

@Injectable()
export class ApplyLessonService {

  constructor() { }


  public sendApplication(ca: appl.ContactApplication): Promise<void> {
      const dbObj = ca.getDbObject();
      return new Promise((resolve, reject) => {
        firebase.database().ref('applications').push(dbObj, (err) => {
            if (err) {
              reject(err);
            }
            resolve();
        });
      })
      
  }

}
