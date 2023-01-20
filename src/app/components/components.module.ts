import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { LoadingComponent } from './loading/loading.component';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { GotyComponent } from './goty/goty.component';
import { GbhComponent } from './gbh/gbh.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    LoadingComponent,
    CastSlideshowComponent,
    GotyComponent,
    GbhComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent,
    LoadingComponent,
    CastSlideshowComponent,
    GotyComponent,
    GbhComponent
  ],
})
export class ComponentsModule { }
