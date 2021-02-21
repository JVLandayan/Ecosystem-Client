export class User {
  constructor(
    public userId: number,
    public authId: number,
    public first_name: string,
    public last_name: string,
    public email : string,
    public password:string,
    public forgot_password_id: string,
    public media_id: number
    ) {}
}
