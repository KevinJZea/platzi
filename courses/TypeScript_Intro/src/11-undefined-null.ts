(() => {
  let myNumber: number;
  let myStirng: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  function hi(name: string | null) {
    let hello = `Hello, ${name ?? "nobody"}`;
  }
  hi("Kevo");

  function hiV2(name: string | null) {
    let hello = "Hello ";
    hello += name?.toLowerCase();
  }
})();
