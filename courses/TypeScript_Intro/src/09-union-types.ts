(() => {
  let myUserId: string | number;
  myUserId = 1212;
  myUserId = "asasas";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLowerCase}`);
    } else {
      myText.toFixed();
    }
  }
  greeting("asa");
  greeting(1212);

  let anotherVar: boolean | string = false;
  greeting(anotherVar);
  anotherVar = "false";
  greeting(anotherVar);
})();
