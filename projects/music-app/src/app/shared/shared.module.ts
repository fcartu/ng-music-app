import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
    MatListModule,
    MatIconModule,
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
    MatListModule,
    MatIconModule,
  ],
})
export class SharedModule {}
