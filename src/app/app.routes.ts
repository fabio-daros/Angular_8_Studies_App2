//ROTAS - todos os links que acessam cada componente.

import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { OfertaComponent } from './oferta/oferta.component'
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component'
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent }, // raiz ou Home... sem indicar nenhum caminho Home parametro inicializador
    { path: 'restaurantes', component: RestaurantesComponent }, // 2 path restaurantes
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta', component: OfertaComponent },
    { path: 'oferta/:id', component: OfertaComponent,   //Ao passar o oferta/:id indicamos um roteamento para o id da oferta em questao
        children: [                                     //Dentro de ofertas temos duas rotas children que devem ser passadas como array
            { path: '', component: ComoUsarComponent }, //raiz ou Home parametro inicializador
            { path: 'como-usar', component: ComoUsarComponent },
            { path: 'onde-fica', component: OndeFicaComponent },
        ] 
    } 
]