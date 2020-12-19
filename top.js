// console.log(typeof 1); // number
// console.log(typeof 'abc') // string
// console.log(typeof true); // boolean  number string boolean
// console.log(typeof {
//     a: 1
// }) // object
// console.log(typeof undefined) // undefined
// console.log(typeof
//     function () {}) // function
// console.log(typeof [1, 2, 3]); // object 数组也是
// console.log(typeof null); // object
// console.log(typeof undefined) // undefined
// console.log(typeof (1 - '1'));
// console.log(1 - '1');
// console.log(typeof ('1' - '1'));
// console.log('1' - '1');


// console.log(typeof (typeof undefined)); // typeof 'undefined'
// let a = '123'
// // number-123
// // typeof 123 + '-' + 123
// console.log(typeof (Number(a)) + '-' + Number(a))
// let a = 3.14
// typeof 'number' + '-' + 3.14
// string-3.14
// let a = 3.14
// console.log(typeof(Number(a)));
// console.log(typeof (Number(a)) + '-' + Number(a))
// let a = '123'
// console.log(typeof(parseInt(a)) + '-' + parseInt(a))
// console.log('123abc')
// console.log(parseInt('abc123'))
// console.log(parseFloat('3.1415926').toFixed(2))
// let str = 123 + ''
// let str1 = 123
// str1 = str1.toString()
// console.log(typeof str);
// console.log(typeof str1)

// let str = null
// let str1 = undefined
// str = str.toString()
// str1 = str1.toString()
// console.log(typeof str);
// console.log(typeof str1);
// let num = 10
// console.log(num.toString(2))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(""))
// console.log(Boolean(0))
// 隐式转换
let a = '123'
console.log(Number(a))
a++ // 因为a++ 所以Number(a)
console.log(a)