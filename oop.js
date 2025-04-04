// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드 
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, ", \uC9C1\uC5C5\uC740 ").concat(_this._empJob, "\uC785\uB2C8\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // getter : _empName 읽을 때 사용
        get: function () {
            return this._empName;
        },
        // setter : _empName 변경할 때 사용 
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('황지은', 23, '개발자');
employee1.empName = '이지은';
employee1.printEmp();
