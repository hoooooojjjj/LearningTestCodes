const fn = require("./fn");

/* 3. 비동기함수 테스트 */

// 콜백 형태의 비동기 코드 테스트
// 콜백 형태는 done을 사용해서 비동기 함수가 실행된 후 done()을 실행시켜 테스트 한다.
// 에러 처리는 expect()와 done()을 try-catch문으로 감싸서 처리한다.
// catch문에서 done(e)를 실행시켜 에러를 출력해야 한다.

test("콜백함수로 3초 후에 받아온 이름은 sono이다", (done) => {
  // 테스트 코드 안에 콜백 함수 정의 후 여기서 expect()로 검증하고 done()을 실행시킨다.
  const getName = (name) => {
    try {
      expect(name).toBe("sono");
      done();
    } catch (e) {
      done(e);
    }
  };

  fn.callback_returnNameAfter3("sono", getName);
});

// Promise 형태의 비동기 코드 테스트
// Promise 형태는 return을 사용해서 비동기 함수를 실행하고 then()을 사용해서 테스트 한다.

test("프로미스로 3초 후에 받아온 나이는 23이다", () => {
  const getAge = (age) => {
    return age;
  };
  return fn.promise_returnAgeAfter3(23, getAge).then((age) => {
    try {
      expect(age).toBe(23);
    } catch (e) {}
  });
});

// 더 간단한  Promise 형태의 비동기 코드 테스트 방법
// then을 사용하지 않고 resolves나 rejects를 사용하는 것이다.

test("프로미스로 3초 후에 받아온 나이는 23이다", () => {
  const getAge = (age) => {
    return age;
  };
  return expect(fn.promise_returnAgeAfter3(23, getAge)).resolves.toBe(23);
});

// async/await 형태의 비동기 코드 테스트

test("await로 3초 후에 받아온 나이는 23이다", async () => {
  const getAge = (age) => {
    return age;
  };

  // 꼭 변수로 받아와서 await 후 expect()를 실행해야 한다.
  const test = await fn.promise_returnAgeAfter3(23, getAge);
  expect(test).toBe(23);

  // 또는 resolves나 rejects를 사용할 수도 있다.
  // await expect(fn.promise_returnAgeAfter3(23, getAge)).resolves.toBe(23);
});
