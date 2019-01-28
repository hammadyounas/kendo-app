import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ROUTING 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//containers
import {Containers,DashboardContainer} from './containers/index'

//Components
import {Components,Dashboard} from './components/index'
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { MenuModule } from '@progress/kendo-angular-menu';








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
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    InputsModule,
    ButtonGroupModule,
    GridModule,
    MenuModule    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
