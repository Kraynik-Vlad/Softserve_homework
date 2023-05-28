const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const citiesByCountry = {
    ger: ["Berlin", "Munich", "Hamburg"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odessa"]
};

function updateCityList() {
    citySelect.innerHTML = "";
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

window.addEventListener("load", updateCityList);
countrySelect.addEventListener("change", updateCityList);

function updateSelected() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCity = citySelect.value
    const selectedElement = document.getElementById("selected");
    selectedElement.textContent = "Обрана країна: " + selectedCountry + ", місто: " + selectedCity;
}

citySelect.addEventListener("change", updateSelected);