export class Email {
  title: string;
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  html: string;
    constructor(title: string) {
      this.title = title
      this.from = ''
      this.to = []
      this.cc = []
      this.bcc = []
      this.html = ''
    }
}