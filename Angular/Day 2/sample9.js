var Employee = /** @class */ (function () {
    function Employee(empId, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empId + " " + _this.empName); };
        this.empId = empId;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(123, 'shree');
emp.display();
