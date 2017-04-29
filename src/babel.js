// let a = x => x+2 ;
// console.log(a(3))
//
// var s = (name,age) => ({name:name,age:age})
//
// console.log(s("ybl",22))
//
// var j = () => {
//   console.log(s);
//   alert('aaa');
//   return 1
// }
// console.log(j());
//
//
// let age = 12;
// let name = 'ybl';
// console.log(`姓名是${name}的年龄是${age}岁`);
//
// function restFunc(x, ...rest){
//   console.log(x);
//   console.log(rest);
// }
// restFunc(1);
// restFunc(1,2,3,4,)
//
// function add(...x){
//   return x.reduce((m,n)=>m+n);
// }
// console.log(add(1,2,3,4,5,6,))

// let arr = [2,4,6];

// let ybl = arr.map( function (currentValue, idnex,array) {
//   return currentValue+10
// } )
// console.log(ybl)
//
// arr.forEach( function (currentValue, idnex,array) {
//   console.log(currentValue, idnex,array)
// } )
// console.log(arr)
// arr.forEach( it => console.log(it+10))

// let arr = [2,4,7,8];
//
// var results = arr.filter(function (item, index, array){
//   console.log(item, index, array);
//   return item > 6;
// });
// console.log(results);

// var results arr.filter( item => item > 8 )
// console.log(results);

// let arr1 = [1,2,3];
// let arr2 = [5,6,7];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

//继承 构造函数
// function Point(x,y) {
//   this.x = x;
//   this.y = y;
// }
//
// Point.prototype.toString = function (){
//   return `(${this.x},${this.y})`;
// };

// function Hello(){
//   this.toString = function(){
//     return 'hello say';
//   }
// }
//
// Hello.prototype = new Point(8,5);
//
// var p = new Point(1,2);
//
// console.log(p.x);
// console.log(p.y);
// console.log(p.toString());


//es6类
class Point {
  constructor(x,y) {
// 类的属性必须写在 constructor 方法内 这是一条有意义的名字
    console.log('我是自动执行的')
    this.x = x;
    this.y = y;
  }
  //方法和方法之间只能用回车链接，不可以有逗号之类的字符，
  //想要添加什么属性只能写在方法中  不可以直接写到这里。
   toString(){
     return "point toString"
   }
}

// var p = new Point(3,5);
// console.log(p.x,p.y);
// console.log(p.toString());

//类的继承
class Hello extends Point {
  constructor(a,b){
    //因为Hello是继承自上面的类.如果我想给自己添加属性的话，
    //就必须加 super()  而且必须要写在最上面，不然还是会出错。
    super();
    this.a = a;
    this.b = b;
  }
  say(){
    return 'hello say'
  }
}
var p = new Hello();
console.log(p.toString());


//运用继承类 来实现一个js添加html
class Father {
  render(){
    throw new Error('子类必须实现')//报错提醒子类需要有这个方法
  }
  _render(){
    return(`
      <ul>
        ${this.render()}
      </ul>
      `)
  }
}

class Son extends Father {
  render(){
    return(`
      <li>123445</li>
      `)
  }
}
document.getElementById('app').innerHTML =new Son()._render();
