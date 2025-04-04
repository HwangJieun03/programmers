// 변수의 데이터 타입 명시

let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "female";
let course: string = "Typescript";
let completed: boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType {
  Male = "male",
  Female = "female",
  GenderNeutral = "neutral",
}

interface Student {
  stdId: number;
  stdName?: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  //setName(name : string) : void;
  setName?: (name: string) => void;
  getName?: () => string;
}

class MyStudent implements Student {
  stdId = 91011;
  stdName = "park";
  age = 30;
  gender: "male" | "female" = "male";
  course = "node.js";
  completed = true;

  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}

const myInstance = new MyStudent();
myInstance.setName("엘리스");

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "lee",
    age: 20,
    gender: "male",
    course: "javascirpt",
    completed: true,
  };
}

let std = {
  stdId: 91011,
  stdName: "park",
  age: 30,
  gender: "female",
  course: "node.js",
  completed: true,
};

// 인터페이스 재사용성
function setInfo(student: Student): void {
  console.log(student);
}

//setInfo(std);
console.log(getInfo(5678));


// 유니온, 타입 별칭, 타입 가드 
type strOrNum = number | string;

let numStr: strOrNum = 100;
let item : number;

function convertToString(val: strOrNum): string {
  // typeof operator
  if(typeof val === 'string'){
    item = 0;
  }else{
    item = val;
  }
  
  return String(val);
}

function convertToNumber(val: strOrNum): number {
  return Number(val);
}

console.log(convertToString(numStr));
console.log(convertToNumber(numStr));

// 기본 배열 선언 형태 
let numbers : number[] = [1,2,3,4,5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 문자열 배열 선언 형태
let fruits : string[] = ['apple', 'banana', 'orange'];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 배열의 유니온 타입
let mixedArr : (number | string)[] = [1, 'two', 3, 'four'];

for (let i = 0; i<mixedArr.length; i++){
    console.log(mixedArr[i]);
}

// 읽기 전용 배열 : 수정 불가능 
let readOnlyArr : ReadonlyArray<number> = [1,2,3];

// 튜플 : 요소의 개수와 타입이 고정된 배열 (순서 정해져 있음).
let greeting : [number, string, boolean] = [1, 'hello', true];

for (let i =0; i< greeting.length; i++){
    console.log(greeting[i]);
}

// Spread 연산자
let firstArr = [1,2,3];
let secondArr = [4,5,6];

let combineArr = [...firstArr, ...secondArr];

for(let i = 0; i < combineArr.length; i++){
    console.log(combineArr[i]);
}