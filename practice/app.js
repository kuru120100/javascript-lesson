// alert('Hello world!');
console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'javaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let textText;
console.log(textText);//undefined

let string = 'JavaScriptの練習';
console.log(string);

let single = '文字列型です';
console.log(single);

let double = '英語だとstringと言います';
console.log(double);

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`
console.log(templateText);

function doFunc(callback){
  console.log('dozfuncが呼び出されました');
  callback();
}

function output(){
  console.log('コールバック関数が呼び出されました');
}

let John = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function(){
    console.log('LA~LA~LA~');
  }
};

John.sing();

let round = Math.round(2.86);//四捨五入
let ceil = Math.ceil(4.05);//切り上げ
let floor = Math.floor(4.98);//切り下げ
let random = Math.random();//0~1までの乱数生成