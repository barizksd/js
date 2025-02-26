
//[id, name, designation, location, salary, experience]
// employee =[ 
//     [1000,'Neel','developer','kochi',25000,3],
//     [1001,'Max','tester','TVM',20000,2],
//     [1002,'MAxwell','QA','kochi',35000,4],
//     [1003,'Vyom','QA','kochi',45000,5],
//     [1004,'Laisha','tester','TVM',55000,7],
//     [1005,'Aahan','developer','TVM',15000,1],
//     [1006,'Aahil','QA','kochi',20000,2],
//     [1007,'Shayan','developer','kochi',30000,3],
//     [1008,'Nihaan','developer','TVM',25000,3]
// ]

// print all employee name 

// employee.forEach(names=>{
//     console.log(names[1])
// })
        
// print total numbers of employee

// console.log(`total number of employe:`, employee.length)

    

   
// print developer employee details

// developer = employee.filter((emp)=>emp[2]==`developer`)
// console.log(developer)



// print employee whose salary > 30000

    // sal = employee.filter((emp)=>emp[4]>30000).forEach((item)=>console.log(item[1]));


// print details of employee Laisha

    // laisha = employee.find((emp)=>emp[1]==`Laisha`)
    // console.log(laisha)

// arrange the emplyee based on salary in descending order 

    // order = employee.sort((emp1, emp2)=>emp2[4]-emp1[4])
    // console.log(order);
    

//arrage the employe based on experience in asending order

    // order = employee.sort((emp1, emp2)=>emp1[4]-emp2[4])
    // console.log(order)

// find the totatl expense of the company 

    // slary = employee.map((emp)=>emp[4]).reduce((n1, n2)=>n1+n2)
    // console.log(slary)


// find the highest salary 
    // highest = employee.map((hg)=>hg[4]).reduce((m1,m2)=>m1>m2?m1:m2)
    // console.log(highest)

// find the lowest salary 

    // lowst = employee.map((lo)=>lo[4]).reduce((a1,a2)=>a1<a2?a1:a2)
    // console.log(lowst)
 

    /////////////////////////// some() ////////////////////////

//.1 write a program to check whether the fiven array contains even numbers 


    // a = [1,2,3,4,5,6,7]

    // even = a.some((num)=>num%2==0)
    // console.log(even);
    

    // colours = [ `red`, `blue`, `green`, `yellow`, `white`]

    // console.log(colours);

    // colours.splice(0,2)
    // colours.splice(3,1)
    // colours.splice(-3,1)

    // colours.splice(2,0,`purple`)

    // colours.splice()
    // console.log(colours);


        ///// includes()////////////
    // console.log(colours.includes(`green`))

    ////////// indexOf///////////////
    // console.log(colours.indexOf(`yellow`));

    ////////////slice()//////////////////

    // x = colours.slice(0,3)
    // console.log(x)
    
    // y = colours.slice(-3)
    // console.log(y);
    

    
    /********************************************************************************************************** */


    //[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

 products.forEach((names)=>{
        console.log(names);
        
    })

console.log("********************************************************************************");


//2. display product whose price < Rs.50

   products.filter((p1)=>p1[2]<50).forEach((item)=>console.log(item[1]))

//   hig = products.map((pro)=>pro[2]).reduce((n1, n2)=>n1<n2?n1:n2)
//         console.log(hig);
        

console.log("********************************************************************************");

//3. print price of oreo

   pirce = products.find((pro)=>pro[1]=='oreo');
    console.log(` Oreo Price : ${pirce[2]}`)

    
console.log("********************************************************************************");


//4. print costly product name
    costly = products.reduce((n1, n2)=>n1>n2?n1:n2)
    console.log(` Costily product is : ${costly[1]}`);
    

console.log("********************************************************************************");


//5. display out of stock product

//     outof = products.find((fin)=>fin[3]==0)
//     console.log(`out of stock : ${outof[1]}`
//    )


   products.filter((pro)=>pro[3]==0).forEach((item)=>console.log(`Out of stock : `,item[1]))
    




console.log("********************************************************************************");

//6. sort products based on stock in decsending order

        stock = products.sort((n1, n2)=>n2[3]-n1[3]).forEach((num)=>console.log(num[1]));
      
        
        
console.log("********************************************************************************");

//7. print product having maximum available stock

    max = products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
    console.log(max[1]);
    
console.log("********************************************************************************");

            
//8. is there any product can be purchased by Rs. 10

    p = products.some((num)=>num[2]<=10)
    console.log(p?`yes`:`no`);
    
    console.log("********************************************************************************");


//9. Is there any product in the range of Rs.10 to Rs.30

    p = products.some((num)=>num[2]>=10 && num[2]<=30)
    console.log(p?`yes`:`no`);
    

console.log("********************************************************************************");


//10. print all products in the range of Rs.10 to Rs.30

    produ1 = products.filter((pro)=>pro[2]>10 && pro[2]<30).forEach((item)=>console.log(item[1]));
    



console.log("*************************************************************************************");


//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]

console.log("*************************************************************************************");

//1. district having Highest +ve case 


    hig = covid_data.reduce((n1, n2)=>n1[2]>n2[2]?n1:n2)
    console.log(hig[1]);
    

//2. district having Highest 1st dose vaccine

    highest = covid_data.reduce((n1, n2)=>n1[5]>n2[5]?n1:n2)
    console.log(highest[1]);
    

console.log("*************************************************************************************");

//3. district having lowest death rate

    lowest = covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
    console.log(lowest[1]);
    

console.log("*************************************************************************************");

//4. sort data with +ve case in descending order
order = covid_data.sort((n1, n2)=>n2[2]-n1[2]).forEach((num)=>console.log(num[1]));


console.log("*************************************************************************************");

//5. is district with +ve cases > 15000

   cas = covid_data.some((som)=>som[2]>15000)
        console.log(cas?`yes`:`no`);
        


//6. sort data with 1st dose vaccine ascending order

//7. Print Thrissur details

//8. Print total number of positive cases

//9. Print total number of curred cases

//10. Print curred cases in Idukki

    
    



