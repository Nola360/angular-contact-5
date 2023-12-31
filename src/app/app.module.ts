import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
