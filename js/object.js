let person=new Object();
person.name="james";
person.email="james@gmail.com";
console.log(person);
console.log(person.email);

// obj literal
let student={
    name: "james",
    email: "james@gmail.com",
    hobbies: ["cooking", "coding", "gaming"],
    address:{
        no: 4,
        street: "Pathein street",
        city: "Yagon",
    }
}
console.log(student);
console.log(student.name);
console.log(student.hobbies[1]);
console.log(student.address.city);