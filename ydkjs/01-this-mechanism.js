// this mechanism

// function foo(num){
//     this.count++

//     console.log(this.count)
// }

// var cat = {
//     count: 5
// }
// foo.count = 0

// for(item = 0; item<10;item++){
//     foo.call( foo, item)
//     foo.call( cat, item)
// }

// console.log(foo)
//-----------------------
// how the this mechanism really works
// this is neither a reference to the function itself, nor is it a reference to the function’s lexical scope.

// this is a binding made for each function invocation, based entirely on its call-site (how the function is called).

// function baz() {
//     // call-stack is: `baz`
//     // so, our call-site is in the global scope
//     console.log( "baz" );
//     bar(); // <-- call-site for `bar`
// }

// function bar() {
//     // call-stack is: `baz` -> `bar`
//     // so, our call-site is in `baz`
//     console.log( "bar" );
//     foo(); // <-- call-site for `foo`
// }

// function foo() {
//     // call-stack is: `baz` -> `bar` -> `foo`
//     // so, our call-site is in `bar`
//     console.log( "foo" );
// }

// baz(); // <-- call-site for `baz`

// ---------------------------------

function foo(){
    console.log(this.a)
}

var obj = {
    a: 2,
    foo: foo
}

obj.foo()
