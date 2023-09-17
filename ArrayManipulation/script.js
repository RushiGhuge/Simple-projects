const data = [
  { name: "jane", age: 27, profession: "admin" },
  { name: "john", age: 24, profession: "developer" },
];

// 1. Print Developers
function printDeveloper() {
  console.log(data);
}

// 2. Add Data
function addData() {
  data[data.length] = {
    id: Number(prompt("Id")),
    name: prompt("name"),
    age: Number(prompt("age")),
    profession: prompt("profession"),
    salary: Number(prompt("salary")),
  };
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let adminList = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession == "admin") {
      adminList.push(i);
    }
  }
  console.log(adminList);
  for (let i = 0; i < adminList.length; i++) {
    data.splice(adminList[i], 1);
  }
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const dummy = {
    id: 101,
    name: "Pavan",
    age: 24,
    profession: "Developer",
    salary: 90000,
  };
  data.push(dummy);
  console.log(data);
}

// 5. Average Age
function averageAge() {
  let total = 0;
  data.forEach((ele) => {
    total += ele.age;
  });
  console.log(`Average Age is : ${total / data.length}`);
}

// 6. Age Check
function checkAgeAbove25() {
  let above25 = data.filter((ele) => {
    return ele.age > 25;
  });
  console.log(above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professions = data.map((ele, ind) => {
    return ele.profession;
  });
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  let i = 0;
  let john = data.find((ele, ind) => {
    i = ind;
    return ele.name === "john";
  });
  data[i].profession = prompt("Change profession");
  console.log(data[i]);
}

// 10. Profession Count
function getTotalProfessions() {
  let profession = [];
  data.forEach((ele) => {
    if (profession.includes(ele.profession)) {
    } else {
      profession.push(ele.profession);
    }
  });
  console.log(profession, profession.length);
}
