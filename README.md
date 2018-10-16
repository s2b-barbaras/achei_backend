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

| URL                                     | Description                | Return                      | Parameters                     |
|:---------------------------------------:|:--------------------------:|:---------------------------:|:--------------------------------:|
| GET /places | Buscar todas localidades  |                            | {localizacao: {latitude: "",longitude:""}, descricao: "", tipo: "" }|
| GET /places/:tipo                       | Listar lugares por tipo    |                             |{localizacao:{latitude:"",longitude:""},descricao:""}
| GET /places/:id                         | Detalhamento de localidade |                             |
| POST /place                             | Salvar localidade          |                             |
| DELETE /place/:id                       | Deletar localidade         |                             |
| PUT /entidade                           | Atualizar localidade       |                             |

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
## Contato
![Bárbara Anger](https://avatars0.githubusercontent.com/u/28331915?s=275&u=860804e9a8d3697f9cead7e446bc10a5b938266d&v=4)
#### Bárbara Anger
Desenvolvedora web. Entre em contato:
- [facebook](fb.com/BarbaraAngerr)
- [instagram](instagram.com/barbaraangerr)
- Skype: Barbara Anger
- E-mail: [barbaraanger@hotmail.com](barbaraanger@hotmail.com)
