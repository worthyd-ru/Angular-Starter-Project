import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule {
}
