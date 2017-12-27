import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
import { AppMaterialModule } from '../app-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ HomepageComponent ],
  providers: [ ],
  entryComponents: [ ]
})
export class HomepageModule { }
