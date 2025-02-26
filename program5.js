// a = [1000, `neel`, `developer`, `kochi`,25000,3]

// object mode : 

// b = {
//     empid : 1000,
//     empname : `neel`,
//     empDeg : "develper",
//     empplace : "kochi",
//     empslary : 25000,
//     empExp : 3

// }

// console.log(a);
// console.log(b);

// console.log(b[`empplace`]);  // to access for object kery use name of key name 
// console.log(b.empDeg); // its ues to object only ecact key name used only 

// console.log("*************************************");

// for(let x in b){
//     console.log(x);  // its used to key  access for object array
//     console.log(b[x]); // its used to print value accessing for object it index value 
    
    
// }

// b[`empAtten`] = `90%`

// console.log(b);

// Object.assign(b,{'status':true})
// console.log(b);



products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

//  products.forEach(pro=>{console.log(pro.pName);
//  })

//  for(let n of products){
//     console.log(n.pName);
    
//  }

//2. print all mobile details whose display is lcd
    // products.filter((pro)=>pro.display==`lcd`).forEach((item)=>console.log(item.pName))
//    console.log(x);
   


//3. print 5g mobile phone name

    products.filter((pro)=>pro.band==`5g`).forEach((item)=>console.log(item.pName))



//4. sort mobile based on price

    // x = products.sort((n1, n2)=>n1.price-n2.price).forEach((item)=>console.log(item.pName)
    // )
    // console.log(x);
    

//5. print costly mobile

    // m = products.reduce((m1,m2)=>m1.price>m2.price?m1:m2)
    // console.log(m.pName);
    

//6. print low cost mobile

    l = products.reduce((m1,m2)=>m1.price<m2.price?m1:m2)
    console.log(l.pName);
    




