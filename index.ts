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

// interface User{
//     ad: string;
//     age: 12 | 13 | 15;
//     job?: "fe"| "be"| "fs"; // optional
// }

// const ali: User ={
//     ad: "ali",
//     age: 13
// }

// -------------------------------------------------------------------------------------------------------------------------------------

// 0 islemir
// 1 isleyir
// 2 cixib

// DNS ->
enum workStatusEnum {
    Islemir = 0,
    Isleyir = 1,
    Cixib = 2
}

interface CompanyWorker {
    ad: string;
    workStatus: workStatusEnum;
}
const ali: CompanyWorker = {
    ad: 'ali',
    workStatus: workStatusEnum.Isleyir
}
enum Controllers {
    UP = 39,
    RIGHT = 40,
    DOWN = 38,
    LEFT = 37
}



enum Actions {
    "GET_USERS",
    "ADD_USER"
}
// dispatch({type:Actions.GET_USERS})