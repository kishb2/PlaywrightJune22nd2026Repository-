//Assignments [Resolve using For, While & Do While]

//1. display Even numbers in between 40 to 60?

for (let e=40;e<=60;e++)
{
    if (e%2==0)
    {
        console.log(e+ " is even number")
    }
}

console.log("*********************************************************************************")
//2, Display odd numbers in between 91 to 71?
for (o=91;o>=71;o--)
{
    if (o%2!=0)
    {
        console.log(o+"is odd number")
    }
}
console.log("*********************************************************************************")

//3. Display factorial of a given number?
let fact=5, i,j=1;

for (i=1;i<=fact;i++)
{
    j=i*j
}
console.log("factorial of"+fact+" is "+j)

console.log("*********************************************************************************")

//4. Display numbers in between 1 to 100 which are divisible by 7?

for (let d=1;d<=100;d++)
{
    if (d % 7==0)
    {
        console.log(d+" is divided by 7")
    }
}
console.log("*********************************************************************************")

//5. Display count of numbers in between 1 to 100 which are divisible by 6?
let d6=0;
for (let c=1;c<=100;c++)
{
    if (c % 6==0)
    {
   d6++;    }
}
console.log("count "+d6)
console.log("*********************************************************************************")

//6. Display sum of First 10 numbers?

let sum =1;
for (f10=2;f10<=10;f10++)
{
    sum=sum+f10;
}
console.log("sum of first 10 numbers "+sum)
console.log("*********************************************************************************")


//7. Display sum of numbers in between 1 to 50, which are divisible by 4?

let sum1 =0;
let f4=1
do{
{
    if ( f4 % 4 == 0)
    sum1=sum1+f4;
}
    f4++
}while (f4<=50)

console.log("sum of first 10 numbers which are divisible by "+sum1)


console.log("*********************************************************************************")

//8. Verify the given number is Prime?

let pri=17;
let checkprime=0
let p=2
while (p<=pri/2)
{
    if (pri%p==0)
    {
        checkprime=1;
        break;
    }
   
p++
}
if (checkprime==1)
{
        console.log(pri+" is not a prime number")

}
else
{
            console.log(pri+" is  a prime number")

}

console.log("*********************************************************************************")

//9. Display the First 10 Fib numbers?  0 1 1 2 3 5 8 13 21 34 


let fib1=0
let fib2=1
let m=0
console.log("The first fibonoci numbers")
console.log(fib1)
console.log(fib2)

for (let h1=1;h1<=8;h1++)
{
m=fib2+fib1
console.log(m)
fib1=fib2
fib2=m
}
console.log("*********************************************************************************")

//10. Display 15th table
let givenNum=15
let mul=1
console.log("Display 15th table:")
while(mul<=10){
    console.log(givenNum+"*"+mul+"="+givenNum*mul)
mul++
}
console.log("*********************************************************************************")

//11. Find the sum of result of 11th table?
let givenSumNum=11
let gmul=1
let totalsum=0

do{
   totalsum +=givenSumNum*gmul
gmul++
}while(gmul<=10)
    console.log("sum of result of 11th table "+totalsum)