import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { HeroesModule }         from './heroes/heroes.module';
import { LoginRoutingModule }   from './login-routing.module';
import { LoginComponent }       from './login.component';

import { DialogService }        from './dialog.service';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule,
    AppRoutingModule, 
    AboutModule, 
    HomeModule, 
    HeroesModule,
    LoginRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    DialogService,
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
