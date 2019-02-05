class Employee {
    empId: number;
    empName: string;

    constructor(empId : number , name : string){
        this.empId = empId;
        this.empName = name;
    }
    display = () => console.log(this.empId + " " + this.empName);
}

let emp = new Employee(123,'shree');
emp.display();