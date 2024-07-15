const fn = require("./fn");

// 5 . mock function -> 테스트를 위해 모의 함수를 만들 수 있음

// 1. 모의 함수 사용해보기

// jest.fn() -> 모의 함수를 만들어줌
const mockFn = jest.fn();

// 모의 함수를 호출
mockFn();
mockFn(1);

test("함수는 2번 호출됩니다", () => {
  // 모의 함수가 호출된 횟수와 인자를 확인
  console.log(mockFn.mock.calls);
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 인자는 1입니다", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});

// 2. 실제 함수를 만들지 않고 모의 함수를 통해 테스트를 진행할 수 있음

// 2-1. mockFn.mock.calls => 모의 함수가 호출된 횟수와 인자를 확인할 수 있음

const mockFn1 = jest.fn();

const forEachArr = (arr) => {
  arr.forEach((num) => {
    // 여기서 실제로 배열의 요소를 담아서 요소에 +1하는 함수를 실제로 다시 만들지 말고 mock 함수 사용
    mockFn1(num + 1);
  });
};

const arr = [10, 20, 30];

forEachArr(arr);

test("함수는 3번 호촐된다", () => {
  expect(mockFn1.mock.calls.length).toBe(3);
});

test("배열의 요소는 11,21,31 이다", () => {
  expect(mockFn1.mock.calls[0][0]).toBe(11);
  expect(mockFn1.mock.calls[1][0]).toBe(21);
  expect(mockFn1.mock.calls[2][0]).toBe(31);
});

// 2-2. mockFn.mock.results => 모의 함수가 리턴한 값을 확인할 수 있음

// jest.fn()에 인자로 원하는 기능을 하는 콜백함수를 넣을 수 있음
const mockFn2 = jest.fn((num) => num + 1);

const returnArr = (arr) => {
  arr.forEach((num) => {
    // 여기서 실제로 배열의 요소를 담아서 요소에 +1한 값을 리턴하는 함수를 실제로 다시 만들지 말고 mock 함수 사용
    mockFn2(num);
  });
};

const arr2 = [0, 1, 2, 3, 4, 5];

returnArr(arr2);

test("함수는 1,2,3,4,5,6을 반환한다", () => {
  expect(mockFn2.mock.results).toStrictEqual([
    { type: "return", value: 1 },
    { type: "return", value: 2 },
    { type: "return", value: 3 },
    { type: "return", value: 4 },
    { type: "return", value: 5 },
    { type: "return", value: 6 },
  ]);
});
