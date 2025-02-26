
// str = `Luminar`

// console.log(str.startsWith(`l`));

// console.log(str.endsWith(`r`));


// str1 = `hello`
// console.log(str1.toUpperCase());

// str2 = `WELOCOM`
// console.log(str2.toLowerCase());


// write a program check a given number is mobile number or not

    // str = "9876543210"

    // console.log(str.length==10?`mobile number`: `loca number`);
    


// write a program check wheter a given mail id is gamail or not 

// email = `barizksd@gmail.com`

// console.log(email.toLowerCase?`yes its gmail `: `its not gmail`);


// wirite a program a check a given string starts with a letter q 

// str5 = "quckstart"

// console.log(str5.toLowerCase?`q  present`:` q is not prsent`);


// nam = "luminar"

// x = nam.substring(0,3)

// console.log(nam.substring(0,4));


// console.log(nam.slice(-4));

// str20 = "    newclas     "

// console.log(str20.trim());



// text = "Good evening all "

// arr = text.split(``)
// console.log(arr);

// sentance = `i come form kakkand , i also work in kakkand`

// a = sentance.replace(`kakkand`, `kochi`)

// b = sentance.replaceAll(`kakkand`,`ernakulam`)

// console.log(a);
// console.log(b);





// str = `luminar`
// c = Array.from(str)
// console.log(c);


// str = `Good Aftrernoon`

// character = Array.from(str)

// vowels = [`a`,`e`,`i`,`o`,`u`, `A`,`E`,`I`,`O`,`U`]

// o =[]

// for(let char of character){
//     if(vowels.includes(char)){
//         o.push(char);
//     }
// }
// console.log(o);



// Array.from(str).filter((item)=>vowels.includes(item)).forEach((item)=>console.log(item))




// write a program to check a given string is palindrome or not palindrome eg : malayalam



// str1= `Malayalam`

// pal = ``

// for(i=str1.length-1; i>=0; i--){
//     pal += str[i]
// }
// console.log(pal==str1?`palindrome`:`not palindrome`);



// start = 0
// end = str.length-1
// isPal = true
// while(start<end){
//     if(str[start]!= str[end]){
//         isPal = false
//     }
//     start++
//     end--
// }


// write a program to find the largest word from the given string 

// str = `my first programe`

// words = str.split(` `)
// largest = words[0]
// for(let w of words){
//     if(largest.length<w.length){
//         largest = w
//     }
// }

// console.log(largest);



// or model ***********

// x = str.split(` `).reduce((w1, w2)=>w1.length>w2.length?w1:w2)
// console.log(x);




