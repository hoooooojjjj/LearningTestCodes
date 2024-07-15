const fn = require("./fn");

// /* 4. 테스트 전후 작업 */

// // beforeEach() : 각 테스트가 실행되기 전에 호출
// // afterEach() : 각 테스트가 실행된 후에 호출

// // 1. beforeEach() 사용해서 각 테스트가 실행되기 전에 num을 0으로 초기화

// let num = 0;

// // 각 테스트가 실행되기 전에 num을 0으로 초기화
// beforeEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이다", () => {
//   num = fn.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0 더하기 2은 2이다", () => {
//   num = fn.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0 더하기 3은 3이다", () => {
//   num = fn.add(num, 3);
//   expect(num).toBe(3);
// });

// test("0 더하기 4은 4이다", () => {
//   num = fn.add(num, 4);
//   expect(num).toBe(4);
// });

// // 2. beforeAll()를 사용해서 맨 처음만 유저 DB에서 0.5초간 정보 조회 후 맨 마지막에만 afterAll()를 사용해서 DB 0.5초 후 연결 해제

// let user = null;

// // beforeAll()를 사용해서 맨 처음만 유저 DB에서 0.5초간 정보 조회
// beforeAll(async () => {
//   user = await fn.connectUserDB();
// });

// // afterAll()를 사용해서 맨 마지막에만 DB 0.5초 후 연결 해제
// afterAll(() => {
//   return fn.disConnectUserDB();
// });

// test("유저의 이름은 Mike이다", () => {
//   expect(user.name).toBe("Mike");
// });

// test("유저의 나이는 30이다", () => {
//   expect(user.age).toBe(30);
// });

// test("유저의 성별은 male이다", () => {
//   expect(user.gender).toBe("male");
// });

// // 3. describe를 통해 테스트 그룹화

// describe("자동차 관련 작업", () => {
//   let car = null;

//   // beforeAll()를 사용해서 맨 처음만 유저 DB에서 0.5초간 정보 조회
//   beforeAll(async () => {
//     car = await fn.connectCarDB();
//   });

//   // afterAll()를 사용해서 맨 마지막에만 DB 0.5초 후 연결 해제
//   afterAll(() => {
//     return fn.disConnectCarDB();
//   });
//   test("자동차의 브랜드는 bmw이다", () => {
//     expect(car.brand).toBe("bmw");
//   });

//   test("자동차의 모델은 z4이다", () => {
//     expect(car.model).toBe("z4");
//   });

//   test("자동차의 색은 black이다", () => {
//     expect(car.color).toBe("black");
//   });
// });

// 3. describe를 통해 테스트 그룹화할 때 beforeEach()와 afterEach() , beforeAll()와 afterAll() 순서
beforeAll(() => console.log("밖 beforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2 6
afterEach(() => console.log("밖 afterEach")); // 4 10
afterAll(() => console.log("밖 afterAll")); // 12

test("0 더하기 1은 1이다", () => {
  // 3
  let num = fn.add(0, 1);
  expect(num).toBe(1);
});

describe("테스트 그룹", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 11

  test("0 더하기 2은 2이다", () => {
    // 8
    let num = fn.add(0, 2);
    expect(num).toBe(2);
  });
});
