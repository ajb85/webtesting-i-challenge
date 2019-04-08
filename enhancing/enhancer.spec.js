const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!

const item = { name: "Very Real Item", durability: 59, enhancement: 4 };

describe("enchancer.js", () => {
  describe("repair()", () => {
    it("should repair item to full", () => {
      const expected = { ...item, durability: 100 };
      expect(repair(item)).toMatchObject(expected);
    });
  });

  describe("succeed", () => {
    it("should enhance up to 20", () => {
      const test20Max = {
        name: "Testing Max 20 Enhancement",
        durability: 89,
        enhancement: 20
      };
      expect(succeed(item)).toMatchObject({ ...item, enhancement: 5 });
      expect(succeed(test20Max)).toMatchObject({
        ...test20Max,
        enhancement: 20
      });
    });
  });

  describe("fail", () => {
    it("should reduce item based on logic", () => {
      const test15Enhance = {
        name: "Testing 15 Enhancement",
        durability: 50,
        enhancement: 15
      };
      const test16Enhance = {
        name: "Testing 16 Enhancement",
        durability: 50,
        enhancement: 16
      };
      expect(fail(item)).toMatchObject({ ...item, durability: 54 });
      expect(fail(test15Enhance)).toMatchObject({
        ...test15Enhance,
        durability: 40
      });
      expect(fail(test16Enhance)).toMatchObject({
        ...test16Enhance,
        durability: 40,
        enhancement: 15
      });
    });
  });
  //describe("get", () => {});
});
