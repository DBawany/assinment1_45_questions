let current_users: string[] =["Junaid", "Ozair", "Jamal","Admin","Ali"];
let new_users: string[] =["Fawad", "Asad", "Kashif","Admin","Imran"];

new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUsers)=> currentUsers.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);

    }else{
        console.log(`${newUser} is available`);
    }
}
)