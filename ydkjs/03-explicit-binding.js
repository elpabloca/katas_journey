// call and apply are methods available on functions that let you explicitly set the value of this when invoking a function.

function greet(greeting, punctuation) {
    console.log(greeting + ' ' + this.name + punctuation)
}

const person = {
    name: 'Juan'
}

const person2 = {
    name: 'Sofia'
}

// call
// Arguments are passed individually (comma-separated)
// functionName.call(thisArg, arg1, arg2, arg3);

greet.call(person, 'Hello', '!')
greet.call(person2, 'Hello', '!')

// apply
// Arguments are passed as an array.
// functionName.apply(thisArg, [arg1, arg2, arg3]);

greet.apply(person, ['Hello', '!'])
greet.apply(person2, ['Hello', '!'])
// Today, apply is less common because the spread operator (...) usually replaces it.

const greetJuan = greet.bind(person);

greetJuan('Jellow', '>');
greetJuan('Hola', '<');

// bind(..) returns a new function that is hardcoded to call the original
// function with the this context set as you specified.
// function foo(something) {
//     console.log( this.a, something );
//     return this.a + something;
// }
// var obj = {
//     a: 2
// };

// var bar = foo.bind( obj );
// var b = bar( 3 ); // 2 3
// console.log( b ); // 5

// function foo(el) {
// console.log( el, this.id );
// }
// var obj = {
// id: "awesome"
// };
// // use `obj` as `this` for `foo(..)` calls
// [1, 2, 3].forEach( foo, obj );

// function foo2(a) {
// this.a = a;
// }
// var bar = new foo2( 2 );
// console.log( bar.a );

function foo() {
  console.log(this.a);
}

const obj1 = { a: 2 };
const obj2 = { a: 3 };

const bar = foo.bind(obj1);

bar.call(obj2);

const obj = {
  a: 2,
  foo: function() {
    setTimeout(function() {
      console.log(this.a, 'sin arrow');
    }, 100);
  }
};

obj.foo();

const obj3 = {
  a: 2,
  foo: function() {
    setTimeout(() => {
      console.log(this.a, 'with arrow');
    }, 100);
  }
};

obj3.foo();
