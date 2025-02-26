accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

// console.log(`number of accounts ${accounts.length}`);


//2. print account number whose ac_type is savings

// accounts.filter((ac)=>ac.ac_type==`savings`).forEach((item)=>console.log(item))


//3.print the balance of accnount number 1000

//  console.log(accounts.find((ac)=>ac.acno==1000).balance);
  

//4. print all gpay transactions

//   x= accounts.map((data)=>data.transaction).flat().filter((item)=>item.mode==`gpay`).forEach((item)=>console.log(item));
  
//   console.log(x);
  

//5. print all transaction whose amount > 5000

// accounts.map((item)=>item.transaction).flat().filter((item)=>item.amount>5000).forEach((item)=>console.log(item));


//6. print credit transaction of account 1002

  cread = accounts.map((data)=>data.transaction).flat().filter((item)=>item.to==1002) 
//   .forEach((item)=>console.log(item));
//    console.log(cread);
   


//7. print debit transaction of account 1002

   ac = accounts.find((data)=>data.acno==1002).transaction
//    console.log(ac);
   

//8. print transaction history of 1002
    
    his = {
        creadit:cread,
        debit:ac
    }
   
    console.log(his);

// print history has an array

    transhis = [...cread, ...ac]
    console.log(transhis);
    

    


//9. print highest balance account details

   hy = accounts.reduce((ac1, ac2)=>ac1.balance>ac2.balance?ac1:ac2)
   console.log(hy);
   