import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


//Components
import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { CompleteBarChartComponent } from './components/complete-bar-chart/complete-bar-chart.component';


//Services
import { DataService } from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    CompleteBarChartComponent
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
