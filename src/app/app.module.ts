import {NgModule} from '@angular/core'
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Person} from './Object/Person';
import {Student} from './Object/Student';
import {Teacher} from './Object/Teacher';
import {Header} from './Header/Header';
import {MainContent} from './MainContent/MainContent';
import {InputContent} from './InputContent/InputContent';

@NgModule({
  declarations: [AppComponent, MainContent, InputContent, Header],
  imports     : [BrowserModule, FormsModule, HttpModule],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
