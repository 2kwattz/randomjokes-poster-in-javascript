const figlet = require('figlet');

let randomJokes = [

    `What’s the best thing about Switzerland?
    I don’t know, but the flag is a big plus.`,
    `I invented a new word!
    Plagiarism`,
    `Did you hear about the mathematician who’s afraid of negative numbers?
    He’ll stop at nothing to avoid them.`
]

figlet("Random Jokes", function(err,data){

    if(err){
        console.error(err);
    }

    else{

        console.log(data);
    }
})

while(true){

    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomJokes[randomNumber]);
    prompt("Press any key to continue. Press Ctrl + C to exit")

}