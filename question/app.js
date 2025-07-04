// Q1
let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let language = ['JavaScript','PHP','Rudy','Python','Go'];
console.log(`私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`);

// Q3
let user = {
  name: 'John',
  age: 26,
  boodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game','Basket Ball','Programing'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder','The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites:['Football','Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5
console.log(playerList[0].age+playerList[1].age+playerList[2].age);

// Q6
function sayHello(){
  console.log('Hello');
};

sayHello();

const sayWorld = function(){
  console.log('Hello');
};
sayWorld();

// Q7
user = {
  birthday: '2000-09-27'
};

user.sayHello = function(){
  console.log('Hello!');
};

console.log(user.birthday);
sayHello();

// Q8
let calc = {};
calc.add = function(x,y){
  console.log(x+y);
}

calc.add(3,4);


calc.subtract = function(x,y){
  console.log(x-y);
}

calc.subtract(20,10);


calc.multiply = function(x,y){
  console.log(x*y);
}

calc.subtract(7,7);


calc.divide = function(x,y){
  console.log(x/y);
}

calc.subtract(10,2);

// Q9
function number(x,y){
  return x % y;
}
let x = 5;
let y =3;
let result = number(x,y);

console.log(x + 'を' + y + 'で割った余りは' + result + 'です。');

// Q10
function foo(){
  let x = 1;
}
console.log(x);

// 関数内だけスコープが有効なため、関数内でｘを参照できていないため、エラーが起きる

//応用
// Q1
function getRandom(){
  return Math.floor(Math.random() * 10);
}
const randomNum = getRandom();
console.log(randomNum);

// Q2
function getTime(){
  console.log('Hello World!');
}

setTimeout(getTime,3000);

// Q3
let num = 5;
if (num > 0){
  console.log('num is greater than 0')
}else if(num < 0){
  console.log('num is less than 0')
}else if(num == 0){
  console.log('num is 0')
}

// Q4
let sum = [];
for (let i = 0; i < 100; i++){
  sum.push(i);
}
console.log(sum);

// Q5
let mixed = [4,'2',5,'8','9',0,1]
for (let i = 0; i < mixed.length; i++){
  let item = mixed[i];

  if(item % 2 == 0 && typeof item ==='number'){
    console.log('even');
  }else if(typeof item === 'number' && item % 2 != 0){
    console.log('odd');
  }else if(typeof item != 'number'){
    console.log('not number');
  }
};