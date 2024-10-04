class Car {
  constructor({ airBags, color, edition, model } = {}) {
    this._airBags = airBags || 0;
    this._color = color || "default";
    this._edition = edition || "default";
    this._model = model || "";
  }

  set airBags(howMany) {
    this._airBags = howMany;
  }

  set color(color) {
    this._color = color;
  }

  set edition(edition) {
    this._edition = edition;
  }

  set model(model) {
    this._model = model;
  }

  get airBags() {
    return this._airBags;
  }

  get color() {
    return this._color;
  }

  get edition() {
    return this._edition;
  }

  get model() {
    return this._model;
  }

  clone() {
    throw new Error("Method Not Implemented");
  }
}

/* ---------- */

class MastodonCar extends Car {
  constructor(carToClone) {
    super({
      airBags: carToClone?.airBags,
      color: carToClone?.color,
      edition: carToClone?.edition,
      model: carToClone?.model,
    });
  }

  clone() {
    return new MastodonCar(this);
  }
}

/* ---------- */

class Director {
  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }

  constructCVTEdition() {
    this.productionLine.setAirBags(4);
    this.productionLine.setColor("red");
    this.productionLine.setEdition("CVT");
  }

  constructSignatureEdition() {
    this.productionLine.setAirBags(8);
    this.productionLine.setColor("gray");
    this.productionLine.setEdition("Signature");
  }
}

/* ---------- */

class CarProductionLine {
  setAirBags(howMany) {
    throw new Error("Method Not Implemented");
  }
  setColor(color) {
    throw new Error("Method Not Implemented");
  }
  setEdition(edition) {
    throw new Error("Method Not Implemented");
  }
  resetProductionLine(newCar) {
    throw new Error("Method Not Implemented");
  }
}

class SedanProductionLine extends CarProductionLine {
  constructor({ factory }) {
    super();
    this.carFactory = factory;
    this.resetProductionLine(this.carFactory.create());
  }

  setAirBags(howMany) {
    this.sedanCar.airBags = howMany;
    return this;
  }
  setColor(color) {
    this.sedanCar.color = color;
    return this;
  }
  setEdition(edition) {
    this.sedanCar.edition = edition;
    return this;
  }

  setModel() {
    this.sedanCar.model = "sedan";
    return this;
  }

  resetProductionLine(car) {
    this.sedanCar = car;
  }

  build() {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine(this.carFactory.create());
    return sedanCar;
  }
}

/* ---------- */

class Factory {
  create() {
    throw new Error("Method Not Implemented");
  }
}

class MastodonCarFactory extends Factory {
  create() {
    return new MastodonCar();
  }
}

/* ---------- */

function appBuilder(director) {
  const mastodonSedanProductionLine = new SedanProductionLine({
    factory: new MastodonCarFactory(),
  });

  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCVTEdition();

  const mastodonSedanCVT = mastodonSedanProductionLine.build();
  console.log(mastodonSedanCVT);

  const mastodonSedanCVTClone = mastodonSedanCVT.clone();
  console.log(mastodonSedanCVTClone);

  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log(mastodonSedanSignature);

  const mastodonSedanSignatureClone = mastodonSedanSignature.clone();
  console.log(mastodonSedanSignatureClone);
}

appBuilder(new Director());
