const ArrayManipulator = require("../ArrayManipulator.js");
const expect = require("chai").expect;

describe("testing bogus array size", () => {
  it("should only have on item in the array when a single push executes", () => {
    const manipulator = new ArrayManipulator();
    // hi
    manipulator.addItem("hi");

    expect(manipulator.bogusArr.length).to.eq(1);
  });
});
