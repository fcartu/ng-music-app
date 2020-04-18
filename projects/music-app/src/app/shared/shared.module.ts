import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    // Vendor
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    // Vendor
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
