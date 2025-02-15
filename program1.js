// Math.floor(1.2) = 1 parsenInt Remove the
// num = 123;
// rev = 0;

// while (num > 0){
//     lastDigit = num%10;
//     rev = rev * 10 + lastDigit;
//     num = parseInt(num/10)
// }
// console.log(rev)




// 2. write a program check whether a given number is plindrom or not 
// eg : 121 = 121

// num = 121
// rev = 0
// temp = num
// while(num>0){
//     lastDigit = num%10
//     rev = rev * 10 + lastDigit
//     num = parseInt(num/10)
// }
// if(temp===rev){
//     console.log("palindrom");

// }else{
//     console.log("its not palindrom")
// }




//.3 write to program print factorial of a given number 
// eg : 4! = 1*2*3*4*

// num = 4
// temp = 1
// while(num>0){
//     temp = temp * num
//     num = num-1
// }
// console.log(temp);


// num = 4
// i = 1
// fact = 1
// while(i<=num){
//     fact = fact*i 
//     i++
// }
// console.log(fact)



// write a program to check given three digit number is armstrog or not 
// eg = 153 = 1**3 + 5**3+3**3 = 153


// num = 153
// temp = num 
// lastDigit =0
// sum = 0

// while(num>0){
//     lastDigit = num%10  // 153&10 = 3
//     sum = sum + lastDigit**3  // 0+3**3 
//     num = Math.floor(num/10) // 153/10=15.3 = 15
// }
// if(temp == sum ){
//     console.log("number is armstong");

// }else{
//     console.log("Not armstong");

// }



//.4 write a program display number whose expontial is in the given range 8-36
// user can input the power to find the expontal for a particular number


// power = 2

// num = 1

// while(num<=36){
//     if(8<=num**power && num**power<=36){
//         console.log(num)
//     }
//     if(num**power>=36){
//         break // inorder to forcefully exit a loop break 
//     }
//     num++
// }


// for loop 

// syntac 

// for(variable initialization; condition; increment/decrement-exit){
// statement 
// }

//1. write a  program to print all number from 1-5 using for loop 

// for(i=1; i<=5; i++){
//     console.log(i)
// }

// 2. write a program numbers form 10-1 useing for loop 

// for(i=10; i=>0; i--){
//     console.log(i)
// }

// 3. write a program print factorial of ag given number using for loop 

// fact = 1
// num = 5
// for(i=1; i<num; i++){
//     fact = fact*i
// }
// console.log(fact);



// 4. write a program create a lop which have the potential to print 1-10 number but print only 1-5

// for(i=1; i<=10; i++){
//     if(i>5){
//         break

//     }
//     console.log(i)
// } 


// 5. write a program a given number is prine or not / prime number have ben only 2 number is fact apcet ita 1 or same number is apct


// num = 7
// count = 0

// if (num > 1) {
//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             count++
//             break
//         }
//     }
//     console.log(count>0? `not prime` : `prime`);
    
// }else if(num==1){
//     console.log("Niether prime nor conposite number is one ")
// }else {
//     console.log("not prime")
// }


// wite a program all prime nubmers between 1 - 50 


// for(i=2; i<50; i++){
//     flag = 0
//     for(j=2; j<i; j++){
//         if(i%j==0){
//             flag++
//         }

//     }
//     if(flag==0){
//         console.log(i);
//     }
// }

//.write a program to print all armstrong numbers between 8-50
//.write a program to display hcf of given two numbers 
//eg : 12 - 1 2 3 4 5 6 12
//     28 - 1 2 4 7 14 28 
// cf 1 2 3 
// hcf = 4 


// a = 12
// b = 28
// flag = 0

// for(i=2; i<=a && i<=b; i++){   // i<12
//     if(a%i==0 && b%i==0){ // 12%2 = 0 & 28%2 = 0 its contition true 
//        flag = i; // flag value = 1 its true only incriment the value
//     }
// }
// console.log(flag) // to print flag value 



