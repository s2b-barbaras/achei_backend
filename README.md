# Achei - BackEnd
Aplicação com o intuito de informar locais de diferentes utilidades em Porto Alegre com a finalidade de auxiliar àqueles que necessitam de determinado serviço, feita para o projeto do S2B.
## Recursos
- [NodeJS](https://nodejs.org/en/)
  * TypeScript
  * NPM
- [MongoDB](https://www.mongodb.com/)
- [Json](https://www.json.org/)
- [Datapoa](http://datapoa.com.br/apps)
- [GitHub](https://github.com/)
  * Kanban
  * Versionamento

## Uso
```
npm install
npm run dev
```
* Entre em ``localhost:3000`` para uso.

## EndPoints Disponíveis
```
{
    nome: String,
    localizacao: {
        latitude: Number,
        longitude: Number
    },
    descricao: String,
    tipo: String,
    camposDinamicos: [ Schema.Types.Mixed ],
    keywords: [ String ],
    created_date: {
        type: Date,
        default: Date.now
    }
}
```

| URL                                     | Description                | Return                      | Parameters                     |
|:---------------------------------------:|:--------------------------:|:---------------------------:|:--------------------------------:|
| GET /places | Buscar todas localidades  |                            |  |{nome:"",localizacao: {latitude: "",longitude:""}, descricao: "", tipo: "" } |
| GET /places/:tipo                       | Listar lugares por tipo    |{localizacao:{latitude:"",longitude:""},descricao:""} | {tipo: tipoParam}  
| GET /places/:id                         | Detalhamento de localidade |                             | { _id: req.params.placeId }  |
| POST /place                             | Salvar localidade          |                             | new Place(req.body)          |
| DELETE /place/:id                       | Deletar localidade         |                             |{ _id: req.params.placeId }   |
| PUT /place                           | Atualizar localidade       |                             | { _id: req.params.contactId }|

## Estrutura de uma localidade
```
{
  localizacao: {
    latitude: number,
    longitude: number
  },
  descricao: string,
  tipo: string,
  camposDinamicos: [ { Schema.Types.Mixed }, {}, {}],
  keywords: [ String ],
  created_date: {
  type: Date,
  default: Date.now
  }
}
```
## Melhorias

- Expandir para outros domínios de utilidade (cinemas, postos de gasolina, etc);
- Limitar a quantidade que vem da lista, através de um parâmetro de raio de localização;
- Rotas e Direções;
- Adicionar campos com descrições dos lugares no modal detalhes.
## Licença
Esse projeto foi licenciado sob a licença do MIT - veja [aqui](https://github.com/s2b-barbaras/achei_backend/blob/master/LICENSE) para mais detalhes.

## Autoras

* *Bárbara Anger* -  [GitHub](https://github.com/BarbaraAnger)
  
<a>
  <img 
  alt="Imagem da Autora Bárbara Anger" src="https://avatars3.githubusercontent.com/u/28331915?s=400&v=4" width="100">
</a>

* *Bárbara Becker da Rosa* -  [GitHub](https://github.com/barbbecker)

<a>
  <img 
  alt="Imagem da Autora Bárbara Becker" src="https://avatars1.githubusercontent.com/u/39573350?s=400&u=3a24cbbb390e39b0eaab3c8278124a8b8ee252ae&v=4" width="100">
</a>
