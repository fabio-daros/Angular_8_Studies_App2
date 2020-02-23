import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute,
    private ofertasService: OfertasService) {
  }

  ngOnInit() {
    //console.log('ID recuperado da rota', this.route.snapshot.params['id'])
    //SNAPSHOT : As informaçoes do snapshot ficam armazendas no params da rota ativa da aplicação...

    // this.route.params.subscribe((parametro : any) => {
    // console.log(parametro.id)
    //SUBSCRIBE : fica assistindo e quando um id é modificado ele reage com alguma ação...
    //})

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        // console.log(this.oferta)
      })

    //Esse Observable fica o tempo todo escutando as alteracoes

    /*
    this.route.params.subscribe(
      (parametro: any) => { console.log(parametro) },
      (erro: any) => console.log(erro),
      () => console.log('Processamento foi classificado como concluído!')
    )
    */

    // let tempo = Observable.interval(500) //500ms

    const tempo = interval(2000).subscribe((intervalo: number) => { //forma de declaracao no angular 8
      console.log(intervalo)
    })
  }
}
