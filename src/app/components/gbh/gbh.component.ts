import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { VotosModel } from '../../models/votos.model';





@Component({
  selector: 'app-gbh',
  templateUrl: './gbh.component.html',
  styleUrls: ['./gbh.component.css']
})
export class GbhComponent implements OnDestroy, OnInit {
  //https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-horizontal
  @Input() results:any[] = [];
  // options
 
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Peliculas';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';
  
  colorScheme = 'nightLights';
  intervalo:any;
  constructor() {}

  ngOnInit(){
    console.log(this.results);
  }

  
  

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(){
    
  }
}
