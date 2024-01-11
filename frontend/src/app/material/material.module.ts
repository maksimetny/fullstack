import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatTreeModule, MatButtonModule, MatIconModule],
  exports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
