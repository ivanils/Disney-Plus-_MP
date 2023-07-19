import { Component, OnInit } from '@angular/core';
import { Disney } from '../interfaces/interfaces';

@Component({
  selector: 'app-para-ti',
  templateUrl: './para-ti.component.html',
  styleUrls: ['./para-ti.component.scss']
})
export class ParaTiComponent implements OnInit {

  eternals : Disney = {
    imgTitulo   : '/assets/imgs/eternals.png',
    imax        : 'Ya disponible en IMAX Enhanced',
    info        : 'disneyplus.com/IMAXEnhanced',
    edad_tag    : '/assets/imgs/12.png',
    imax_tag    : '/assets/imgs/imax.png',
    ad          : '/assets/imgs/ad.png',
    anio         : 2021,
    duracion    : '2h 37min',
    categorias  : ['Ciencia ficción,', 'Superhéroe,', 'Acción y aventura'],
    enlaces     : ['#', '#'],
    botones     : ['#', '#'],
    descripcion : '"Eternals", de Marvel Studios sigue a un grupo de héroes de más allá de las estrellas que han protegido la Tierra desde los albores del hombre. Cuando unas criaturas monstruosas llamadas Desviantes, que se creían extintas para siempre, regresan de forma misteriosa, los Eternos se ven obligados a reunirse para defender a la humanidad una vez más.',
    secciones   : ['SUGERENCIAS', 'EXTRAS', 'VERSIONES', 'DETALLES'],
    imagenes    : ['/assets/imgs/scale-1.jpeg', '/assets/imgs/scale-2.jpeg', '/assets/imgs/scale-3.jpeg', '/assets/imgs/scale-4.jpeg', '/assets/imgs/scale-1.jpeg', '/assets/imgs/scale-2.jpeg']
  }

  constructor() { }

  ngOnInit(): void {
  }

}