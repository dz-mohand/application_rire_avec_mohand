import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ContactsBisComponent } from './contacts-bis/contacts-bis.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewsFeedComponent,
    ContactsBisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
