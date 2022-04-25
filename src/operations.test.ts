import Operations from "./Operations";
const operations = new Operations();
test('sum test', () => {
    expect(operations.sum(2, 3)).toBe(5);
})
test('division test', () => {
    expect(operations.divide(1,2)).toBe(0.5); //toBeCloseTo
})
test('division exception', () => {
    expect(() => operations.divide(5, 0)).toThrowError();
})
test('convert test', () => {
    const ar = [1, 2];
    const expected = [2, 4];
    expect(operations.convert(ar, (n)=> n*2 )).toEqual(expected);
})
test("check predicate", () => {
    expect(operations.checkPredicate((n1, n2) => n1>n2, 4, 2)).toBeTruthy();
})
test("object creation", () => {
    const objExpected = {field: 10};
    expect(operations.getObject(10)).toEqual(objExpected);
})
test("string concatination", () => {
    expect(operations.concat("ab", "cd")).toContain("bc");
})