// // implicit let a = 'text'
// // explicit

// function cem(a:number, b:number) {
//     console.log(a + b);
// }
// cem(12, 23)
// // cem(12, +'23')
// --------------------------------------------------------------------------------------------------------------------------------------

// union U
// type Sinif = string | number 
// const sinif: Sinif = 'ali'
// -------------------------------------------------------------------------------------------------------------------------------------

// type sada = (string | number)[]
// const arr: sada = []
// arr.push(12)
// arr.push('ali')
// arr.push(true)
// -------------------------------------------------------------------------------------------------------------------------------------
// type Insan = {
//     ad:string;
//     age: 12 | 13 | 15;
//     job?: "fe"| "be"| "fs"; // optional
// }

// let human: Insan = {
//     ad: 'ali',
//     age: 12,
//     job: 'fe'
// }
// console.log(human.ad);
// console.log(human.job);

// -------------------------------------------------------------------------------------------------------------------------------------

interface User{
    ad: string;
    age: 12 | 13 | 15;
    job?: "fe"| "be"| "fs"; // optional
}

const ali: User ={
    ad: "ali",
    age: 13
}



