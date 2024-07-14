// 테스트할 함수 모음
const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("사용자 정의 에러 발생");
  },
  callback_returnNameAfter3: (name, callback) => {
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  promise_returnAgeAfter3: (age, callback) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(callback(age));
      }, 3000);
    });
  },
  connectUserDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Mike", age: 30, gender: "male" });
      }, 500);
    });
  },
  disConnectUserDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
  connectCarDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ brand: "bmw", model: "z4", color: "black" });
      }, 500);
    });
  },
  disConnectCarDB: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  },
};

module.exports = fn;
