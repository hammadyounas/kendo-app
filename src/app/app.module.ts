import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//containers
import {Containers,DashboardContainer} from './containers/index'

//Components
import {Components,Dashboard} from './components/index'

@NgModule({
  declarations: [
    AppComponent,
    Containers,
    DashboardContainer,
    Components,
    Dashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
