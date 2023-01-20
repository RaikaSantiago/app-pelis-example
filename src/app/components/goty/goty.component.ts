import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  agregarVoto(){
    
  }

}
