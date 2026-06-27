

//1. verify the given number is divisible by 6?
let num=36
if (num%6==0)
{
    console.log("Divisible by 6")
}
else{
    console.log("not divisble by 6")
}


// 2. Verify the largest number among given two numbers?


let num1=38
let num2=41

if ( num1 > num2)
{
    console.log(num1+ " is greater than "+num2)
}
else
{
    console.log(num2+ " is greater than "+num1)
}

//3. Verify the largest number among given three numbers?


let l1=100;
let l2=50;
let l3=900;
if (l1 > l2)
{
    if ( l1 > l3)
    {
        console.log(l1+ " is largest among amomg three given numbers") 
    }
    else if ( l3 > l2)
    {
        console.log(l3+ " is largest among amomg three given numbers") 
    }
}
else
{
    if ( l2 > l3)
    {
        console.log(l2+ " is largest among amomg three given numbers") 
    }
    else if ( l3 > l1)
    {
        console.log(l3+ " is largest among amomg three given numbers") 
    }
}
//4. Verify the given number is positive or negative?

let gn=0

if (gn > 0)
{
    console.log(gn+" is postive number")
}
else
{
    console.log(gn+" is negative number")
}

//5. Based on the Weekday number display weekday name?

let wd=3
if ( wd == 1)
{
    console.log(" Monday")
}else if( wd == 2)
{
    console.log(" Tuesdsay")
}else if( wd == 3)
{
    console.log(" Wednesday")
}
    else if( wd == 4)
{
    console.log(" Thursday")
}
    else if( wd == 5)
{
    console.log(" Friday")
}
    else if( wd == 6)
    {

        console.log(" Saturday")
    }

    else if( wd == 7)
{
    console.log(" Sunday")
}

  //6. Display number of digits in a given number?
  
    let dig=123
    digitcount=0
    if (dig>0 && dig<10)
    {
digitcount=1
    }else if(dig>=10 && dig<99)
        {
          digitcount =2
         }else if(dig>=100 && dig<999)
        {
          digitcount =3
         }else if(dig>=1000 && dig<9999)
        {
          digitcount =4
         }
       console.log("number of digits "+digitcount)

       //7. Based on month number display Month Name?
      let mt=3
if ( mt == 1)
{
    console.log(" Jan")
}else if( mt == 2)
{
    console.log(" Feb")
}else if( mt == 3)
{
    console.log(" Mar")
}
    else if( mt == 4)
{
    console.log(" Apr")
}
    else if( mt == 5)
{
    console.log(" May")
}
    else if( mt == 6)
    {

        console.log(" jun")
    }

    else if( mt == 7)
{
    console.log(" Jul")
}
 else if( mt == 8)
{
    console.log(" Aug")
}
 else if( mt == 9)
{
    console.log(" sep")
}
 else if( mt == 10)
{
    console.log(" OCT")
}
 else if( mt == 11)
{
    console.log(" Nov")
}
 else if( mt == 12)
{
    console.log(" Dec")
}

//8. Verify the given character is Vowel or not?

  let vo='o'
if ( vo == 'a' || vo== 'e' || vo=='i'||vo=='o'||vo=='u')
{
    console.log(" Vowel")
}else
{
    console.log("not vowel")
}