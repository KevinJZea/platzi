const helloWorld = () => {
  const hello = "HelloWorld";
  console.log(hello);
};

helloWorld();

/* JS can't reach hello because of Local Scope */

console.log(hello);

/* ----------------- */

var scope = "I am Global";

const functionScope = () => {
  var scope = "I am just a local";
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);
