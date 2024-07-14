const fn = require("./fn");

/* 2. matcher 종류 */

// toBe : 기대하는 값과 일치하는지 검사(원시타입만 비교 가능 - 얕은 비교)

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// toEqual : 객체나 배열의 값을 비교할 때 사용(객체타입까지 비교 가능 - 깊은 비교)

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(fn.makeUser("sono", 23)).toBe({
//     name: "sono",
//     age: 23,
//   });
// });
test("이름과 나이를 전달받아서 객체를 반환", () => {
  expect(fn.makeUser("sono", 23)).toEqual({
    name: "sono",
    age: 23,
  });
});

// toStrictEqual : 더 엄격하게 객체나 배열의 값을 비교할 때 사용(이왕이면 이걸 사용)

// test("이름과 나이를 전달받아서 객체를 반환", () => {
//   expect(fn.makeUser("sono", 23)).toEqual({
//     name: "sono",
//     age: 23,
//   });
// });
test("이름과 나이를 전달받아서 객체를 반환", () => {
  expect(fn.makeUser("sono", 23)).toStrictEqual({
    name: "sono",
    age: 23,
    gender: undefined,
  });
});

// toBeNull : null인지 검사
// toBeUndefined : undefined인지 검사
// toBeDefined : undefined가 아닌지 검사

// toBeTruthy : truthy한 값인지 검사

test("두 값 1과 2를 더한 값은 truthy하다", () => {
  expect(fn.add(1, 2)).toBeTruthy();
});

// toBeFalsy : falsy한 값인지 검사

test("성별은 falsy한 값이다", () => {
  expect(fn.makeUser("sono", 23).gender).toBeFalsy();
});

// toBeGreaterThan : 기대하는 값보다 큰지 검사
// toBeGreaterThanOrEqual : 기대하는 값보다 크거나 같은지 검사
// toBeLessThan : 기대하는 값보다 작은지 검사
// toBeLessThanOrEqual : 기대하는 값보다 작거나 같은지 검사

test("이름은 10자 이하여야 합니다", () => {
  expect(fn.makeUser("sono", 23).name.length).toBeLessThanOrEqual(10);
});

// toBeCloseTo : 부동소수점을 비교할 때 사용

test("0.1 더하기 0.2는 0.3과 가까워야 한다", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// toMatch : 문자열을 비교할 때 사용

test("Hello World에 e라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/e/);
});

// toContain : 배열에 특정 요소가 포함되어 있는지 검사

test("유저 객체에 sono라는 이름이 있는가?", () => {
  const arr = ["sono", "jason", "neo"];
  expect(arr).toContain("sono");
});

// toThrow : 함수를 실행했을 때 에러가 발생하는지 검사

test("fn.throwErr 함수 실행시 에러가 발생한다", () => {
  expect(fn.throwErr).toThrow();
});

test("fn.throwErr 함수 실행시 에러가 발생한다", () => {
  expect(fn.throwErr).toThrow("사용자 정의 에러 발생");
});
