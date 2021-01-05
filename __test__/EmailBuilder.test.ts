import { EmailBuilder } from "../EmailBuilder";

const email = new EmailBuilder("Odpisz");

describe("EmailBuilder tests methods behavior", () => {
  it("set From email ", () => {
    email.setFrom("sdadasf@dsad.dsa");
    expect(email._email.from).toEqual("sdadasf@dsad.dsa");
  });

  it("set To email", () => {
    email.setTo("sadsda@dsd.pl", "asd@asd.op");
    expect(email._email.to).toEqual(["sadsda@dsd.pl", "asd@asd.op"]);
    expect(email._email.to).toHaveLength(2);
  });

  it("set Cc email", () => {
    email.setCc("sadsa@dd.io", "sadsadas@dsad.ui");
    expect(email._email.cc).toEqual(["sadsa@dd.io", "sadsadas@dsad.ui"]);
    expect(email._email.cc).toHaveLength(2);
  });

  it("set Bcc email", () => {
    email.setBcc("sadsdadas@dsads.hds", "sadsad@dsd.iuy");
    expect(email._email.bcc).toEqual(["sadsdadas@dsads.hds", "sadsad@dsd.iuy"]);
    expect(email._email.bcc).toHaveLength(2);
  });

  it("set Message", () => {
    email.setMessage("Qitaj");
    expect(email._email.html).toEqual("Qitaj");
  });

  it("build", () => {
    expect(email.build()).toMatchObject({
      title: "Odpisz",
      from: "sdadasf@dsad.dsa",
      to: ["sadsda@dsd.pl", "asd@asd.op"],
      cc: ["sadsa@dd.io", "sadsadas@dsad.ui"],
      bcc: ["sadsdadas@dsads.hds", "sadsad@dsd.iuy"],
      html: "Qitaj"
    });
  });
});

describe("EmailBuilder tests for errors", () => {
  it("set From wrong argument (not string) should throw error", () => {
    () => expect(email.setFrom(234)).toThrowError();
  });

  it("set To wrong argument should not add wrong argument to list", () => {
    email.setTo(321, "werty@pl.oj");
    expect(email._email.to).toEqual([
      "sadsda@dsd.pl",
      "asd@asd.op",
      "werty@pl.oj"
    ]);
  });

  it("set Cc wrong argument should not add wrong argument to list", () => {
    email.setTo(321, { sadsaa: 34 });
    expect(email._email.cc).toEqual(["sadsa@dd.io", "sadsadas@dsad.ui"]);
  });

  it("set Bcc wrong argument should not add wrong argument to list", () => {
    email.setTo(321, [34]);
    expect(email._email.bcc).toEqual(["sadsdadas@dsads.hds", "sadsad@dsd.iuy"]);
  });

  it("set Message should throw error with wrong argument", () => {
    () => expect(email.setMessage(123)).toThrowError();
  });

  it("set Message should throw error with empty string", () => {
    () => expect(email.setMessage("")).toThrowError();
  });

  it("build with no setFrom should throw error", () => {
    const email2 = new EmailBuilder("Nowy tytul");
    () => expect(email2.build()).toThrowError("Empty string.");
  });

  it("build with no setTo should throw error", () => {
    const email3 = new EmailBuilder("Nowszy tytul").setFrom("adsad@sda.ko");
    () => expect(email3.build()).toThrowError("Can't send message to noone.");
  });
});
