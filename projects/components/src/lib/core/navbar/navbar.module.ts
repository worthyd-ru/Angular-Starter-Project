import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MaterialModule } from '../../shared/modules';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, MaterialModule, MatToolbarModule]
})
export class NavbarModule {}
