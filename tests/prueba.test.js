const { sortArray, adjacentProduct, strictlyIncreasing,searchMax , findMax} = require("../main");
describe("searchMax", () => {
  it("should return {max: 10, pos: [0, 7]} for input [10, 1, 5, 4, 9, 1, 6, 10]", () => {
    expect(searchMax([10, 1, 5, 4, 9, 1, 6, 10])).toEqual({ max: 10, pos: [0, 7] });
  });

  it("should return {max: 5, pos: [0]} for input [5, 4, 3, 2, 1]", () => {
    expect(searchMax([5, 4, 3, 2, 1])).toEqual({ max: 5, pos: [0] });
  });

  it("should return {max: 7, pos: [1, 4]} for input [4, 7, 2, 5, 7]", () => {
    expect(searchMax([4, 7, 2, 5, 7])).toEqual({ max: 7, pos: [1, 4] });
  });

  it("should return {max: -1, pos: [0]} for input [-1, -2, -3, -4]", () => {
    expect(searchMax([-1, -2, -3, -4])).toEqual({ max: -1, pos: [0] });
  });

  it("should return {max: 0, pos: [0]} for input [0]", () => {
    expect(searchMax([0])).toEqual({ max: 0, pos: [0] });
  });

  it("should return {max: null, pos: []} for an empty array", () => {
    expect(searchMax([])).toEqual({ max: null, pos: [] });
  });

  it("should return {max: 10, pos: [0, 1, 2, 3]} for input [10, 10, 10, 10]", () => {
    expect(searchMax([10, 10, 10, 10])).toEqual({ max: 10, pos: [0, 1, 2, 3] });
  });
});
describe("findMax", () => {
  beforeEach(() => {
    jest.spyOn(Math, 'max');
  });

  afterEach(() => {
    Math.max.mockRestore();
  });

  it("should return 10 for input [10, 1, 5, 4, 9, 1, 6, 10]", () => {
    expect(findMax([10, 1, 5, 4, 9, 1, 6, 10])).toEqual(10);
    expect(Math.max).toHaveBeenCalled();
  });

  it("should return 5 for input [5, 4, 3, 2, 1]", () => {
    expect(findMax([5, 4, 3, 2, 1])).toEqual(5);
    expect(Math.max).toHaveBeenCalled();
  });

  it("should return 7 for input [4, 7, 2, 5, 7]", () => {
    expect(findMax([4, 7, 2, 5, 7])).toEqual(7);
    expect(Math.max).toHaveBeenCalled();
  });

  it("should return -1 for input [-1, -2, -3, -4]", () => {
    expect(findMax([-1, -2, -3, -4])).toEqual(-1);
    expect(Math.max).toHaveBeenCalled();
  });

  it("should return 0 for input [0]", () => {
    expect(findMax([0])).toEqual(0);
    expect(Math.max).toHaveBeenCalled();
  });

  it("should return null for an empty array", () => {
    expect(findMax([])).toEqual(null);
    expect(Math.max).not.toHaveBeenCalled();
  });

  it("should return 10 for input [10, 10, 10, 10]", () => {
    expect(findMax([10, 10, 10, 10])).toEqual(10);
    expect(Math.max).toHaveBeenCalled();
  });
});
describe("Ordenamient de arreglo", () => {
  it("[7, 2, 5, 3, 9, 1] must be [1, 2, 3, 5, 7, 9]", () => {
    expect(sortArray([7, 2, 5, 3, 9, 1])).toEqual([1, 2, 3, 5, 7, 9]);
  });



  it("[1, 1, 1, 1] must be [1, 1, 1, 1]", () => {
    expect(sortArray([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });

  it("[] must be []", () => {
    expect(sortArray([])).toEqual([]);
  });

  it("[5] must be [5]", () => {
    expect(sortArray([5])).toEqual([5]);
  });



  it("[5, 4, 3, 2, 1] must be [1, 2, 3, 4, 5]", () => {
    expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Adjacent Product", () => {
  it("[3, 6, -2, -5, 7, 3] must be 21", () => {
    expect(adjacentProduct([3, 6, -2, -5, 7, 3])).toEqual(21);
  });

  it("[1, 2, 3, 4, 5] must be 20", () => {
    expect(adjacentProduct([1, 2, 3, 4, 5])).toEqual(20);
  });

  it("[9, 5, 10, 2, 24, -1, -48] must be 50", () => {
    expect(adjacentProduct([9, 5, 10, 2, 24, -1, -48])).toEqual(50);
  });

  it("[-23, 4, -3, 8, -12] must be -12", () => {
    expect(adjacentProduct([-23, 4, -3, 8, -12])).toEqual(-12);
  });

  it("[5, 1, 2, 3, 1, 4] must be 6", () => {
    expect(adjacentProduct([5, 1, 2, 3, 1, 4])).toEqual(6);
  });

  it("[1, 0, 1, 0, 1000] must be 0", () => {
    expect(adjacentProduct([1, 0, 1, 0, 1000])).toEqual(0);
  });

  it("[2, 3] must be 6", () => {
    expect(adjacentProduct([2, 3])).toEqual(6);
  });

  it("[1000, 999] must be 999000", () => {
    expect(adjacentProduct([1000, 999])).toEqual(999000);
  });

  it("[-1, -2, -3, -4] must be 12", () => {
    expect(adjacentProduct([-1, -2, -3, -4])).toEqual(12);
  });

  it("[-1, -2, 3, 4, -5] must be 12", () => {
    expect(adjacentProduct([-1, -2, 3, 4, -5])).toEqual(12);
  });
});
describe("Strictly Increasing", () => {
  it("[0, -2, 5, 6] must be true", () => {
    expect(strictlyIncreasing([0, -2, 5, 6])).toEqual(true);
  });

  it("[1, 1, 1, 2, 3] must be false", () => {
    expect(strictlyIncreasing([1, 1, 1, 2, 3])).toEqual(false);
  });

  it("[10, 1, 2, 3, 4, 5] must be true", () => {
    expect(strictlyIncreasing([10, 1, 2, 3, 4, 5])).toEqual(true);
  });

  it("[1, 3, 2, 1] must be false", () => {
    expect(strictlyIncreasing([1, 3, 2, 1])).toEqual(false);
  });

  it("[1, 2, 3, 4, 5] must be true", () => {
    expect(strictlyIncreasing([1, 2, 3, 4, 5])).toEqual(true);
  });

  it("[1, 2, 5, 3, 5] must be true", () => {
    expect(strictlyIncreasing([1, 2, 5, 3, 5])).toEqual(true);
  });

  it("[1, 2, 3, 3, 5] must be true", () => {
    expect(strictlyIncreasing([1, 2, 3, 3, 5])).toEqual(true);
  });

  it("[1, 3, 2, 4, 5] must be true", () => {
    expect(strictlyIncreasing([1, 3, 2, 4, 5])).toEqual(true);
  });

  it("[1] must be true", () => {
    expect(strictlyIncreasing([1])).toEqual(true);
  });

  it("[3, 1, 2] must be true", () => {
    expect(strictlyIncreasing([3, 1, 2])).toEqual(true);
  });

  it("[1, 2, 1, 2] must be false", () => {
    expect(strictlyIncreasing([1, 2, 1, 2])).toEqual(false);
  });
});