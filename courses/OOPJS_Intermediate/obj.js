const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  f: [1, 2, "juejuejue"],
  editA() {
    this.a = "AAAAA";
  },
};

function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function typeOfElement(element) {
  switch (Object.prototype.toString.call(element)) {
    case "[object Object]":
      return "object";
    case "[object Array]":
      return "array";
    default:
      return "Does not matter";
  }
}

class SuperObject {
  static isObject(subject) {
    return typeof subject === "object";
  }

  static deepCopy(element) {
    let elementType = typeOfElement(element);
    if (elementType !== "array" && elementType !== "object") return element;

    let copy;
    if (elementType === "array") copy = [];
    if (elementType === "object") copy = {};

    for (let item in element) {
      copy[item] = deepCopy(element[item]);
    }

    return copy;
  }
}

function SuperObjeto() {}

SuperObjeto.deepCopy = function (element) {
  let elementType = typeOfElement(element);
  if (elementType !== "array" && elementType !== "object") return element;

  let copy;
  if (elementType === "array") copy = [];
  if (elementType === "object") copy = {};

  for (let item in element) {
    copy[item] = deepCopy(element[item]);
  }

  return copy;
};
SuperObjeto.isObject = function (subject) {
  return typeof subject === "object";
};

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (let key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// ----- ABSTRACCIÓN SIN PROTOTIPOS -----

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
Object.defineProperty(juan, name, {
  value: "Juanito",
  configurable: false,
});

// Factory Pattern & RORO

function requiredParam(param) {
  throw new Error(`${param} es obligatorio.`);
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  /* const private = { _name: name, _courses: courses };

  const public = {
    get name() {
      return private._name;
    },
    set name(newName) {
      newName.length > 0
        ? (private._name = newName)
        : console.warn("Tu nombre debe tener al menos un carácter.");
    },
    get courses() {
      return private._courses;
    },
  };

  return public; */
}

function Student({
  name = requiredParam(name),
  email = requiredParam(email),
  age,
  twitter,
  facebook,
  instagram,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.socialMedia = { twitter, facebook, instagram };
  this.approvedCourses = approvedCourses;
  this._learningPaths = [];

  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private._learningPaths.push(newLP);
        return;
      }
      console.warn(
        "Alguno de los LPs no es una instancia del prototipo Learning Path."
      );
    },
  });

  if (isArray(learningPaths)) {
    this._learningPaths = [];

    for (let learningPath of learningPaths) {
      this.learningPaths = learningPath;
    }
  }

  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };
  // const public = {
  //   email,
  //   age,
  //   approvedCourses,
  //   learningPaths,
  //   socialMedia: { twitter, facebook, instagram },
  //   get name() {
  //     return private._name;
  //   },
  //   set name(newName) {
  //     newName.length > 0
  //       ? (private._name = newName)
  //       : console.warn("Tu nombre debe tener al menos un carácter.");
  //   },
  //   get learningPaths() {
  //     return private._learningPaths;
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name)
  //       return console.warn("Tu Learning Path no tiene la propiedad name");

  //     if (!newLP.courses)
  //       return console.warn("Tu Learning Path no tiene la propiedad courses.");

  //     if (!isArray(newLP.courses))
  //       return console.warn("Tu Learning Path no es una lista (de cursos).");

  //     private._learningPaths.push(newLP);
  //   },
  //   /* changeName(newName) {
  //     private._name = newName;
  //   },
  //   readName() {
  //     return private._name;
  //   }, */
  // };

  /* Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });

  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  }); */

  // return public;
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [],
});

const juanito = new Student({
  name: "Juanito",
  age: 18,
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    { name: "Escuela Impostora", courses: [] },
  ],
});

// -

// Stuff

/* const obj2 = {};
for (let property in obj1) obj2[property] = obj1[property];

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create(obj1); // Crea una instancia de obj1
const obj5 = { ...obj1 };

// JSON.stringify

const stringifiedObj = JSON.stringify(obj1);
const obj6 = JSON.parse(stringifiedObj);

// Recursivity

const numeritos = [0, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7];

function recursvia(numbersArray = []) {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    numbersArray.shift();
    return recursvia(numbersArray);
  } else {
    return numbersArray;
  }
} */

/* let numerito = 0;
for (let i = 0; i < numeritos; i++) {
  numerito = numeritos[i];
  console.log({ i, numerito });
}
 */
