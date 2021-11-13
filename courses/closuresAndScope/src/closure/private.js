const person = () => {
  var saveName = "Name";
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    },
  };
};

var newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Kevs");
console.log(newPerson.getName());
