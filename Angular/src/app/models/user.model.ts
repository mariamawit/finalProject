export class UserModel {

  constructor(public email: string,
              public password: string,
              public firstName?: string,
              public lastName?: string
              ) {}
}
