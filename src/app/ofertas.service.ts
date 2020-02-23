import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { URL_API } from './app.api' //puxa de app.api.ts a url inicial que sera utilizada.

//import 'rxjs/add/operator/toPromise' // **Nesta versao (8) do angular, nao é mais necessario importar essa biblioteca**

@Injectable() //decorando a classe com Injectable para assim o nosso servico ter acesso ao modulo http client do angular

export class OfertasService {

    // private url_api = 'http://localhost:3000/ofertas' //url usada em comum para os demais componentes .... melhora a manutençao.

    constructor(private httpClient: HttpClient) { // construtor da classe com atributo private do tipo HttpClient

    }

    public getOfertas(): Promise<Oferta[]> {
        //metodo que efetua uma requisicao http
        return this.httpClient.get(`${URL_API}/ofertas?destaque=true`) //?destaque=true -> Inteligencia do jsonServer para tratar o http
            .toPromise()      //metodo ou verbo get (consulta, consumir um servico select na base de dados)
            .then((resposta: any) => resposta)
        //retorna um promisse com oferta[] array de ofertas
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.httpClient.get(`${URL_API}/ofertas?categoria=${categoria}`) //abre e fecha crases backticks recurso do eS6 para concatenar 
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.httpClient.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {                                        //** (Metodo shift) extrai a primeira posicao de um array interferindo nas demais... tira o 0 e o que era 1 sera 0
                return resposta[0]
            })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.httpClient.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.httpClient.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao
            })
    }
    
}




















// PROMISES LEARNING ===========================REMOVIDO=======================================

/* public getOfertas2(): Promise<Oferta[]> { //Promise é nativo do Js
     return new Promise((resolve, reject) => { // Processamento assincrono
         //algum tipo de processamento, que ao finalizar, chama a funcao resolve ou reject
         //console.log('Passou aqui na promessa')
         let deu_certo = true
         if (deu_certo) {
             setTimeout(() => resolve(this.ofertas), 3000) //encapsulando a função
             //Pomise
         } else {
             reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ' })
         }
     })
         .then((ofertas: Oferta[]) => {
             //fazer uma trativa
             console.log('primeiro .then')
             return ofertas
         })
         .then((ofertas: Oferta[]) => {
             //fazer uma trativa
             console.log('segundo .then') // um then só vai ser executado após o outro ter sido executado
             return new Promise((resolve2, reject2) => {
                 setTimeout(() => { resolve2(ofertas) }, 3000)
             })
         })
         .then((ofertas: Oferta[]) => { //esse terceiro then somente sera executado após passado os tres segundos do segundo then.. (entao ele aguarda)
             //fazer uma trativa
             console.log('Terceiro .then executado após 3 segundos porque estava aguardando o segundo then')
             return ofertas
         })
 } ===============================================REMOVIDO===============================================================================*/