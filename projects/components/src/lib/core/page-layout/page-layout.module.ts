import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { MaterialModule } from '../../shared/modules';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent],
  imports: [CommonModule, MaterialModule, NavbarModule]
})
export class PageLayoutModule {}
