// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드 

class Employee {

    constructor(
        private _empName : string , 
        private _age : number, 
        private _empJob: string
        ){}

    // getter : _empName 읽을 때 사용
    get empName(){
        return this._empName;
    }

	// setter : _empName 변경할 때 사용 
    set empName(val : string){
        this._empName = val;
    }

    printEmp = (): void => {
        console.log(`${this._empName}의 나이는 ${this._age}, 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('황지은', 23, '개발자');

employee1.empName = '이지은';

employee1.printEmp();