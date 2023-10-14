import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    PosterPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PosterPipe,
    SafePipe
  ]
})
export class PipesModule { }
