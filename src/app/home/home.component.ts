import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService] //meta dado providers de OfertasService ... assim utilizamos de forma correta o Service
  //Ou seja, uma injeção de serviço dentro deste componente (componente home recebendo informação do serviço ofertas.service.ts)
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] //databind com o template (contexto do angular)

  constructor(private ofertasService: OfertasService) { } //criando a variavel ofertasService com o tipo OfertasService (importada)

  ngOnInit() { //aqui inicia o que vai aparecer no browser
    //this.ofertas = this.ofertasService.getOfertas() //aqui vem o array do serviço ofertas.service.ts
    //console.log(this.ofertas)

    this.ofertasService.getOfertas() //retorna uma promessa aqui 
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      }) //executa uma ação quando a promessa estiver resolvida (Arrow Function)
      .catch((param: any) => {
        console.log(param)

      })
  }

}
