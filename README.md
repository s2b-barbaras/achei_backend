# Achei - BackEnd
Aplicação com o intuito de informar locais de diferentes utilidades em Porto Alegre com a finalidade de auxiliar àqueles que necessitam de determinado serviço, feita para o projeto do S2B.

## Uso
``
npm install
npm run dev
``

## EndPoints Disponíveis

-  - /entidades
- GET listarEntidadesByTipo - /entidades/:tipo
- GET buscarEntidadeById - /entidade/:id
- POST salvarEntidade - /entidade
- DELETE removerEntidade - /entidade/:id
- PUT atualizarEntidade - /entidade

| URL                             | Description            | Return                     | Parameters                       |
|:-------------------------------:|:----------------------:|:--------------------------:|:--------------------------------:|
| GET buscarTodasEntidades        | Buscar todas entidades | {place: place, token: token} | {localizacao: {latitude: "",longitude:""}, decricao: "", tipo: "" }        |

## Estrutura de uma entidade
```
{
  localizacao: {
    latitude: number,
    longitude: number
  },
  descricao: string,
  tipo: string,
  camposDinamicos: [ { label: string, valor: any }, {}, {}],
  keywords: [ 'pago' ]
}
```
## Melhorias

- Expandir para outros domínios de utilidade (cinemas, postos de gasolina, etc)
- Limitar a quantidade que vem da lista, através de um parâmetro de raio de localização
