function describe_city(nameofCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameofCity, "  is in ").concat(country);
}
;
// 3 cities
var city1 = describe_city("Karachi");
var city2 = describe_city("Lahore");
var city3 = describe_city("Banglore", "India");
var city4 = describe_city("Kabul", "Afganistan");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
