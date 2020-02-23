import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {

  }

  ngOnInit() {
    console.log('ID da rota pai', this.route.parent.snapshot.params['id']) //recuperando parametro ou id da rota pai no caso o id da oferta
    //recuperando parametro ou id da rota pai no caso o id da oferta (Funçao de callback)
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao
      })
  }
}
