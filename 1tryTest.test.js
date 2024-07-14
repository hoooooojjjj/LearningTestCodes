const fn = require("./fn");

// 테스트 코드 예제
test("1은 1이야", () => {
  // expect(검증할 값).toBe(기대하는 값)
  expect(1).toBe(1);
});

/* 1. fn.add 함수 테스트 */

// test() : 함수의 첫 번째 인자는 테스트에 대한 설명, 두 번째 인자는 테스트 함수
// 테스트 함수 : 검증할 코드를 작성하는 함수
// expect() : 검증할 값을 인자로 받는 함수
// expect().{matcher()} : matcher는 검증 방법을 정의하는 함수

// 성공하는 케이스 : fn.add(2, 3)의 반환값이 5인지 검증
test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// 실패하는 케이스 : fn.add(3, 3)의 반환값이 5인지 검증
// test("3 더하기 3은 5야", () => {
//   expect(fn.add(3, 3)).toBe(5);
// });

// .not 사용해서 성공시키기
test("3 더하기 3은 5가 아니야", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
