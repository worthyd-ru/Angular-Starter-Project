import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'components/shared/modules';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MaterialModule]
})
export class HomeModule {}
