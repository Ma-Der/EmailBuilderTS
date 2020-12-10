export class Validation {
    static isStringEmpty(str: string): void {
      if (str.length === 0) throw new Error("Empty string.");
    }
    static isEmailValid(email: string): boolean {
      const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      return reg.test(email);
    }
  }
