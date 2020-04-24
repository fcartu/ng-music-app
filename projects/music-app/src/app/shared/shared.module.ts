import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    // Vendor
    CommonModule,
    RouterModule,
    HttpClientModule,

    // Flex
    FlexLayoutModule,

    // Material
    MatCardModule,
  ],
  exports: [
    // Vendor
    CommonModule,
    RouterModule,
    HttpClientModule,

    // Flex
    FlexLayoutModule,

    // Material
    MatCardModule,
  ],
})
export class SharedModule {}
