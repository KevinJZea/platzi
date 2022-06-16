(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLowerCase}`);
    }
  }

  // Literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "XL";
})();
