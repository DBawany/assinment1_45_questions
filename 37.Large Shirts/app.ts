function make_shirt(size:string ="large",message:string = "I Love typeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();//Default lare and message
make_shirt("medium");//default message, medium size
make_shirt("small","dive  into coding");// custom message ,small size
