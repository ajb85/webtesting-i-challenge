const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!

const item = { name: "Very Real Item", durability: 59, enhacement: 4 };

describe("enchancer.js", () => {
  describe("repair()", () => {
    it("should repair item to full", () => {
      const expected = { ...item, durability: 100 };
      expect(repair(item)).toMatchObject(expected);
    });
  });

  //describe("succeed", () => {});

  //describe("fail", () => {});

  //describe("get", () => {});
});
