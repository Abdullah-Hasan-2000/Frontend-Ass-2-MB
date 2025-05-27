// Q1: Write a program of a basic mark sheet using JavaScript involves let, const variables to
// store marks for different subjects and then calculating the total marks, percentage, and grade
// based on those marks. Using template literals and variable using let and const and final
// output is shown in document.write().

const subjects = ["Math", "Science", "English", "History", "Geography"];
let marks = {};
subjects.forEach(subject => {
    let mark = +prompt(`Enter marks for ${subject}:`);
    marks[subject] = mark;
});
const totalMarks = Object.values(marks).reduce((acc, mark) => acc + mark, 0);
const percentage = (totalMarks / (subjects.length * 100)) * 100;
const grade = percentage >= 90 ? 'A+' :
              percentage >= 80 ? 'A' :
              percentage >= 70 ? 'B' :
              percentage >= 60 ? 'C' :
              percentage >= 50 ? 'D' : 'F';
document.write(`
    <h1>Mark Sheet</h1>
    <p>Total Marks: ${totalMarks}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
    <p>Grade: ${grade}</p>
`);
