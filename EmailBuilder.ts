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
  private _email: IEmailBuilder;
  constructor(title: string = "") {
    this._email = {
      title,
      from: '',
      to: [],
      cc: [],
      bcc: [],
      html: ''
    };
  }
  setFrom(email: string) {
    if (!Validation.isEmailValid(email))
      throw new Error("Invalid email address.");
    this._email.from = email;
    return this;
  }
  setTo(...emails: string[]) {
    emails.forEach((item) => {
      this._email.to.push(item);
      if (!Validation.isEmailValid(item)) {
        console.log("Invalid " + item + " address.");
        const lastEmail = this._email.to.length-1;
        this._email.to.splice(lastEmail, 1);
      }
    });
    
    
    return this;
  }

  setCc(...cc: string[]) {
    cc.forEach((item) => {
      if (!Validation.isEmailValid(item)) {
        console.log("Invalid " + item + " address.");
        const lastEmail = this._email.to.length-1;
        this._email.to.splice(lastEmail, 1);
      }
    });
    return this;
  }
  setBcc(...bcc: string[]) {
    bcc.forEach((item) => {
      if (!Validation.isEmailValid(item)) {
        console.log("Invalid " + item + " address.");
        const lastEmail = this._email.to.length-1;
        this._email.to.splice(lastEmail, 1);
      }
    });
    return this;
  }
  setMessage(msg: string) {
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
    return new Email(this._email.title, this._email.from, this._email.to, this._email.cc, this._email.bcc, this._email.html);
  }
}