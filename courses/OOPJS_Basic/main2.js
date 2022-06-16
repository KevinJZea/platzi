/* const juan1 = {
  name: "JuanDC",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined,
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ],
    },
  ],
};

const miguelito1 = {
  name: "Miguelito",
  username: "miguelitofeliz",
  points: 100,
  socialMedia: {
    twitter: "miguelitofeliz",
    instagram: "miguelito_feliz",
    facebook: undefined,
  },
  approvedCourses: ["Curso DataBusiness", "Curso DataViz"],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso DataBusiness",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design",
      ],
    },
    {
      name: "Escuela de Data Science",
      courses: ["Curso DataBusiness", "Curso DataViz", "Curso de Tableau"],
    },
  ],
}; */

class Comment {
  constructor({ content, studentName, studentRole = "estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(`${this.likes} Likes`);
    console.log(`${this.content}`);
  }
}

// ----- || -----

function videoPlay(id) {
  const urlSecreta = `https://platziultrasecretomasquelanasa.com/${id}`;
  console.log(`Se está reproduciendo desde la URL ${urlSecreta}.`);
}

function videoPause(id) {
  const urlSecreta = `https://platziultrasecretomasquelanasa.com/${id}`;
  console.log(`Pausamos la URL ${urlSecreta}.`);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoPause(this.videoID);
  }
}

class Course {
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const cursoProgramacionBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
  name: "Curso Práctico de HTML y CSS",
  lang: "english",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaDesarrolloWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgramacionBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaDataScience = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgramacionBasica,
    "Curso de Análisis de Negocios para Ciencias de Datos",
    "Curso de Principios de Visualización de Datos para BI",
  ],
});

const escuelaVideojuegos = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [
    cursoProgramacionBasica,
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Unreal Engine",
    "Curso de Unity 3D",
  ],
});

// ----- STUDENT -----

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };

    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo siento, ${this.name}. Sólo puedes tomar cursos abiertos.`
      );
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo siento, ${this.name}. No puedes tomar cursos en inglés.`
      );
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});

const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaDesarrolloWeb, escuelaVideojuegos],
});

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  twitter: "migelito_feliz",
  learningPaths: [escuelaDataScience, escuelaDesarrolloWeb],
});
