// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "female";
var course = "Typescript";
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id) {
    return {
        stdId: id,
        stdName: "lee",
        age: 20,
        gender: "male",
        course: "javascirpt",
        completed: true,
    };
}
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: "female",
    course: "node.js",
    completed: true,
};
// 인터페이스 재사용성
function setInfo(student) {
    console.log(student);
}
//setInfo(std);
console.log(getInfo(5678));
var numStr = 100;
var item;
function convertToString(val) {
    // typeof operator
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
// 기본 배열 선언 형태 
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 문자열 배열 선언 형태
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 배열의 유니온 타입
var mixedArr = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArr.length; i++) {
    console.log(mixedArr[i]);
}
// 읽기 전용 배열 : 수정 불가능 
var readOnlyArr = [1, 2, 3];
// 튜플 : 요소의 개수와 타입이 고정된 배열 (순서 정해져 있음).
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// Spread 연산자
var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var combineArr = __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
for (var i = 0; i < combineArr.length; i++) {
    console.log(combineArr[i]);
}
