import { Email } from "./Email";
import { Validation } from "./Validation";

interface IEmailBuilder {
  title: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  html: string;
}

export class EmailBuilder {
  _email: IEmailBuilder;
  constructor(title: string = "") {
    this._email = new Email(title);
  }
  setFrom(mail: string): this {
    if (!Validation.isEmailValid(mail))
      throw new Error("Invalid email address.");
    this._email.from = mail;
    return this;
  }
  setTo(...mail: string[]): this {
    mail.forEach((item) => {
      if (!Validation.isEmailValid(item))
        throw new Error("Invalid " + item + " address.");
      this._email.to.push(item);
    });
    return this;
  }

  setCc(...cc: string[]): this {
    cc.forEach((item) => {
      if (!Validation.isEmailValid(item))
        throw new Error("Invalid " + item + " address.");
      this._email.cc.push(item);
    });
    return this;
  }
  setBcc(...bcc: string[]): this {
    bcc.forEach((item) => {
      if (!Validation.isEmailValid(item))
        throw new Error("Invalid " + item + " address.");
      this._email.bcc.push(item);
    });
    return this;
  }
  setMessage(msg: string): this {
    Validation.isStringEmpty(msg);
    this._email.html = msg;
    return this;
  }
  build(): Email {
    if (this._email.from === undefined)
      throw new Error(
        "Can't send message without knowing from who it is going."
      );
    if (this._email.to === undefined)
      throw new Error("Can't send messagge to noone.");

    return this._email;
  }
}