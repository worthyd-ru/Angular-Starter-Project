import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material';
import { PipesModule } from './_pipes/pipes-module';
import { ExampleService } from './_providers/example.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule, // HAS TO BE AFTER BrowserModule
    AppRoutingModule,
    PipesModule,
    HttpClientModule
  ],
  providers: [
    ExampleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
