// Functions 

// To do a  certain task repeated at different location of the programing file 

// funciton have two parts
// 1. Function definition 
// 2. Function call 

//syntax
// function function_name(){ 
// statement
// } 

// function call 
// function_name() 

// write a funtion which display "javascrip on every"

// function display(){
//     console.log("javaScipt");

// }

// display()

// write to find the sum of two numbers uding funcion

// function add(num1, num2){
//     sum= num1+num2 
//     console.log(sum);

// }

// add(3,8)
// add(9,8)
// add(3,4)


//wirte funtion use odd or even 


// function oddoreven(){
//     n=5
//     if(n%2==0){
//         console.log(`number is Even`)
//     }
//     else{
//         console.log(`number is odd`)
//     }
// }

// oddoreven()

//writ a program given number is positive or negative using funcion 

// function postorneg(){
//     n = 0
//     if(n=>5){
//         console.log(`number is postive`)
//     }
//     else{
//         console.log(`number is negative`)
//     }
// }
// postorneg()

//write a porgram find the cube of a given number using funcion 

// function cube(){
//     n=4   
//     n= n**2 
//     console.log(n)
// }

// cube()


// miss answer 
//1
// function oe(num){
//     return num%2==0? `even`:`odd`
// }
// console.log(oe(5));

//2
// function pn(num){
//    return num>0?`postive`:num==0?`number is zero`:`negative`
// }
//     console.log(pn(4));

//     //2
//     function cube(num){
//         return num**2
//     }
//     console.log(cube(3))




// not : -- ******************************************************************************************************* 
// To do a  certain task repeated at different location of the programing file 

// funciton have two parts
// 1. Function definition 
// 2. Function call 

//syntax
// function function_name(){ 
// statement
// } 

// function call 
// function_name() 

//1. Variable inside a functionishaveing functional scope - can access only onside the function.
//2. Return - Inoder to access variable outside the function 
//3. Statements after the return statement wil not execute 


// ------ Arrow function ------- 
// 1. Es6 - Version onwords - arrow function is prefered

// stntax 
// const varariablename = ()=> {statement}
// varariablename()

// if there is only single line in function there is no need for{} and tturn is automativally done furtheremore there is 
// no need for return keyword explicitly 

// ----- Callback Function -------- 
// * Function calling another function 
// * callbacke functions are passed as arguments to another function and is executed after the function
//   completes its execution 


//  ------------- predefined functions -----------------
//* eg: paresInt, math.floor, console.log, Number , String, typeOf()


// ----------- nested function ------------------
//* function defined inside another function 

//------------- Functional Hoisting ------------
//* regualr funtion is hoising posibel 
//* arrow function cant posibel hoisting

//-------- colsure property ---------------
//* variable inside the parent funcion can be accessed inde the child function but the varibable inside the child function cannot be
// accessed inside the parent function 

//------- synchronous and Asynchronous ---------

//* synchronous funtion - functions without any time delay 
//* Asynchronous function - functions with time delay - eg: Api , setTimeOut()

// --------- DataStructure ---------------------
//* A specialised formate for organizing, processing retrieving and storing data 
//* eg : Array, Stack , queue , list , Linkedlist 

// ----- array ----- 
//* Unlike varibles arrray can hold more than one data of different dataType that are separated by commas
// and enclosed within a  Square bracket 
//    --- syntax ---
// varaiablename = data 
// arrayname = [data1, data2, data3 ]

// key:value pairs data is stored 
// key = index value - o - length-1 of that array 
// value = data 


//array operations --------------
// 1. get usnig index location
// 2. add - push() - is used to add items as the last element of an array   
// 3. unshift() - add items to an array as first element


// condition && true statement 


//   ***********************************************************************************************************


//    write a program find a sum of two numbers 
// const sumnumber= (a,b)=>b+a

// console.log(sumnumber(10,20))

//    write a program find a given number cube 
// const cube=(a)=> a**2

// console.log(cube(5));


//    write a program odd or even 
// const od=(n)=> n%2==0?`even`:`odd`

// console.log(od(6))



// callback functions ---------------------------------

// function greet(name,callback){
//     console.log(`Hai ${name}`)
//     callback()
// }

// function A(){
//     console.log(`iam a callback function`)
// }

// greet(`steev`,A)

//  nested function----------------------- 

// function A(){
//     console.log("Inside function A")
//     B()

//     function B(){
//         console.log("Inside function B")
//     }
// }

// A();


// time delay function  ----------------------------------------

// setTimeout(()=>{
//     console.log("inside timeout delay ");

// },5000)




// ----------------arary-------------- 

// arr = [ 1, 2, 3, 4, 5, 6, 7]
// console.log(arr);


//array operations --------------
// 1. get usnig index location
// 2. add - push() - is used to add items as the last element of an array   
// 3. unshift() - add items to an array as first element
// 4. pop() - Delete the last item for an array 
// 5. shift() - Delete the first item of an array 

// different way to access items form an array 
    // --------------------------------------------

        //1) for loop 
        //2) in - return the indexes of an array 
        //3) of -  return the array items



// week = [`mon`, `tues`, `wed`]


// console.log(week);
// console.log(week[2]);
// week.push(`sun`)
// console.log(week);
// week.unshift(`Fri`)
// console.log(week);
// week.pop()
// console.log(week);
// week.shift(week)
// console.log(week)


fruits = [`apple`,`orag`,`kiwi`,`pineapple`]

// for(i=0; i<=fruits.length-1; i++){
//     console.log(fruits[i])
// }

 

    // for(let x in  fruits){
    //     console.log(x)
    // }

    // for(let x of fruits){
    //     console.log(x)
    // }


    // write a program find the highest expense 
    // wrte a program find the lowest expence 
    // write a program find the total expence

//     expense = [12000, 5000, 60000, 12000, 50]

//    highest = expense[0]

//    for(let x of expense){
//     if(highest<x){
//         highest=x
//     }
//    }
//    console.log(highest);
   
//    low = expense[0]
//    for(let x of expense){
//     if(low>x){
//         low=x
//     }
//    }

//    console.log(low);
   

//    total = 0

//    for(let x of expense){
//      total = total+x
//    }
//    console.log(total)



// write a program to check whather 2 is present inthe given array 


    // arr = [ 19,12, 13, 14, 2, 3, 4]

    //     valu = 2
    //     present = false
    //     for(let x of arr){
    //         if(valu==x){
    //             present= true
    //         }
            
    //     }
    //     console.log(present? `2 is present ` : `2 is not present`) 



        // write a rpgram program the following output 

        // i/p = [4,5,6] 
        // o/p = [11, 10, 9]

        // arr =[4,5,6]

        // sum =0
        // arr1=[]

        // for(let x of arr){
        //     sum = sum+x 
        // }

        // for(let x of arr){
        //     arr1.push(sum-x)
        // }
        
        // console.log(arr1)



        //write a program find the duplicate number from a given array
        a = [10,20,30,20,40,30,50,60,10] //220
        // output = [10,20,30] // 

        // o=[]

        // for(i=0; i<=a.length-1; i++){
        //     for(j=i+1; j<=a.length-1; j++){
        //         if(a[i]==a[j]){
        //             o.push(a[i])
        //         }
        //     }
        // }
        // console.log(o)


        // o = []
        // for(i=0; i<=a.length-1;i++){
        //     for(j=i+1; j<=a.length-1; j++){
        //         if(a[i]==a[j]){
        //             isDuplicate = false
        //             for(k=0; k<=o.length-1; k++){
        //                 if(a[i]==o[k]){
        //                     isDuplicate = true
        //                 }
        //             }
        //             if(!isDuplicate){
        //                 o.push(a[i])
        //             }
        //         }
        //     }
        // }
        // console.log(o.length==0?`no duplication`: o)

        // write a program to find the pairsum from as 6 from the given array 

        // a = [2,3,4,5]
        // nopair = true
        // for(i=0; i<=a.length-1; i++){
        //     for(j=i+1; j<=a.length-1; j++){
        //         if(a[i]+a[j]==6){
        //             nopair=false
        //             console.log(`sum of pair : ${a[i]} and ${a[j]}`);

        //         }
        //     }
        // }
        // nopair && console.log(`no pair`);


        p = [10, 11, 12, 20, 30]
        q = [11, 20, 25, 30, 33]


        o =[]
        // for(i=0; i<=p.length-1;i++){
        //     for(j=0; j<=q.length-1; j++){
        //         if(p[i]==q[j]){
        //             o.push(p[i])
        //         }
        //     }
        // }

            for(let x of p){
                for(let j of q){
                    if(x==j){
                        o.push(x)
                    }
                }
            }
       
        console.log(o)
        


  

    
       
       

