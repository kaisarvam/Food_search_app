const searchValue = document.getElementById("meal-search");
const mealsDiv = document.getElementById("meals-div");
const mainCard = document.getElementById("main-card");
const Cards = document.getElementsByClassName("card");

function search(term) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then((response) => response.json())
    .then((data) => mealDisplay(data));
}

function searchNow() {
  search(searchValue.value);
  searchValue.value = "";
}

function mealDisplay(data) {
  console.log(data.meals);
  mainCard.innerHTML="";
  if (data.meals == null) {
    console.log("No Data Found");

    mealsDiv.innerHTML = "<h3 class='text-center'> NO Data Found... <h3>";
  } else {
    mealsDiv.innerHTML = "";
    const mealsAll = data.meals;
    mealsAll.forEach((meal) => {
      console.log(meal);
      let mealOne = document.createElement("div");
      mealOne.classList.add("card", "m-4", "col-md-3", "p-0", "shadow");
      mealOne.setAttribute("style", "width: 18rem;");
      mealOne.innerHTML = `<img src="${
        meal.strMealThumb
      }" class="card-img-top" alt="...">
      <h5 class="card-title text-center mt-3 mb-2 text-color">${
        meal.strMeal
      }</h5>
    <div class="card-body">
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    </div>`;
      mealsDiv.appendChild(mealOne);
    });
  }
  cardSelection();
}

function cardSelection() {
  for (let i = 0; i < Cards.length; i++) {
    console.log(Cards[i]);
    Cards[i].addEventListener("click", function () {
      mainCard.innerHTML = Cards[i].innerHTML;
    });
  }
}
