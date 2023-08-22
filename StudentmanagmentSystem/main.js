const students = [
    {
        ID: 1,
        name: 'Alice',
        age: 21,
        grade: 'A',
        degree: 'Btech',
        email: 'alice@example.com'
    },
    {
        ID: 2,
        name: 'Bob',
        age: 22,
        grade: 'B',
        degree: 'MBA',
        email: 'bob@example.com'
    },
    {
        ID: 3,
        name: 'Charlie',
        age: 20,
        grade: 'C',
        degree: 'Arts',
        email: 'charlie@example.com'
    }
];


// (1)=> Render Student Function :
const tBody = document.getElementById('table-body')
let renderStudent = () => {
    tBody.innerHTML = ''; // make to clear first
    students.forEach((student) => {
        let trow = document.createElement('tr');
        const cols = ['ID', 'name', 'email', 'grade', 'age', 'degree'];
        cols.forEach(col => {
            let td = document.createElement('td');
            td.textContent = student[col];
            trow.appendChild(td)
        })
        let td = document.createElement('td');

        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete'
        delBtn.onclick=(() => deleteStudednt(student.ID))

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit'
        editBtn.onclick=(() => editStudent(student.ID))

        td.append(delBtn, editBtn)
        trow.appendChild(td)
        tBody.appendChild(trow)
    })
}
renderStudent();

// (2)=> add Student Function :
let addStudent = ()=>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let grade = document.getElementById('grade').value;
    let age = document.getElementById('age').value;
    let degree = document.getElementById('degree').value;
    let StudentId = document.getElementById('student-id');
    console.log(StudentId);
    let newStudent={
        ID:students.length+1,
        name:name,
        email:email,
        grade:grade,
        age:age,
        degree:degree,
    }
    students.push(newStudent)
    renderStudent();
    return false
}   


// (3)=> update student Function:

function editStudent(studentId){
    let student = students.find((s)=>s.ID == studentId)
    console.log(student);
    document.getElementById('name').value = student.name
    document.getElementById('age').value = student.age
    document.getElementById('grade').value = student.grade
    document.getElementById('email').value = student.email
    document.getElementById('degree').value = student.degree
    document.getElementById('student-id').value = student.ID
    document.getElementById('sub-btn').innerText = 'Update Student'
}


// (4)=> Delete Student Function:
// (5)=> Search Student Function 