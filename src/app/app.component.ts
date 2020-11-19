import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { routeAnimations } from './core/animations/route.animations';
import { selectEffectiveTheme } from './core/settings/settings.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'angular-starter-project';
  theme$: Observable<string> = this.store.pipe(select(selectEffectiveTheme));

  constructor(private store: Store) {}
}
