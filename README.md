# achei_backend
Aplicação com o intuito de informar locais de diferentes coisas em Porto Alegre, feita para o projeto do S2B.




## EndPoints Disponíveis

- GET buscarTodasEntidades - /entidades
- GET listarEntidadesByTipo - /entidades/:tipo
- GET buscarEntidadeById - /entidade/:id
- POST salvarEntidade - /entidade
- DELETE removerEntidade - /entidade/:id
- PUT atualizarEntidade - /entidade

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
