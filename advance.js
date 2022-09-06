this.car = `global car`;

const personal ={ 
    car:`personal car`,
    runCar(){
        console.log(`running ${this.car}`);
    }
}

console.log(this.car);
personal.runCar();


class Student{
    static count
    constructor(name,age,ph,marks){
        this.name = name;
        this.age = age;
        this.ph =ph;
        this.marks = marks;
        Student.prototype.count = Student.prototype.count?Student.prototype.count+1:1;
    }

    isEgligible(){
        if(this.marks>=40) return true;
        return false;
    }

    noOfStudent(){
        return Student.prototype.count;
    }
}

let s1 = new Student("kartik",21,1234,45);
let s2 = new Student("abc",12,134,42);
let s3 = new Student("vivek",20,12345,43);
let s4 = new Student("xyz",18,12434,39);
let s5 = new Student("pqr",25,10234,20);

// static variable was not working so I used prototype 