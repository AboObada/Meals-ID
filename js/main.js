// Loading Screen


// Open And Close Navbar
function open_close_side(){
    let iconNav = $('#open-close-icon');
    if(iconNav[0].classList.contains("fa-align-justify")){
        $('#mySidenav').animate({left: '0'}, 500);
        iconNav.addClass("fa-x");
        iconNav.removeClass("fa-align-justify");
    }else{
        $('#mySidenav').animate({left: '-227px'}, 500);
        iconNav.removeClass("fa-x");
        iconNav.addClass("fa-align-justify");
    }
}

new WOW().init();

// Validation
document.getElementById("nameInput").addEventListener("focus", () => {
    nameInputTouched = true
})

document.getElementById("emailInput").addEventListener("focus", () => {
    emailInputTouched = true
})

document.getElementById("phoneInput").addEventListener("focus", () => {
    phoneInputTouched = true
})

document.getElementById("ageInput").addEventListener("focus", () => {
    ageInputTouched = true
})

document.getElementById("passwordInput").addEventListener("focus", () => {
    passwordInputTouched = true
})

document.getElementById("repasswordInput").addEventListener("focus", () => {
    repasswordInputTouched = true
})


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
if (nameInputTouched) {
    if (nameValidation()) {
        document.getElementById("nameAlert").classList.replace("d-block", "d-none")

    } else {
        document.getElementById("nameAlert").classList.replace("d-none", "d-block")

    }
}
if (emailInputTouched) {

    if (emailValidation()) {
        document.getElementById("emailAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("emailAlert").classList.replace("d-none", "d-block")

    }
}

if (phoneInputTouched) {
    if (phoneValidation()) {
        document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

    }
}

if (ageInputTouched) {
    if (ageValidation()) {
        document.getElementById("ageAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("ageAlert").classList.replace("d-none", "d-block")

    }
}

if (passwordInputTouched) {
    if (passwordValidation()) {
        document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

    }
}
if (repasswordInputTouched) {
    if (repasswordValidation()) {
        document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
    } else {
        document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

    }
}


if (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()) {
    submitBtn.removeAttribute("disabled")
} else {
    submitBtn.setAttribute("disabled", true)
}
}

function nameValidation() {
return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}

// Home Data API
// getHomeData();
// async function getHomeData() {
//     let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
   
//     let homeData = await apiResponse.json();
//     // console.log(homeData['meals'][0]);
//     displayMeals(homeData);
// }

// function displayMeals(homeData) {
//     let mealBox = ``;
//     for (let i = 0; i < homeData['meals'].length; i++) {
//         mealBox +=`                <div class="col-md-3 col-sm-12">
//         <div class="item">
//             <img style="border-radius:10px" src="${homeData['meals'][i].strMealThumb}" class="w-100" alt="">
//             <div class="layer p-2 d-flex">
//             <h2 class="text-left align-self-center">${homeData['meals'][i].strMeal}</h2>
//         </div> 
//         </div> </div>`
//         $('.home-content .row').html(mealBox);
//     }
// }

// Categories Data API
// async function getCategoryData() {
//     let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`);
   
//     let gategoryData = await apiResponse.json();
//     // console.log(gategoryData);
//     displayCategories(gategoryData);
// }
// getCategoryData();
// function displayCategories(gategoryData) {
//     let mealBox = ``;
//     for (let i = 0; i < gategoryData['categories'].length; i++) {
//         mealBox +=`                <div class="col-md-3 col-sm-12">
//         <div class="item">          
//             <img style="border-radius:10px" src="${gategoryData['categories'][i].strCategoryThumb}" class="w-100" alt="">
//             <div class="layer p-2">
//                 <h3>${gategoryData['categories'][i].strCategory}</h3>
//                 <p>${gategoryData['categories'][i].strCategoryDescription.split(" ").slice(0,20).join(" ") }</p>
//             </div> 
//         </div> </div>`
//         $('.home-content .row').html(mealBox);
//     }
// }

// Area Data API
// async function getAreaData() {
//     let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
   
//     let areaData = await apiResponse.json();
//     console.log(areaData['meals']);
//     displayArea(areaData);
// }
// getAreaData();
// function displayArea(areaData) {
//     let mealBox = ``;
//     for (let i = 0; i < areaData['meals'].length-2; i++) {
//         mealBox +=`                <div class="col-md-3 col-sm-12">
//         <div class="area-div text-center text-white" style="cursor:pointer;">
//         <i class="fa-solid fa-house-laptop fa-4x"></i>
//         <h3>${areaData['meals'][i].strArea }</h3>
//     </div> </div>`
//         $('.home-content .row').html(mealBox);
//     }
// }

// Ingredient Data API
// async function getIngredientData() {
//     let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
   
//     let ingredientData = await apiResponse.json();
//     // console.log(ingredientData['meals']);
//     // displayIngredient(ingredientData);
// }
// getIngredientData();
// function displayIngredient(ingredientData) {
//     let mealBox = ``;
//     for (let i = 0; i < ingredientData['meals'].length-549; i++) {
//         mealBox +=`                <div class="col-md-3 col-sm-12">
//         <div class="ingredient-div text-center text-white" style="cursor:pointer;">
//         <i class="fa-solid fa-house-laptop fa-4x"></i>
//         <h3>${ingredientData['meals'][i].strIngredient}</h3>
//         <p>${ingredientData['meals'][i].strDescription}</p>
//         </div> </div>`
//         $('.home-content .row').html(mealBox);
//     }
// }

// Search by name


// async function searchByName() {
//     let term = document.getElementById('searchName').value;
//     console.log(term);
//     let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
//     let searchData = await apiResponse.json();
    
//     console.log(searchData.meals);
//     displaySearch(searchData)
    
// };
// searchByName();
// function displaySearch(searchData) {
//     let mealBox = ``;
//     for (let i = 0; i < searchData.meals.length; i++) {
//         mealBox +=`                <div class="col-md-3 col-sm-12">
//         <div class="item">
//             <img style="border-radius:10px" src="${searchData.meals[i].strMealThumb}" class="w-100" alt="">
//             <div class="layer p-2 d-flex">
//             <h2 class="text-left align-self-center">${searchData.meals[i].strMeal}</h2>
//         </div> 
//         </div> </div>`
//         $('.home-content .row').html(mealBox);
//     }
// }
