// the list of oll recipes in the form of arrays of objects...
let recipesList = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];
console.log(recipesList);

const barIcon = document.getElementById("menu-bar");
const main = document.getElementById("main");
const allRecipes = document.getElementById("allRecipes");
const vegRecipes = document.getElementById("vegRecipes");
const nonVegRecipes = document.getElementById("nonVegRecipes");
const dishContainer = document.getElementsByClassName("dish-container")[0]; // get the first index
const ratingAbove4 = document.getElementById("rating1"); // rataigs above 4
const ratingBelow4 = document.getElementById("rating2"); // ratings belov 4;
const searchBar = document.getElementById("searchBar");

// this is a code of mobile nav bar open the nav -->
barIcon.addEventListener("click", () => {
  document.getElementById("mobile-nav").style.transform = " translate(0%)";
  main.style.opacity = "0.5";
});
// close the nac -->
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("mobile-nav").style.transform = " translate(-100%)";
  main.style.opacity = "1";
});

// add the event listner to the sort buttons :
allRecipes.addEventListener("click", () => {
  renderData(recipesList);
});

vegRecipes.addEventListener("click", () => {
  let vegList = recipesList.filter((ele) => {
    return ele.type == "veg";
  });
  renderData(vegList);
});
nonVegRecipes.addEventListener("click", () => {
  let nonVegList = recipesList.filter((ele) => {
    return ele.type == "non-veg";
  });
  renderData(nonVegList);
});

// make a function that renders the all data in to the DOM...
function renderData(list) {
  dishContainer.innerHTML = "";
  console.log("hhh");
  list.forEach((ele) => {
    let dishBox = document.createElement("div");
    dishBox.classList.add("dish-box");
    if (ele.isLiked) {
      likeColor = "red";
    }else {
      likeColor = 'black'
    }
    dishBox.innerHTML = `<div class="imgBox"> <img src="${ele.imageSrc}" alt=""></div>
          <p class="vegOrNonVeg">${ele.type}</p>
          <div class="row">
              <h1>${ele.name}</h1>
              <p><i class="fa-solid fa-star"></i> ${ele.rating}</p>
          </div>
          <div class="row">
              <h1 class="minits-red">${ele.time}</h1>
              <p> <i style='color:${likeColor}' class="fa-regular fa-heart like"></i>
                  <i class="fa-solid fa-message"></i>
              </p>
          </div>`;
    // console.log(dishBox.children[3].children[1].children[0]);
    dishBox.children[3].children[1].children[0].addEventListener(
      "click",
      (e) => {
        if (e.target.style.color == "red") {
          ele.isLiked = false;
          e.target.style.color = "black";
        } else {
          ele.isLiked = true;
          e.target.style.color = "red";
        }
      }
    );
    dishContainer.appendChild(dishBox);
  });
}
renderData(recipesList);

// ****************************************************************************************
// ********************************Filters**************************************************
// ****************************************************************************************

// Fillter the Recipes
// make a two function that filter the recipes by the ratigs
function ratingsAbove() {
  // above 4
  let newList = recipesList.filter((ele) => {
    return ele.rating >= 4;
  });
  renderData(newList);
}

function ratingsBelow() {
  // below 4
  let newList = recipesList.filter((ele) => {
    return ele.rating <= 4;
  });
  renderData(newList);
}

// ratingsAbove()
let ratingsAboveList = recipesList.filter((ele) => {
  return ele.rating >= 4;
});

// ratingsBelow()
let ratingsBelowList = recipesList.filter((ele) => {
  return ele.rating <= 4;
});

ratingAbove4.addEventListener("change", () => {
  // corner case
  if (ratingAbove4.checked && ratingBelow4.checked) {
    renderData(recipesList);
    return;
  }
  if (ratingAbove4.checked) {
    renderData(ratingsAboveList);
  } else {
    if (ratingBelow4.checked) {
      renderData(ratingsBelowList);
    } else {
      renderData(recipesList);
    }
  }
});

ratingBelow4.addEventListener("change", () => {
  // corner case
  if (ratingAbove4.checked && ratingBelow4.checked) {
    renderData(recipesList);
    return;
  }

  if (ratingBelow4.checked) {
    renderData(ratingsBelowList);
  } else {
    if (ratingAbove4.checked) {
      renderData(ratingsAboveList);
    } else {
      renderData(recipesList);
    }
  }
});

// Search Functions start

searchBar.addEventListener("keyup", (e) => {
  let searchList = recipesList.filter((ele) => {
    return ele.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  renderData(searchList);
});

// let like = document.getElementsByClassName('like');
// Array.from(like).forEach((ele , idx)=> {
//   ele.addEventListener('click' ,() =>{
//     if(ele.style.color == 'red'){
//       ele.style.color = 'black'
//     }
//     else {
//       ele.style.color = 'red'
//       console.log(ele.parentElement.parentElement.parentElement);

//     }
//   })
// })
