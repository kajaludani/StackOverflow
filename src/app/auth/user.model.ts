export class User {
    constructor(
      public email: string,
      public password: string,
      public _id?: string,
      public userName?: string,
      public title?:string,
      public body?:string,
      public tag?:string,
      public comment?:string
    ) {}
  
  }
  