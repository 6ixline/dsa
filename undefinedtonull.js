function undefinedToNull(arg) {
  // your code here
  arg = JSON.stringify(arg);
  arg = JSON.parse(arg);
  return arg;
}

console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// {a: null, b: 'BFE.dev'}

console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
// {a: null, b: 'BFE.dev'}
