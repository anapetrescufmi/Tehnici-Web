// Variabile cu scop global: var
//Variabile cu scop local: let & const

var index_var = 1;
let index_let = 2;

console.log(index_var);
for(var index_var = 0; index_var < 5; index_var++) {
    console.log("var");
}
console.log(index_var);

console.log(index_let);
for(let index_let = 0; index_let < 5; index_let++) {
    console.log("let");
}
console.log(index_let);
const variabila_constanta ="Ceva"

function f() {
    console.log(variabila_constanta)
    var string_var = "Buna";
    let string_let = "Buna, dar cu let";
    console.log(string_var);
    console.log(string_let);
}


f();


var om = {
    name: "Ana",
    age: 23,
    hobbies: ["netflix", "etc"],
    trasturi: {
        culoare_par: "negru"
    }
}

console.log(om.name, om["name"]);
for(keys in om) {
    console.log(keys, om[keys]);
}

var students = [
    {
        name: "Student 1",
        age: 19
    },
    {
        name: "Student 2",
        age: 20
    },
    {
        name: "Student 3",
        age: 19
    }
];

for(let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

students.forEach((student) => {
    console.log(student.name);
})

students.push({
    name: "Student 4",
    age: 21
})

console.log(students)

students.map((student) => student.age++)
console.log(students)

var new_students = students.filter((student) => student.age >= 21);
console.log(new_students);

a();

function a() {
    console.log("Asta merge pentru ca hoistin");
}
