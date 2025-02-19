
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
    

    colours = [ `red`, `blue`, `green`, `yellow`, `white`]

    console.log(colours);

    // colours.splice(0,2)
    // colours.splice(3,1)
    // colours.splice(-3,1)

    colours.splice(2,4,`purple`)

    colours.splice()



    console.log(colours);
    
    



