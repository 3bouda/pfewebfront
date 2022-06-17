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
    public cin?:string,
    public etat?:string,

    public vid?:File,
    public cv?:File,
    public image?:File,

    public imageUrl?:string,
    public cvUrl?:string,
    public vidUrl?:string,
  ){}
}
