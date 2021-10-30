function myFun (Name, Age){
    // code

    return document.write('<h1>'+' Your name is '+ Name + ' and your age is ' +  Age+'</h1>')
}

let funCal = myFun('Simeon', 23)

// console.log(funCal);


// functio login 

function login (username, password){
    if(username=="simeon" && password =='123456') {
        return 'User name :'+ username + ' is correct' + ' and your password is ' + password
    } else {
        return 'Please enter your correct user name and password'
    }
    
}

let funResult = login('simeon', '12')

console.log(funResult);