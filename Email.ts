interface IEmail {
  title: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  html: string;
}

export class Email implements IEmail {
  title: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  html: string;
  constructor(title: string, from: string, to: string[], cc: string[], bcc: string[], html: string) {
    this.title = title;
    this.from = from;
    this.to = to;
    this.cc = cc;
    this.bcc = bcc;
    this.html = html;
  }
}