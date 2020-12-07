import { Email } from './Email';
import { Validation } from './Validation';

  
export class EmailBuilder {
  email: Email;
    constructor(title: string = '') {
      this.email = new Email(title);
    }
    setFrom(mail: string): this {
      if(!Validation.validateEmail(mail)) throw new Error('Invalid email address.');
      this.email.from = mail
      return this
    }
    setTo(...mail: string[]): this {
      mail.forEach(item => {
        if(!Validation.validateEmail(item)) throw new Error('Invalid ' + item +' address.');
        this.email.to.push(item)
      });
      return this
    }
   
    setCc(...cc: string[]): this {
      cc.forEach(item => {
        if(!Validation.validateEmail(item)) throw new Error('Invalid ' + item +' address.');
        this.email.cc.push(item)
      });
      return this
    }
    setBcc(...bcc: string[]): this {
      bcc.forEach(item => {
        if(!Validation.validateEmail(item)) throw new Error('Invalid ' + item +' address.');
        this.email.bcc.push(item)
      });
      return this
    }
    setMessage(msg: string): this {
      Validation.isStringValid(msg);
      this.email.html = msg
      return this
    }
    build(): Email {
      if(this.email.from === undefined) throw new Error("Can't send message without knowing from who it is going.")
      if(this.email.to === undefined) throw new Error("Can't send messagge to noone.");
      return this.email;
    }
}
  
