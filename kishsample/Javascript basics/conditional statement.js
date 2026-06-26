//if statement
//if(condition){}


let x=27

if ( x%9==0){

    console.log("divide by 9");
    
}
else{
    console.log("not divide by 9")
}

//ternary operator

let age =14;
let result=(age>20)?"voting":"not voting"
console.log(result)

//nested if else
    if(age >=24){
        console.log("age>24");
    }else if (age <24 && age >=12)
    {
        console.log("age<24*>24" )
    } else
    {
        console.log("<12")
    }

    //switch statement

    let ch='O'

    switch (ch){
        case 'AI':
            console.log("A is vowel")
            break;
        case 'E':
            console.log("E is vowel")
            break;
        case 'I':
            console.log("I is vowel")
            break;
        case 'O':
            console.log("O is vowel")
            break;
         case 'U':
            console.log("A is vowel")
            break;
         default:
            console.log("Not vowel")   


    }

    let char='A'

switch(char){
    case 'A':case 'E':case 'I':case 'O':case 'U':
        console.log(char+" is a Vowel");
        break;
    default:
        console.log("Character is not a Vowel");
}