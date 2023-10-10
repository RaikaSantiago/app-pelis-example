import { Component, OnInit } from '@angular/core';
import { VotosModel } from 'src/app/models/votos.model';
import { PeliculasService } from '../../services/peliculas.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {

  votosP: VotosModel[] = [];
  grafica: any[] = [];
  bandera: boolean = false;
  constructor(private peliculasService: PeliculasService,
    private db: AngularFirestore) {

  }

  ngOnInit() {

    this.getVotosList();

    this.peliculasService.cargarVotosPelis().subscribe(votos => {
      this.votosP = votos;
      if (this.votosP.length > 0) {
        this.bandera = true;
      }

    });
  }

  public getVotosList() {
    this.db.collection('votos').valueChanges().pipe(
      map(res => res.map(({ nombre, votos }) => ({ name: nombre, value: votos }))
        //   {
        //   return res.map( (peliculas:any) => {
        //     return {
        //       name: peliculas.nombre,
        //       value: peliculas.votos
        //     }
        //   })
        // }
      )
    )
      .subscribe(resp => {
        this.grafica = resp;
        // console.log(resp);
        
      })
  }

  votarPeli(data: VotosModel) {
    const votar = data.votos + 1;
  }

}
