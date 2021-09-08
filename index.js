const validatePassword = require('./passwordvalidation.js'); //import the function

// Your code goes here!
function getPassword()
{
    //Get the readline module (got code from online documentation)
    var readline = require('readline');
    
    var rl = readline.createInterface(process.stdin, process.stdout);

    rl.question('Enter your password:', (password) => 
    {   
        //Base case: quit the program
        if (password == "quit" || password == "Quit")
        {
            alert("Thank you! Goodbye :)");
            process.exit(1);
        }
        //check validity of user password
        else
        {
            //Notify user that password is correct
            if(validatePassword)
            {
                alert("Your password is valid.")
            }

            //Notify user that the password is incorrect
            else
            {
                alert("Your password is invalid. Try again.")
            }

        }

        //Close readline
        rl.close();

    });
    //Recursion: call the function repeatedly
    getPassword();

    
}