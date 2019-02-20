import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule {
}
