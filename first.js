const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const searchInput = document.getElementById("searchInput").value;

    if (searchInput === "") {

        alert("Please enter a recipe name!");

    } else {

        alert(`Searching for: ${searchInput}`);

    }

});
