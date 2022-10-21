const Inhabitants = require("../src/hofs");

let inhabitants = null;

describe("Inhabitants", () => {
  beforeEach(() => {
    inhabitants = new Inhabitants([
      { firstName: "John", lastName: "Smith", age: 40 },
      { firstName: "Jane", lastName: "Doe", age: 68 },
      { firstName: "Grace", lastName: "Hopper", age: 85 },
      { firstName: "Bart", lastName: "Simpson", age: 10 }
    ]);
  });
  describe("The getPeopleOver method", () => {
    test("should return an array containing only full names of people older than a certain age", () => {
      let people = inhabitants.getPeopleOver(50);
      let expected = ["Jane Doe", "Grace Hopper"];

      expect(people).toBeInstanceOf(Array);
      expect(people.length).toBe(2);
      expect(people).toEqual(expected);
    });
  });
});
