const validatePassword = require('./passwordvalidation'); //import the function

//Get the readline module (got code from online documentation)
const readline = require('readline');
    
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
    });

//Call function
getPassword();



function getPassword()
{
    rl.question('Enter your password:', (password) => 
    {   
        //Base case: quit the program
        if (password === "quit" || password === "Quit")
        {
            console.log("Thank you! Goodbye :)");
            process.exit(0);
        }
        //check validity of user password
        else
        {
            //Notify user that password is correct
            if(validatePassword(password) === true)
            {
                console.log("Your password is valid.")
            }

            //Notify user that the password is incorrect
            else
            {
                console.log("Your password is invalid. Try again.")
            }

        }

        //Close readline
        //rl.close();
        //Recursion: call the function repeatedly
        getPassword();

    });

    
}

