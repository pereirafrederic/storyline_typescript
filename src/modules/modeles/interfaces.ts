export interface IAuteur {
  id: number,
  pseudo: string,
  nom : string,
  prenom:  string,
  nbOeuvre: number,
  moyenneNote : number
}

export interface IAuteurThematique extends IAuteur {
  thematiques : Array<IThematique>
}

export interface IThematique {
  id : number,
  thematique : string,
  oeuvres : Array<IOeuvre>
}



export interface IOeuvre{
  id: number,
  titre : string
  auteur : string
  thematique : string
  note : number
  don : number

}
