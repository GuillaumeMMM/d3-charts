import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { TestComponent } from './components/test/test.component';

import { DataService } from "./services/data.service";
import { CompleteBarChartComponent } from './components/complete-bar-chart/complete-bar-chart.component';
import { ThreeLittleCirclesComponent } from './components/three-little-circles/three-little-circles.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    TestComponent,
    CompleteBarChartComponent,
    ThreeLittleCirclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
