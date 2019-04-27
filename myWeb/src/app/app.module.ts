import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    FooterComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
