//1

/* 
현재까지 배운 것을 토대로, 아래 함수들에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요
last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 
arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 
세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 
세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
 */

type App1 = {
  <T>(arr: T[]): T;
};

const last: App1 = (arr) => {
  return arr[arr.length - 1];
};

//2
type App2 = {
  <T>(arr: T[], b: T): T[];
};

const prepend: App2 = (arr, b) => {
  const reArray = [b, ...arr];
  return reArray;
};

//3
type App3 = {
  <T, M>(arr: T[], brr: M[]): (T | M)[];
};

const mix: App3 = (arr, brr) => {
  return [...arr, ...brr];
};

//4
type App4 = {
  <T>(arr: T[]): number;
};

const count: App4 = (arr) => arr.length;

//5
type App5 = {
  <T>(arr: T[], b: T): number | undefined;
};

const findIndex: App5 = (arr, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === b) {
      return i;
    }
  }
  return undefined;
};

//6

type App6 = {
  <T>(arr: T[], start: number, end?: number): T[] | undefined;
};

const slice: App6 = (arr, start, end?) => {
  if (end) {
    return arr.slice(start, end);
  }
  return arr.slice(start);
};
