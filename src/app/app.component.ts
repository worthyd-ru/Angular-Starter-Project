import { Component } from '@angular/core';
import { VERSION } from '../environments/version';
import { ExampleService } from './_providers/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Starter Project';
  appVersion = VERSION.version;
  allPokemon = [];

  constructor(private exampleService: ExampleService) {
    this.exampleService.getAllPokemon(20)
      .subscribe((result: any) => this.allPokemon = result.results);
  }

}
