


//  for(i=0; i<4; i++){
//     str =" "
//     for(j=0; j<4; j++){
//         str = str+"# "
//     }
//     console.log(str)
// }


 // print the format 
// *
// **
// ***
// ****
// *****


// for(i=0; i<=4; i++){
//     str = ""
//     for(j=0; j<i; j++){
//         str = str+"* "
        
//     }
//     console.log(str)
// }


// miss answer 

// for(row=1; row<=4; row++){
//     str = ""
//     for(col=1; col<row; col++){
//         str = str+"#"
//     }

//     console.log(str)
// }


// .1  wirte the patten model 

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


// for(i=1; i<=4; i++){
//         str = ""
//     for(j=1; j<=4; j+1){
//         str = str+j
//     }
//     console.log(str)
// }

//.2 to print the patten model 

    // 1 1 1 1
    // 2 2 2 2
    // 3 3 3 3
    // 4 4 4 4

    // for(i=1; i<=4; i++){
    //     str = ""
    //     for(j=1; j<=4; j++){
    //         str = str+i
    //     }
    //     console.log(str)
    // }

    // 3. to print patten 

    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4

    // for(i=1; i<=4; i++){
    //     str = " "
    //     for(j=1; j<=i; j++){
    //         str = str+ j
    //     }
    //     console.log(str )
    // }


    // 4. print patten 

    //  * * * *
    //  * * * 
    //  * * 
    //  *

//    for(row =4; row>=1; row--){
//     str = ""
//     for(col=1; col<row; col++){
//         str = str+" *"
//     }
//     console.log(str)
//    }


//    4. to print patten 


// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// for(i=0; i<5; i++){
//     str = ""
//     for(j=1; j<=i; j++){
//         str = str+"* "
//     }
//     console.log(str)
// }
// for(i=5; i>=1; i--){
//     str = ""
//     for(j=1; j<=i; j++){
//         str = str+"* "
//     }
//     console.log(str)
// }

// for(i=1; i<=9; i++){
//     if(i<5){
//         str = " "
//         for(j=1; j<=i; j++){
//             str = str+"* "
//         }
//         console.log(str);
        
//     }
//     else{
//         str =" "
//         for(j=1; j<=10-i; j++){
//             str = str+"* "
//         }
//         console.log(str)
//     }
// }

// for(row=1; row<=9; row++){
//     str =""
//     for(col=1; row<=5? col<=rew: col<=10-row; col++){
//         str= str+"* "
//     }
//     console.log(str)
// }


// write a patten 

//             *   
//         *       *
//     *       *       *
// *       *       *       *


// for(i=9; i>=1; i--){
//     str = " "

//     for(j=1; j<=i; j++){
//         str= str+" "    
//     }

//     for(j=1; j<=10-i; j++){
//         str= str+"* "
//     }
   
//     console.log(str)
 
// }

// for(i=1; i<=4; i++){
//     str = " "
//     for(j=4; j>i; j--){
//         str = str+ " "
//     }
//     for(j=1; j<=i; j++){
//         str = str+"* "
//     }

//     console.log(str)
// }

// write the  patten 

//             *
//           *   *
//         *   *   *
//       *   *   *    *
//     *   *   *   *    *
//   *   *   *   *    *    *
//     *   *   *   *     *
//       *   *   *    *
//          *  *   *
//            *  *
//              *            

// for(i=1; i<=5; i++){
//     str = " "
//     for(j=5; j>=i; i--){
//         str = str+" "
//     }
//     for(j=1; j<=i; j++){
//         str = str+"*"
//     }
// }
// for(i=4; i>=1; i--){
//     str = "" 
//     for(i=1; i<=5; i++){
//         str= str+" "
//     }
//     for(j=5; j>=1; j--){
//         str= str+"* "
//     }
//     console.log(str)
// }


// wirte a patten 

//           *
//       *       * 
//    *             * 
// *  *  *   *   *    *


// for(i=1; i<=4; i++){
//     str = " "
//     for(j=1; j<=7; j++){
//         if(j+i==5 || j-i==3 || i==4){
//             str = str+"*"
//         }
//         else{
//             str = str+ " "
//         }
//     }
//     console.log(str)
// }


// write patten holo

    // * * * * *
    // *       *
    // *       *
    // *       *
    // * * * * *


    // for(i=1; i<=5; i++){
    //     str = ""
    //     for(j=1; j<=5; j++){
    //        if(i==1||i==5||j==1||j==5){
    //         str= str+"* "
    //        }
    //        else{
    //         str= str+"  "
    //        }
    //     }
    //     console.log(str)
    // }


    //write patten 
    //1  (1,1)
    //0 1 (2,2)
    //1 0 1 (3,1)(3,3)
    //0 1 0 1 (4,2)(4,4)

    // for(i=1; i<=4; i++){
    //         str = " "
    //         for(j=1; j<=i; j++){
    //             if(i+j==2|| i+j==4||i+j==6||i+j==8 ){
    //                 str=str+"1 "
    //             }
    //             else{
    //             str= str+"0 "
    //         }
    //         }
    //         console.log(str )
    //     }


// another method 

        // for(row=1; row<=4; row++){
        //     str=""
        //     for(col=1; col<=row; col++){
        //         if((row+col)%2==0){
        //             str= str+"1 "
        //         }
        //         else{
        //             str = str+"0 "
        //         }
        //     }
        //     console.log(str)
        // }

//wirte patte 

    // * * * * *
    //   *   * (2,2)(2,4) 
    //     *   (3,3) 
    //   *   *  (4,2)(4,4)
    // * * * * *

    // for(i=1; i<=5; i++){
    //     str= ""
    //     for(j=1; j<=5; j++){
    //         if(i==j|| i==5|| i==1||i+j==6){
    //             str=str+"* "
    //         }
    //         else{
    //             str=str+"  "
    //         }
    //     }

    //     console.log(str)
    // }

    // write patten 
// num = 10
//     for(i=1; i<=4; i++){

//             str = " "
//             for(j=4; j>i; j--){
//                 str = str+ " "
                
//             }
//             for(j=1; j<=i; j++){
//                str= str+num+" "
//                 num+=1
//             }
           
            
//             console.log(str)
//         }

  