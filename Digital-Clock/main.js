let time = document.querySelector(".time");
let d = document.querySelector(".date");

setInterval(() => {
  let weekDay = "";
  let date = new Date();

  if (date.getDay() == 1) {
    weekDay = "Mon";
  } else if (date.getDay() == 2) {
    weekDay = "Tue";
  } else if (date.getDay() == 3) {
    weekDay = "Wed";
  } else if (date.getDay() == 4) {
    weekDay = "Thu";
  } else if (date.getDay() == 5) {
    weekDay = "Fri";
  } else if (date.getDay() == 6) {
    weekDay = "Sat";
  } else if (date.getDay() == 7) {
    weekDay = "Son";
  }

  let month = "";
  switch (date.getMonth()) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
    default:
      break;
  }

  time.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `;
  d.innerHTML = `${date.getDate()}, ${weekDay}  ${month}  ${date.getFullYear()}`;
}, 1000);
