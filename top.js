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
// function Foo(name, age) {
//     this.name = name
//     this.age = age
// }

// Foo.prototype.sex = '男士'
// var foo = new Foo('wuhuiuo', 21)
// console.log(foo.name);
// console.log(foo.sex);

// Car.prototype.name = 'Benz'

// function Car() {}
// console.log(Car.prototype)
// Car.prototype = {
//     name: 'wuhuiluo'
// }
// var car = new Car()
// console.log(car.name)
// Professor.prototype.tSkill = 'Java'

// function Professor() {}
// var professor = new Professor()

// Teacher.prototype = professor

// function Teacher() {
//     this.mSkill = 'js'
//     this.students = 500
//     // this.success = {
//     //     alibaba: '28',
//     //     tencent: '30'
//     // }
// }

// var teacher = new Teacher()

// Student.prototype = teacher

// function Student() {
//     this.pSkill = 'html'
// }

// var student = new Student()
// console.log(student.students)
// student.students++
// console.log(student, teacher)
// // student.success.baidu = '100'
// // student.success.tencent = '50'
// console.log(teacher, student)

// 原型链的顶端是Object.prototype
// let obj = {
//     name: 'wuhuiluo'
// }
// obj.name = 21
// console.log(obj.name)
// function Car() {
//     this.brand = 'Benz'
// }
// Car.prototype = {
//     brand: 'Mazda',
//     intro: function () {
//         console.log(`我是${this.brand}车`)
//     }
// }
// var car = new Car()
// car.intro()
// function Obj() {}
// Obj.prototype.num = 1
// var obj1 = Object.create(Obj.prototype)
// var obj2 = new Obj()
// console.log(obj1)
// console.log(obj2)
// var obj = Object.create(null)
// obj.num = 1
// var obj1 = {
//     count: 2
// }
// obj.__proto__ = obj1
// // console.log(obj)
// // console.log(obj1)
// console.log(obj.count)
// var num = 1
// var obj = {}
// var obj1 = Object.create(null)
// document.write(num)
// document.write(obj)
// document.write(obj1)
// function Car(brand, color) {
//     this.brand = brand
//     this.color = color
// }
// let newCar = {}
// Car.call(newCar, 'Benz', 'red')
// console.log(newCar)
// var car = {
//     brand: 'benz',
//     color: 'red',
//     lang: '5',
//     width: '2.5'
// }

// for (var key in car) {
//     console.log(car[key])
//     console.log(car.key)
// }
// function Car() {
//     this.brand = 'benz'
//     this.color = 'red'
//     this.displacement = '3.0'
// }

// Car.prototype = {
//     lang: 5,
//     width: 2.5
// }

// Object.prototype.name = 'object'
// var car = new Car()
// for (var key in car) {
//     if (car.hasOwnProperty(key)) {
//         console.log(`${key}: ${car[key]}`);
//     }
// }
// function Car() {}
// var car = new Car()
// function Person() {}
// var p = new Person()
// console.log(car instanceof Car);
// console.log(car instanceof Object);
// console.log([] instanceof Array);
// console.log([] instanceof Object);
// console.log({} instanceof Object);
// function test(b) {
//     this.d = 3
//     console.log(this)
//     this.a = 100
//     var a = 1

//     function c() {}
// }
// var Test = new test()
// console.log(d);
// console.log(a);
// numer string boolean object function undefined
// function b(x, y, a) {
//     arguments[2] = 10
//     console.log(a);
// }
// b(1, 2, 3)
// var a = '1'

// function test() {
//     var a = '2'
//     this.a = '3'
//     console.log(a)
// }
// test()
// new test()
// console.log(a)

// AO = {
//     a: undefined
// }

// GO = {
//     a: undefined 
// }

// let arr = ['whl', 'whuiluo', 'liu']

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for(let key in arr) {
//     console.log(key);
// }
// arr.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

// const arr = [1,4,9,16]
// const result = arr.map(Math.sqrt)
// console.log(result)
// let arr = [1, 2, 3, 4, 5]

// let newArr = arr.filter((cur, index) => {
//     console.log(cur, index)
//     return cur % 2 == 0
// })
// let arr = ['wuhuiluo','12345','789']
// let keys = arr.keys()
// let values = arr.values()
// let entry = arr.entries()
// for(let item of keys) {
//     console.log(item)
// }
// for(let item of values) {
//     console.log(item)
// }
// for(let item of entry) {
//     console.log(item)
// }
// let a = 'hello world'

// function first() {
//     console.log('inside first function')
//     second()
//     console.log('again inside first function')
// }

// function second() {
//     console.log('Inside second function');
// }

// first()
// console.log('Inside Global Excution Context')
// this指向全局对象window
// 被一个引用对象** 调用 **
// let foo = {
//     baz: function () {
//         console.log(this);
//     }
// }

// foo.baz()

// let bar = foo.baz
// bar()
// call apply bind new
// 隐式绑定 显式绑定 window绑定 new绑定
// const user = {
//     name: 'wuhuiluo',
//     age: 27,
//     greet() {
//         console.log(`hello I am ${this.name}`);
//     },
//     mother: {
//         name: '123456',
//         greet() {
//             console.log(`hello I am ${this.name}`);
//         }
//     }
// }
// user.greet()
// user.mother.greet()
// function greet(lang1, lang2, lang3) {
//     alert(`hello,My name is ${this.name} and I know ${lang1},${lang2},${lang3}`)
// }
// const user = {
//     name: 'wuhuiluo',
//     age: 27
// }
// const languages = ['Javascript', 'Python', 'JavaEE']
// // greet.call(user, languages[0], languages[1], languages[2])
// greet.apply(user, languages)
// window.age = 10

// function sayAge() {
//     alert(`hello my age is ${this.age}`)
// }
// sayAge()
// var str = '([})'

// function isValid(s) {
//     if (s.length % 2 === 1) {
//         return false
//     }
//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         const c = s[i]
//         if (c === '(' || c === '{' || c === '[') {
//             stack.push(c)
//         } else {
//             const t = stack[stack.length - 1]
//             if (t === '{' && c === '}' || t === '[' && c === ']' || t === '(' && c === ')') {
//                 stack.pop()
//             } else {
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }
// const result = isValid(str)
// console.log(result);
// 用js模拟虚拟DOM
// {
//     tag: 'div',
//     props: {
//         id: 'app',
//         className: 'container'
//     },
//     children: [{
//             tag: 'h1',
//             children: '虚拟DOM'
//         },
//         {
//             tag: 'ul',
//             props: {
//                 style: 'color: orange'
//             },
//             children: [{
//                     tag: 'li',
//                     children: '第一项'
//                 },
//                 {
//                     tag: 'li',
//                     children: '第二项'
//                 },
//                 {
//                     tag: 'li',
//                     chidlren: '第三项'
//                 }
//             ]
//         }
//     ]
// }

// 引入snabbdom库
// const snabbdom = window.snabbdom
// 将vnode(虚拟节点) 塞入空的容器中

// const patch = snabbdom.init([
//     snabbdom_class,
//     snabbdom_props,
//     snabbdom_style,
//     snabbdom_eventlisteners
// ])

// 创建vnode(虚拟节点)
// const h = snabbdom.h

// // 空的容器

// const container = document.getElementById('container')

// // 创建vnode 
// const vnode = h('ul#list', {}, [
//     h('li.item', {}, '第一项'),
//     h('li.item', {}, '第二项')
// ])

// patch(container, vnode)

// const fun1 = () => {
//     fun2()
// }

// const fun2 = () => {
//     fun3()
// }
// const fun3 = () => {}
// fun1()
// const queue = []
// queue.push(1)
// queue.push(2)
// let item1 = queue.shift()
// let item2 = queue.shift()
// let a = 5
// let b = {
//     name: 'wuhuiluo'
// }

// function test(a,b) {
//     a = 29
//     b.name = '666'
// }
// test(a,b)
// console.log(a);
// console.log(b.name);
// function max(a, b) {
//     console.log(arguments);
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }
// var t = max(10, 9, 100, 40)
// console.log(t);
// function myMax() {
//     if (arguments.length < 0) {
//         return
//     }
//     let max = arguments[0]
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i]
//         }
//     }
//     return max
// }

// let t = myMax(12345, 123456,999999)
// console.log(t);

// function cache() {
//     const data = {} // 闭包中的数据
//     return {
//         set: function (key, value) {
//             data[key] = value
//         },
//         get: function (key) {
//             return data[key]
//         }
//     }
// }
// let c = cache()
// console.log(c)
// c.set('a', 100)
// let b = c.get('a')
// console.log(b);
// for (var i = 0; i < 5; i++) {
//     (function (x) {
//         setTimeout(() => {
//             console.log(x++);
//         })
//     }(i))
// }
// console.log(i)

// const isPregnant = false

// const promise = new Promise((resolve, reject) => {
//     if (isPregnant) {
//         resolve('孩子他爹')
//     } else {
//         reject('老公')
//     }
// })

// promise.then(name => {
//     console.log(`男人成为了${name}`)
// }).catch(name => {
//     console.log(`男人成为了${name}`);
// }).finally(() => {
//     console.log('他们最后结婚了');
// })

// const imgAddress = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fclipartmag.com%2Fimages%2Fbird-cartoon-image-45.png&refer=http%3A%2F%2Fclipartmag.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611480242&t=832d6acfa87d4a52db11e187b8ca0f4a'


// const imgPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const img = new Image()
//         img.src = url
//         console.log(img);
//         img.onload = () => {
//             resolve(img)
//         }
//         img.onerror = () => {
//             reject(new Error('图片有误'))
//         }
//     })
// }

// imgPromise(imgAddress)
//     .then(img => {
//         document.body.appendChild(img)
//     })
//     .catch(error => {
//         document.body.innerHTML = error
//     })

// 构造函数 实例 原型对象
// 所有类型的对象都可以看作是相应的构造函数创建出来的
// Function.prototype.constructor()
// 对象分为普通对象和函数对象
// 函数对象: Object、Fuction均是js自带的函数对象
// var o1 = {}
// var o2 = new Object()
// var o3 = new f1()

// function f1() {}

// function f2() {}
// var f3 = new Function('str', 'console.log(str)')

// console.log(typeof Object)
// console.log(typeof Function)

// console.log(typeof f1)
// console.log(typeof f2)
// console.log(typeof f3);

// console.log(typeof o1);
// console.log(typeof o2);
// console.log(typeof o3);
// 构造函数
// function Person(name, age, job) {
//     this.name = name
//     this.age = age
//     this.job = job
//     this.sayHi = function () {
//         console.log(this.job);
//     }
// }

// var person1 = new Person('123', 12, 'abc') // 实例
// var person2 = new Person('456', 111, 'kob') // 实例
// console.log(person1.constructor === Person)
// console.log(person2.constructor === Person);
// function Person() {} // 函数对象
// Person.prototype.name = 'whl' 
// Person.prototype.say = function() {
//     console.log('abc')
// }
// var person1 = new Person
// console.log(Person.prototype.constructor === Person)
// function Person() {}
// console.log(Person.prototype);

// function Person() {}
// var person = new Person()
// // 实例对象的__proto__属性指向该构造函数的原型对象
// console.log(person.__proto__ === Person.prototype);

// 实例对象 构造函数 原型对象

// Function Object prototype __proto__
// 构造函数 Array String
// funtion Object
// function Function
// 实例对象上的__proto__指向原型对象
// .__proto__ Function.prototype
// String Array Number Function Object 都是function
// function Obj(props = {}) {
//     this.name = props.name
//     this.age = props.age
// }
// const obj2 = new Obj({
//     name: 'wuhuiluo'
// })
// console.log(obj2);
// console.log(obj2.constructor === Obj)
// console.log(obj2.__proto__ === Obj.prototype)
// 函数对象和普通对象
// Javascript中Object和Function就是函数对象
function fun1() {};
const func2 = function () {}
const func3 = new Function('name', 'console.log(name)')

const obj1 = {}
const obj2 = new Object()
const obj3 = new fun1()
const obj4 = new new Function()
// 这些都是函数对象
// console.log(typeof Object) // function
// console.log(typeof Function) // function
// console.log(typeof fun1) // function
// console.log(typeof func2) // function
// console.log(typeof func3) // function

// console.log(obj1)
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

// console.log(Function.__proto__ === Function.prototype)

// __proto__ constructor 都是对象独有的 prototype 是函数独有的
// function Person() {}
// var person1 = new Person()
// console.log(person1.__proto__.constructor === Person);
// number undefined symbol string function boolean object
// let s = new String('abc')
// console.log(typeof s);
// console.log(typeof null);
// console.log(typeof undefined);
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.sex = 'male'
// }

// Person.prototype.isHandSome = true

// Person.prototype.sayName = function () {
//     console.log(`hello, my name is ${this.name}`)
// }

// let boy = new Person('wuhuiluo', 25)

// console.log(boy.name);
// console.log(boy.sex);
// console.log(boy.isHandSome);

// boy.sayName()
Object.prototype.__proto__ === null