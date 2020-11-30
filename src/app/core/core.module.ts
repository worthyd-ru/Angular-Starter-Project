import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { coreReducers, metaReducers, coreEffects } from './core.state';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(coreEffects),
    StoreModule.forRoot(coreReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})
export class CoreModule {}
