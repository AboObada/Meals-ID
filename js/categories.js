// Categories Data API
async function getCategoryData() {
    let apiResponse = await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`);
   
    let gategoryData = await apiResponse.json();
    console.log(gategoryData);
    displayCategories(gategoryData);
}
getCategoryData();
function displayCategories(gategoryData) {
    let mealBox = ``;
    for (let i = 0; i < gategoryData['categories'].length; i++) {
        mealBox +=`                <div class="col-md-3 col-sm-12">
        <div class="item">          
            <img style="border-radius:10px" src="${gategoryData['categories'][i].strCategoryThumb}" class="w-100" alt="">
            <div class="layer p-2">
                <h3>${gategoryData['categories'][i].strCategory}</h3>
                <p>${gategoryData['categories'][i].strCategoryDescription.split(" ").slice(0,20).join(" ") }</p>
            </div> 
        </div> </div>`
        $('.home-content .row').html(mealBox);
    }
}