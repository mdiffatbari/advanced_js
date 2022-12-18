/* const doubleIt = num => num * 2;

const result = doubleIt(5);
console.log(result); */

/* const add = (x, y) => x + y;
const result = add(10, 7);
console.log(result); */

/* const multipleWork = (x, y) => {
    const add = x + y;
    const div = x - y;
    const result = add * div;
    return result;
}

const finalResult = multipleWork(10, 2);
console.log(finalResult); */

/* const ages = [20, 22, 35];
const ages2 = [22, 45, 87];
const allAges = [...ages, 888, ...ages2];

console.log(allAges); */

/* ================[...]============= */

/* const a = 500;
const b = 600;
const c = 700;

const allNumber = [500, 600, 700];
const maxNumber = Math.max(...allNumber);
console.log(maxNumber); */

/* ==================class======================== */
/* class StudentProfile{
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Iffat School";
    }
}

const student1 = new studentProfile(20, "Iffat");
const student2 = new studentProfile(22, "karim");

console.log(student1, student2); */

/* ======================two class add============================= */

/* class FatherName{
    constructor() {
        this.fatherName = "rahim"
    }
}

class StudentName extends FatherName{
    constructor(name) {
        super();
        this.Name = name;
    }
}

const student = new StudentName("karim");
console.log(student); */

/* ==================get element from object=================== */

const details = { name: "iffat", phone: 0154515455, id: 20 };
const { phone, name } = details;

console.log(phone);
console.log(name);