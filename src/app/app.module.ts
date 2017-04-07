import { AngerService } from './services/anger-service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateAngerComponent } from './create-anger/create-anger.component';
import { FollowingAngersComponent } from './following-angers/following-angers.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateAngerComponent,
    HeaderComponent,
    FollowingAngersComponent
  ],
  imports: [
   BrowserModule,
   CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AngerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
