import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

const config = {apiKey: "AIzaSyCLrmnzjvkYeUL3MJwDdfJrfOqBsSaEIUA",
    authDomain: "twilio-example-d30.firebaseapp.com",
    databaseURL: "https://twilio-example-d30.firebaseio.com",
    projectId: "twilio-example-d30",
    storageBucket: "twilio-example-d30.appspot.com",
    messagingSenderId: "290273496913"};

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
