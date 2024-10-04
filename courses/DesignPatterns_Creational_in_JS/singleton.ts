class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance();
  const singleton2 = Singleton.getInstance();

  console.log(singleton1 === singleton2);
}

appSingleton();
