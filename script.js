//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

let p1=new Person("john",25);
console.log(p1.name);
p1.age=30;
console.log(p1.age);

let s1=new Student("john",30);
s1.study();

let T1=new Teacher("john",30);
T1.teach()
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
