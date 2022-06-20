export class Conge{
  constructor(
   public id?:string,
   public idEmloye?:string,

   public imageEmploye?:string,
   public nomEmploye?:string,
   public prenomEmploye?:string,
   public emailEmploye?:string,

   public description?:string,
   public dateDebut?:string,
   public dateFin?:string,
   public type?:string,
   public preuve?:string, //imageURL
   public etat?:string
  ){}
}
