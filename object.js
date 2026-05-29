const student = {
  name: "Goverdhan",
  class: 12,
  Roll_no: 21,
  marks: { eng: 10, maths: 98, sci: 75 },
  points: [10, 30, 50, 100, 70, { a: 70 }],
  age: 80,
};
console.log(student.points[4]);
console.log(student.marks.maths);
console.log(student.points[5].a);
console.log(student.age);
console.log(student.marks.sci);
console.log(student.marks.eng);
console.log(student.name);
console.log(student.class);
