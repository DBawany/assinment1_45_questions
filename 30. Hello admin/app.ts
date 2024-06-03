let users : string [] = ["Junaid", "Ozair","Danish","Ali","admin"]
for (let user of users){
    if(user === "admin"){
        console.log("hello admin, would you like to see a status report?")

    }else{
        console.log(`Hello ${user}, 'thankyou for loging it again.'`)
    }

}




