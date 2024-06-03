function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:".concat(items.join(',  '), "."));
}
make_sandwich("Cheeze", "tomato");
make_sandwich("mustard", "letture", "egg");
make_sandwich("vegetables", "ham", "union");
