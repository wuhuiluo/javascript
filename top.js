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
// let a = '123'
// console.log(Number(a))
// a++ // 因为a++ 所以Number(a)
// console.log(a)
// let a = '3' > 2
// console.log(a)
// let a = 1 == '1'
// console.log(a)
// let a = NaN == NaN
// console.log(a)
// let a = 4 > 3 > 2
// let b = 2 > 1 == 1
// console.log(a)
// console.log(b)
// let a = undefined > 0 // false
// let b = undefined == 0 // false
// let c = undefined < 0 // false
// let d = undefined == undefined // true
// let e = undefined == null // true
// let f = null > 0 // false
// let g = null == 0 // false
// let h = null < 0 // false
// console.log(a, b, c, d, e, f, g, h);
// let a = '123'
// number
// console.log(typeof (+a) + '-' + a)
// let a = NaN
// let b = '123'
// let c = 'a'
// let d = null
// let e = undefined
// console.log(isNaN(a)); // true
// console.log(isNaN(b)) //false
// console.log(isNaN(c)) // true
// console.log(isNaN(d)) // true
// console.log(isNaN(e)) // 
// var test = function test1() {
//     var a = 1
//     console.log(a)
// }
// test()
// test1()
// 匿名函数后面的函数没有名称
// let test = function () {
//     var a = 1
//     console.log(a)
// }
// test()
// function test(a, b) {
//     console.log(test.length) // 形参
//     console.log(arguments.length) // 实参
// }
// test(1, 2, 3)
// function test(a,b) {
//     a = 3
//     console.log(arguments[0])
// }
// test(1,2)
// function test(a, b) {
//     b = 4
//     console.log(arguments[1])
// }
// test(1)
// a = 1
// function test1() {
//     var b = 2
//     console.log(a) // 1
//     function test2() {
//         var c = 3
//         console.log(b) // 2
//     }
//     test2()
//     console.log(c) // undefined
// }
// test1()
// function test(a = 1, b = 1) {
//     console.log(a)
//     console.log(b)
// }
// test()
// function test(a = 1, b) {
//     console.log(a);
//     console.log(b);
// }
// test(undefined, 6)
// function test(a, b) {
//     a = arguments[0] || 1
//     b = arguments[1] || 1
//     console.log(a)
//     console.log(b)
// }
// test(undefined, 6)
// test()
// function test() {
//     console.log(1)
// }
// console.log(a)
// var a = 1
// console.log(a)

// function a(a) {
//     var a = 10
//     var a = function () {

//     }
// }
// var a = 1

// var a
// console.log(a)
// a = 1

// function a() {
//     var a = 10
//     var a = function () {

//     }
// }
// function test() {
//     var a 
//     a = b = 1
// }
// test()
// console.log(b)
// function test(a) {
//     console.log(a) // [Function: a] 

//     var a = 1

//     console.log(a) // 1

//     function a() {}

//     console.log(a);

//     var b = function () {}

//     console.log(b);

//     function d() {}
// }
// test(2)

// 第一步，寻找函数里的形参和变量声明
// 第二步，将实参的值赋值给形参
// 第三步,寻找函数声明，然后赋值给函数体
// 第四步,执行
// AO = {
//     a: undefined - > 2 > function a() {} - > 1,
//     b: undefined,
//     d: function d() {}
// }
// function test(a, b) {
//     console.log(a) // 1
//     c = 0;
//     var c
//     a = 5
//     b = 6
//     console.log(b); // 6

//     function b() {}

//     function d() {}
//     console.log(b) // 6
// }
// test(1)

// AO = {
//     a: undefined - 1
//     b: undefined - function b() {}
//     c: undefined
//     d: function () {}
// }

// var a = 1

// function a() {
//     console.log(2);
// }
// console.log(a)

// 1。寻找变量声明
// 2。寻找函数声明
// 3。执行
// b: undefined -> function() {}
// a: function() {}
// console.log(a, b)

// function a() {}
// var b = function () {}
// var b = function() {}
// console.log(a,b)
// 1. 寻找实参和变量声明
// 2. 将实参的参数赋值给形参
// 3. 寻找函数声明，然后赋值给函数体
// 4. 执行
// function a() {}
// 在函数执行前 (之前)
// 1. 第一步 寻找函数里的形参和变量声明
// 2. 第二步 将实参的参数赋值给形参
// 3. 第三部 寻找函数声明， 然后赋值给函数体
// 4. 执行

// AO = {
//     a: undefined - 2 - function a() {}
//     b: undefined
//     c: function d() {}
// }

// function test(a, b) {
//     console.log(a) // 1
//     c = 0
//     var c
//     a = 5
//     b = 6
//     console.log(b) // 6

//     function b() {}

//     function d() {}
//     console.log(b) //6
// }
// test(1)

// AO = {
//     a: undefined - 1 ,
//     b: undefined - function() b{} - 6
//     c: undefined - 0
//     d: function() {}

// }
// var a = 1
// function a() {
//     console.log(2);
// }
// console.log(a)
// 寻找变量声明
// 寻找函数声明
// 执行
// var a = 1

// function a() {
//     console.log(2)
// }
// console.log(a)

// GO = {
//     a: undefined - > function a() {} - 1
// }
// var b = function () {}
// console.log(a, b)

// function a() {}
// console.log(a)

// function a(a) {
//     var a = 10
//     var a = function () {

//     }
// }
// var a = 1

// GO = {
//     a: undefined - > function a() {}
// }

// var b = 3
// console.log(a) // [Function: a]

// function a(a) {
//     console.log(a); // [Function: a]
//     var a = 2
//     console.log(a); // 2

//     function a() {
//         var b = 5
//         console.log(b) // 5
//     }
// }
// a(1)
// GO = {
//     a: undefined - > function () a {}
//     b: undefined - > 3
// }
// 执行后
// AO = {
//     a: undefined -> 1 -> function a() - 2
//     b: undefined - 5
// }

// 1.寻找变量和实参
// 2.把实参的值给形参
// 3.寻找函数声明，并且赋值给函数体
// 4.执行

// a = 1
// function test() {
//     console.log(a)
//     a = 2
//     console.log(a);
//     var a = 3
//     console.log(a)
// }
// test()
// var a;
// GO = {
//     a: undefined -> 1
// }

// AO: {
//     a: undefined - 2 -3
// }
// a = 1

// function test() {
//     console.log(a);
//     a = 2
//     console.log(a)
//     var a = 3
//     console.log(a)
// }
// test()
// var a;
// function test() {
//     console.log(b); // undefined
//     if (a) {
//         var b = 2
//     }
//     c = 3
//     console.log(c); // 3
// }
// var a;
// test()
// a = 1
// console.log(a); // 1

// //执行后
// GO = {
//     a: undefined - > 1,
//     test: function () {}
// }

// AO = {
//     b: undefined - 2,
//     c: undefined - 3
// }
// function test() {
//     return a
//     a = 1
//     function a() {}
//     var a = 2
// }
// console.log(test());

// AO = {
//     a: undefined - function a() {}
// }
// function test(){
//     console.log(b); 
//     if(a){
//       var b = 2;
//     }
//     c = 3;
//     // console.log(c); 
//   }
//   var a;
//   test();
//   a = 1;
//   console.log(a);
//   console.log(c);

// function test(a, b) {

// }
// console.log(test.name);
// console.log(test.length);

// function test1() {
//     function test2() {
//         var b = 2
//         console.log(a);
//     }
//     var a = 1
//     return test2()
// }
// var c = 3
// var test3 = test1()
// test3()

// let teacher = {
//     name: 'whl',
//     age: 32,
//     sex: 'male',
//     height: 176,
//     weight: 130,
//     teach: function () {
//         console.log('I am teaching JS');
//     },
//     smoke: function () {
//         console.log('I am smoking');
//     },
//     eat: function () {
//         console.log('I am having a dinner');
//     }
// }

// 查找
// console.log(teacher.name);
// teacher.teach()
// teacher.smoke()
// teacher.eat()

// 增加

// teacher.address = '北京'
// teacher.drink = function () {
//     console.log('I am drinking beer');
// }
// console.log(teacher.address);
// teacher.drink()

// 修改

// teacher.teach = function () {
//     console.log('I am teaching vue');
// }
// teacher.teach()
// 删除(只有对象才能删除)
// delete teacher.address;
// delete teacher.teach
// console.log(teacher);
// 对象是通过构造函数实例化出来的
// 构造函数基础 对象是通过构造函数实例化创建出来的
// var obj = new Object()
// obj.name = '张三'
// obj.sex = '男士'
// console.log(obj);
// function Teacher() {
//     this.name = '张三'
//     this.sex = '男士'
//     this.smoke = function () {
//         console.log('I am Smoking')
//     }
// }

// var teacher1 = new Teacher()
// var teacher2 = new Teacher()
// teacher1.name = 'wuhuiluo'
// console.log(teacher1.name);
// console.log(teacher2.name);
// GO = {
//     Teacher: function () { ... }
// }
// function Teacher(opt) {
//     this.name = opt.name
//     this.sex = opt.sex
//     this.weight = opt.weight
//     this.course = opt.course
//     this.smoke = function () {
//         this.weight--
//         console.log(this.weight);
//     }
//     this.eat = function () {
//         this.weight++
//         console.log(this.weight)
//     }
// }

// var t1 = new Teacher({
//     name: '张三',
//     sex: '男士',
//     weight: 130,
//     course: 'JS'
// });
// var t2 = new Teacher({
//     name: '李四',
//     sex: '女士',
//     weight: 90,
//     course: 'Vue'
// });
// console.log(t1);
// console.log(t2);
// new Number new String new Boolean
// var a = 'abc'
// console.log(a)
// // 对象都是new 出来的
// var aa = new String('abc')
// aa.name = 'aa'
// console.log(aa);
// // var bb = aa + 'bcd'
// // console.log(bb);

// var arr = [1, 2, 3, 4, 5]
// arr.length = 3
// console.log(arr);
// console.log('wuhuiluo' + 10);
// var name = 'wuhuiluo'
// name += 10
// var type = typeof (name)
// if (type.length === 6) {
//     type.text = 'string'
// }
// console.log(type.text);
// let a = 3
// a.leg = a
// console.log(a.leg);
// let b = '123'
// console.log(b.length);
// let b = '123'
// console.log(new String())

// var name = 'wuhuiluo'
// name += 10
// var type = new String(typeof (name))
// if (type.length === 6) {
//     type.text = 'string'
// }
// console.log(type)
// console.log(type.text)

// function test(a, b, c) {
//     var d = 1
//     this.a = a
//     this.b = b
//     this.c = c

//     function f() {
//         d++;
//         console.log(d)
//     }
//     this.g = f
// }
// 通过构造函数创建出来的对象
// var test1 = new test()
// test1.g()
// test1.g()
// var test2 = new test()
// test2.g() // 2

// AO = {

// }

// GO = {

// }

// function b(x, y, a) {
//     a = 10
//     console.log(arguments[2])
// }

// b(1, 2, 3)

// function Test() {

// }
// 原型prototype function对象的一个属性
// console.log(Test.prototype) // 对象
// 构造函数
function Foo(name, age) {
    this.name = name
    this.age = age
}

Foo.prototype.sex = '男士'
var foo = new Foo('wuhuiuo', 21)
console.log(foo.name);
console.log(foo.sex);