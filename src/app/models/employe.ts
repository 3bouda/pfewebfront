export class Employe{
  constructor(

    public id?:string,
    public departementId?:string,

    public nom?:string,
    public prenom?:string,
    public tel?:string,
    public email?:string,
    public adresse?:string,

    public motDePasse?:string,
    public CIN?:string,
    public etat?:string,

    public imageUrl?:string
  ){}
}
