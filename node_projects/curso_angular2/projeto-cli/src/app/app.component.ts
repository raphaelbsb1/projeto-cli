import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app alteração!';

  contador: number = null;


  listaPleitos = [
  {
    "nrPleito": "1",
    "nomePleito": "Pleito 1",
    "eleicoes": [
      {
        "nrEleicao": "1",
        "nomeEleicao": "Pleito 1 Eleição 1",
        "localizades": [
          {
            "nrLocalidade": "1",
            "nomeLocalidade": "Zona 01",
            "municipios": [
              {
                "nrMunicipio": "1",
                "nomeMunicipio": "Municipio 1"
              },
              {
                "nrMunicipio": "2",
                "nomeMunicipio": "Municipio 2"
              }
            ]
          },
          {
            "nrLocalidade": "2",
            "nomeLocalidade": "Zona 02",
            "municipios": [
              {
                "nrMunicipio": "3",
                "nomeMunicipio": "Municipio 3"
              },
              {
                "nrMunicipio": "3",
                "nomeMunicipio": "Municipio 3"
              }
            ]
          }
        ]
      },
      {
        "nrEleicao": "2",
        "nomeEleicao": "Pleito 1 Eleição 2",
        "localizades": [
          {
            "nrLocalidade": "3",
            "nomeLocalidade": "Zona 03",
            "municipios": [
              {
                "nrMunicipio": "4",
                "nomeMunicipio": "Municipio 4"
              },
              {
                "nrMunicipio": "5",
                "nomeMunicipio": "Municipio 5"
              }
            ]
          },
          {
            "nrLocalidade": "4",
            "nomeLocalidade": "Zona 04",
            "municipios": [
              {
                "nrMunicipio": "6",
                "nomeMunicipio": "Municipio 6"
              },
              {
                "nrMunicipio": "7",
                "nomeMunicipio": "Municipio 7"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nrPleito": "2",
    "nomePleito": "Pleito 2",
    "eleicoes": [
      {
        "nrEleicao": "3",
        "nomeEleicao": "Pleito 2 Eleição 3",
        "localizades": [
          {
            "nrLocalidade": "4",
            "nomeLocalidade": "Eleição GERAL"
          },
          {
            "nrLocalidade": "5",
            "nomeLocalidade": "Zona 05",
            "municipios": [
              {
                "nrMunicipio": "5",
                "nomeMunicipio": "Municipio 5"
              },
              {
                "nrMunicipio": "6",
                "nomeMunicipio": "Municipio 6"
              }
            ]
          }
        ]
      }
    ]
  }
];

  listaEleicoes = [];

  recuperaEleicao(valor){
    console.log(valor);
    this.listaEleicoes = [{"nrEleicao": "1", "nomeEleicao": "eleição 1"},
                          {"nrEleicao": "2", "nomeEleicao": "eleição 2"}];
  }


}
