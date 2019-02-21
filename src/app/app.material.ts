import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class AppMaterialModule {
}
