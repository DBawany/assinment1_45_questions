function make_car(manufacturer:string,model:string,...options:[string,any][]): Object {
    let car = {manufacturer,model};
    options.forEach(([key,value])  =>car[key] =value);
    return car;

}

console.log(make_car("Toyota","Civic",["color","red"],["year",2020]));
console.log(make_car("Passo","Suzuki",["color","blue"],["Sunroof",true]));
