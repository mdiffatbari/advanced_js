const students = [
    {id: 12, name: 'Jamal'},
    {id: 15, name: 'Kamal'},
    {id: 17, name: 'Karim'},
    {id: 19, name: 'Mafij'},
]

const findName = students.map(x => x.name);
//const findId = students.filter(x => x.id>15);
const findId = students.find(x => x.id>15);
console.log(findId);