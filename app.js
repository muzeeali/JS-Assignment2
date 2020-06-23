// CHAPTER # 21-25


// TASK #1


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.slice(0)+lastname.slice(0);
document.write("Hey! "+fullname+" Welcome to our web...");


// TASK #2

var mobilemodel=prompt("Enter your Mobile model :");
var length=mobilemodel.length;
document.write("<br>My favorite phone is : "+mobilemodel);
document.write("<br>Length of string: "+length);



// TASK #3

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Index of 'n': "+ str.indexOf("n"))


// TASK #4

var str="Hello World";
document.write("<br>String: "+str);
document.write("<br>Index of  'l': "+ str.lastIndexOf("l"))


// TASK #5

var str="Pakistani";
document.write("<br>String: "+str);
document.write("<br>Charcter at index 3: "+ str.slice(3,4))

// TASK #6


var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");
var fullname= firstname.concat(lastname);
document.write("<br>Hey! "+fullname+" Welcome to our web...");


// TASK #7


var first='Hyderabad';
var second='Islam';
var replace=first.split('Hyder').join(second);
document.write("<br>City :"+first);
document.write("<br>After replacement: "+replace);


// TASK #8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep='and';
var repn='&'
var newm=message.split(rep).join(repn);
document.write("<br>Old Message: "+message)
document.write("<br>New Message: "+newm)

// TASK #9

var str='472';
var num=Number(str);
document.write("<br>Value: "+str)
document.write("<br>Type: "+typeof(str))
document.write("<br>Value: "+num)
document.write("<br>Type: "+typeof(num))

// TASK #10

var user=prompt("Enter value: ");
document.write("<br>User Value: "+user);
document.write("<br>Upper case: "+ user.toUpperCase())


// TASK #11

var useri=prompt("Enter value: ");
document.write("<br>User Value: "+useri);
var flet=useri.slice(0,1);
document.write("<br>Title case: "+ useri.split(flet).join(flet.toUpperCase()));


// TASK #12

var num = 35.36 ;
var str=num.toString();
var str1=str.replace('.','')
document.write("<br>Number: "+num);
document.write("<br>Result: "+ str1)


// TASK #13

var useri=prompt("Enter value: ");
if(useri.match('@')||useri.match(',')||useri.match('.')||useri.match('!'))
alert("Please enter a valid user name");

// TASK #14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var useri=prompt("Hey! Welcome to Zee bakery... What do you want to order: ");
var usero=useri.toLowerCase();
if(usero=="cake")
{
    document.write("<br>"+ useri+" is Available at index 0 in our Bakery")
}
else if(usero=="apple pie")
{
    document.write("<br>"+ useri+" is Available at index 1 in our Bakery")
}
else if(usero=="cookie")
{
    document.write("<br>"+ useri+" is Available at index 2 in our Bakery")
}else if(usero=="chips")
{
    document.write("<br>"+ useri+" is Available at index 3 in our Bakery")
}else if(usero=="patties")
{
    document.write("<br>"+ useri+" is Available at index 4 in our Bakery")
}
else 
{
    document.write("<br> We are Sorry!!! "+ useri+" is notavailable in our Bakery")
}


// TASK #15


var userp=prompt("Enter your password: ");
var userf=userp.slice(0,1);
var cond=/^[0-9a-zA-Z]+$/;
var cond2=/^[0-9]+$/;
document.write("<br>Entered Password: "+userp);
if(userp.match(cond)){
if(userf.match(cond2)){
    document.write("<br> Password cannot begin with number")
    document.write("<br> Please enter a valid password")
 }

else if(userp.length<6)
{
    document.write("<br> Password cannot be less than 6 characters")
    document.write("<br> Please enter a valid password")
}
else{
    document.write("<br>Your password is updated Successfully!!!")
}
}
else{
    document.write("<br> Special characters are not allowed")
    document.write("<br> Please enter a valid password")
}


// TASK #16


var university = "University of Karachi";
var newuni = university.split("");
for(var i=0;i<newuni.length;i++)
{
    document.write("<br>"+newuni[i])
}


// TASK #17

var useri=prompt("Enter value: ");
var stlast=useri.charAt(useri.length-1)
document.write("<br>User input: "+useri)
document.write("<br>Last charcter of input: "+stlast)


// TASK #18

var para="the quick brown fox jumps over the lazy dog"
document.write("<br>Text: "+para)
var split=para.split(" ")
var count =0;
for(var i=0;i<split.length;i++){
    if(split[i]=='the')
    count++;
}
document.write("<br>There are "+count+" occurance of word 'the'")


// CHAPTER # 26-30  


// TASK #1


var number=+prompt("Enter a positive number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #2


var number=+prompt("Enter a negative number");
document.write("<br>Number: "+number);
document.write("<br>Round of value: "+Math.round(number));
document.write("<br>Round of value: "+Math.floor(number));
document.write("<br>Round of value: "+Math.ceil(number));

// TASK #3


var number=+prompt("Enter a number");
var absl= Math.abs(number);
document.write("<br>The absolute value of "+number+" is: "+absl);

// TASK #4


var num= Math.random()*6;
var dice=Math.ceil(num)
document.write("<br>Random dice value:  "+dice);

// TASK #5



var num= Math.random()*2;
var dice=Math.ceil(num)
if(dice===1)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Tails ");
}
else if(dice===2)
{
    document.write("<br>"+dice);
    document.write("<br>Random coin value: Heads ");
}


// TASK #6


var num= Math.random()*100;
var dice=Math.ceil(num)
document.write("<br>Random number between 1 and 100:  "+dice);


// TASK #7


var number=prompt("Enter your weight: ");
var absl= parseFloat(number);
document.write("<br>Your weight is  "+number);


// TASK #8


var number=+prompt("Enter a number between 1 and 10: ");
var num= Math.random()*10;
var roun=Math.ceil(num)
if(number===roun){
    alert("Congratulations!!!")
}
else{
    alert("Try Again!!!")
}