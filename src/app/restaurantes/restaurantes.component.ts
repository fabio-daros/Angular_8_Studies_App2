import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[] // atributo oferta que é um array de Ofertas para fazer um databind

  constructor(private ofertasService: OfertasService) {  //inferindo o tipo o construtor ja sabe para onde apontar

  }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante') //promessa...
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      })
  }
}
