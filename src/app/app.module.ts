import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonumentenComponent } from './monumenten/monumenten.component';
import { MonumentenService } from './Service/monumenten.service';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MonumentenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MonumentenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
