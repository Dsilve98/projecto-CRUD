import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), CommonModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
