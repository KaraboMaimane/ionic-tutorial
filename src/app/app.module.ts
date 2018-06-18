import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstallComponent } from './install/install.component';
import { CheckVersionComponent } from './check-version/check-version.component';
import { CreateComponent } from './create/create.component';
import { RunComponent } from './run/run.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallComponent,
    CheckVersionComponent,
    CreateComponent,
    RunComponent,
    MoreInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
