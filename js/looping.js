// for
// for(let i=0; i<4; i+2){
//     console.log(i);
// }

const fruits=["apple","orange","mango","grapes",]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // while
// let i=0;
// while(i<5){
//     console.log(i)
//     i++;
// }

// // do while
// let b=0;
// do{
//     console.log(b);
//     b++;
// }while(b<10)

// for each
fruits.forEach(function(i){
    console.log('fruit name is '+i)
});

const todos=[
    {id:1,title:"cooking", isCompleted: false},
    {id:2,title:"shopping", isCompleted: true},
    {id:3,title:"doing homework", isCompleted: false},
    {id:4,title:"football", isCompleted: true},
    {id:5,title:"gaming", isCompleted: false},

]

// map
const todoMap=todos.map(function(i){
    return i.title.toUpperCase();
})
console.log(todoMap);

// filter
// const todoFilter=todos.filter(function(i){
//     return i.isCompleted==true
// })
// console.log(todoFilter)


// const todoFalse=todos.filter(function(i){
//     return i.isCompleted==false;
// })
// const todoTitle=todoFalse.map(function(i){
//     return i.title;
// })
// console.log(todoTitle);





const todoTitle=todos
.filter(i=>i.isCompleted==false)
.map(i=>i.title.toUpperCase())
console.log(todoTitle);