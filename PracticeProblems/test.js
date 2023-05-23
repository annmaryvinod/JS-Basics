let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

// Q1 : Add Student

function addStudent(name, id) {
  const newObj = {
    name: name,
    id: id,
    marks: [],
  };

  classObj.students.push(newObj);
}

// addStudent("Anns","105");
// console.log(classObj.students);

// Q2 : Enter mark for a student
function enterMarks(id, subject, marks) {
  const markObj = {
    subject: subject,
    marks: marks,
  };

  const student = classObj.students.find((student) => student.id === id);

  if (student) {
    student.marks.push(markObj);
  } else {
    console.log("No such student found");
  }
}

// enterMarks("103","Biology",45);
// console.log(classObj.students[2].marks);

// Q3 : Enter mark for a subject for multiple students

function enterMarksForMultiple(sub, mrk) {
  let student = classObj.students;

  student.forEach((st) => {
    const markObj = {
      subject: sub,
      marks: mrk[st.id],
    };

    st.marks.push(markObj);
  });
}

const mrk = {
  101: 23,
  102: 34,
  103: 45,
  104: 90,
};

// enterMarksForMultiple("Geography",mrk);
// for(i=0;i<classObj.students.length;i++){
//     console.log(classObj.students[i].marks)
// }

// Q4 : Edit mark for a particular subject of a student

function editMark(id, subject, newMark) {
  const student = classObj.students.find((student) => student.id === id);

  if (student) {
    const markIndex = student.marks.find((mark) => mark.subject === subject);

    markIndex.mark = newMark;

    console.log("Marks have been edited successfully.");
  } else {
    console.log("No such student found in the list");
  }
}

// editMark("102","Physics",29);

// console.log(classObj.students[1].marks);

// Q5 : Change the class teacher of a class

function changeClassTeacher(tname) {
  classObj.teacherName = tname;

  console.log(`Class teacher name changed to ${tname}`);
}

// changeClassTeacher("Nirmal");
// console.log(classObj.teacherName);






// Q6 : Remove a student from a class

function removeStudent(id) {
  const removed = classObj.students.findIndex((student) => student.id === id);
  console.log(removed);

  if (removed !== -1) {
    const r = classObj.students.splice(removed, 1);
    console.log("Removed a student from the class.");
  } else {
    console.log("No such student is found.");
  }
}

// removeStudent("102");
// removeStudent("104");
// console.log(classObj.students);








// Q7 : Delete a subject entry from every students

function deleteSubjectEntry(subject) {
  classObj.students.forEach((student) => {
    const subIndex = student.marks.findIndex(
      (mark) => mark.subject === subject
    );

    if (subIndex !== -1) {
      const r = student.marks.splice(subIndex, 1);
    }
    else{
        console.log('Error');
    }
  });
}


// deleteSubjectEntry("English");

// for(i=0;i<classObj.students.length;i++){
//     console.log(classObj.students[i].marks);
// }





// Q8 : Find the topper of a class given a subject


function subjectTopper(subject){

    let top = 0;
    let topper ="";


    classObj.students.forEach(student =>{
        let subIndex = student.marks.findIndex(mrk => mrk.subject === subject);
        let t = student.marks[subIndex].mark

        if( t > top){
            top = t;
            topper = student.name;
        }

    })


    console.log(`The topper in ${subject} is ${topper} and marks scored is ${top}`);

}


// subjectTopper("Physics");







// Q9 : Find the average mark for a given subject

function avgMark(subject){

    let sum =0;
    const n = classObj.students.length;

    classObj.students.forEach(student=>{
        let subIndex = student.marks.findIndex(m => m.subject === subject);

        sum += student.marks[subIndex].mark;
    })


    const avg = sum/n;


    console.log(`The class average for ${subject} is ${avg}`)


}


// avgMark("Physics");
// avgMark("Maths");










// Q10 : Sort and display the list of students in any order - ordered by name, mark etc

function sortAndDisplayStudents(orderBy) {
    let sortedStudents;
  
    switch (orderBy) {
      case 'name':
        sortedStudents = classObj.students.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'mark':
        sortedStudents = classObj.students.slice().sort((a, b) => TotalMark(b) - TotalMark(a));
        break;
      default:
        console.log(`Invalid sort order. Please provide a valid property to sort by.`);
        return;
    }
  
    console.log(`List of students ordered by ${orderBy}:`);
    sortedStudents.forEach(student => {
      console.log(`Name: ${student.name}, ID: ${student.id}`);
    });
  }
  
  function TotalMark(student) {
    return student.marks.reduce((sum, mark) => sum + mark.mark, 0);
  }




//   sortAndDisplayStudents('name');










