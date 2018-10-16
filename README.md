# Achei - BackEnd
Aplicação com o intuito de informar locais de diferentes utilidades em Porto Alegre com a finalidade de auxiliar àqueles que necessitam de determinado serviço, feita para o projeto do S2B.

## Uso
```
npm install
npm run dev
```

## EndPoints Disponíveis

- POST salvarEntidade - /entidade
- DELETE removerEntidade - /entidade/:id
- PUT atualizarEntidade - /entidade

| URL                                     | Description                | Return                      | Parameters                     |
|:---------------------------------------:|:--------------------------:|:---------------------------:|:--------------------------------:|
| GET /places | Buscar todas localidades  |                            | {localizacao: {latitude: "",longitude:""}, descricao: "", tipo: "" }|
| GET /places/:tipo                       | Listar lugares por tipo    |                             |{localizacao:{latitude:"",longitude:""},descricao:""}
| GET /places/:id                         | Detalhamento de localidade |                             |
| POST /place                             | Salvar localidade          |                             |
| DELETE /place/:id                       | Deletar localidade         |                             |
| PUT /entidade                           | Atualizar localidade       |                             |

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
