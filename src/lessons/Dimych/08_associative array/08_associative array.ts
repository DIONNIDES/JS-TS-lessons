/*

export let student = {
    name:'Dima',
    age:25,
    address:{
        city:{
            title:'Rybna'
        }
    }
}

console.log(student);
console.log(student['name']);
console.log(student['age']);
console.log(student['address']['city']['title']);


export let student2 = {
    'name':'Dima',
    'age':25,
    'address':{
        'city':{
            'title':'Rybna'
        }
    }
}

console.log(student2);
console.log(student2['name']);
console.log(student2['age']);
console.log(student2['address']['city']['title']);
//будет работать так же само

//можно добавить динамически свойство в обьект (если без TS)
/!*
var city={

}
city['citizensCount']=100;
city.title='Mycolaiv';
*!/


let users = ['Dimas', 'Oleg', 'Victor', 'Ivan'];

//users[null] = 'retard' - добавится свойство 'null':'retard'
//users['null'] = 'retard' - добавится свойство 'null':'retard' ---аналогичный способ

//users[ {} ] = 'blabla'; ---- добавится свойство   [ object Object] : 'blabla'; --- передавали в свойство пустой обьект и он неявно преобразовался к массиву с элементом [ object Object]
//users[ {name:'Dimas'}, toString(){return 'blabla' ] = 'blabla'; ---- добавится свойство   'blabla' : 'blabla'; --- передавали в свойство обьект и переопределяли для него метод  toString(){return 'blabla'}
users.map(u => u.toUpperCase());//можно писать так
users['map'](u=>u.toUpperCase())// ИЛИ можно писать так

let usersObj = {
    '0':'Dimas',
    '1':'Oleg',
    '2':'Victor',
    '3':'Ivan',
}

/!*console.log(usersObj[0]);
console.log(usersObj[1]);
console.log(usersObj[2]);
console.log(usersObj[3]);
обращение к свойствам обьекта (ассоциативного массива)
*!/

/!*console.log(usersObj['0']);
console.log(usersObj['1']);
console.log(usersObj['2']);
console.log(usersObj['3']);
обращение к свойствам обьекта (ассоциативного массива) через кавычки
*!/


console.log(   Object.keys(usersObj)  )//вернет ключи '0','1','2','3' в виде массива
console.log(   Object.values(usersObj)  )//вернет ключи '0','1','2','3' в виде массива (более новый способ этого действия)
*/


//export const usersArray = ['Dima', 'Ivan', 'Artem', 'Victor'];



import {UsersType} from './08_associative_array.test';

export const usersObj = {
    '0':'Dima',
    '1':'Ivan',
    '2':'Artem',
    '3':'Victor'
}

export let users:UsersType = {
    '101': {id:101, name:'Dima'},
    '402': {id:402, name:'Ivan'},
    '555': {id:555, name:'Artem'},
    '777': {id:777, name:'Victor'},
}
//добавляем пользователя в обьект (ассоциативный массив)
let user = {id:101, name:'Dima'};
users[user.id] = user;
/*Результат:
101: {id: 101, name: 'Dima'}
402: {id: 402, name: 'Ivan'}
555: {id: 555, name: 'Artem'}
777: {id: 777, name: 'Victor'}
100500: {id: 100500, name: 'Dima'}*/

//удаляем пользователя из обьекта: (ассоциативный массив)
delete users[user.id];
/*
Результат:
101: {id: 101, name: 'Dima'}
402: {id: 402, name: 'Ivan'}
555: {id: 555, name: 'Artem'}
777: {id: 777, name: 'Victor'}
*/

//Вносим изменение в обьект(ассоциативный массив)
users['555'].name = 'Clown';

/*Результат:
101: {id: 101, name: 'Dima'}
402: {id: 402, name: 'Ivan'}
555: {id: 555, name: 'Clown'}
777: {id: 777, name: 'Victor'}*/


export const usersArray = [
    {id:101, name:'Dima'},
    {id:402, name:'Ivan'},
    {id:5555, name:'Artem'},
    {id:1, name:'Victor'},
]

usersArray.find(u=>u.id ===1);//пробегаемся по всему массиву, в котором потенциально может быть 1000000обьектов, что отнимает много ресурсов

