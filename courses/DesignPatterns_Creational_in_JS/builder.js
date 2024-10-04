class CarProductionLine {
  setAirBags(airBagsNumber) {
    throw new Error("Method Not Implemented");
  }
  setColor(color) {
    throw new Error("Method Not Implemented");
  }
  setEdition(edition) {
    throw new Error("Method Not Implemented");
  }
  resetProductionLine() {
    throw new Error("Method Not Implemented");
  }
}

/* ----- */

class SedanProductionLine extends CarProductionLine {
  constructor({ model }) {
    super();
    this.setInternalModel(model);
    this.resetProductionLine();
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

  setInternalModel(model) {
    this.internalModel = model;
  }

  setModel() {
    this.sedanCar.model = "sedan";
  }

  resetProductionLine() {
    this.sedanCar =
      this.internalModel === "mastodon" ? new MastodonCar() : new RhinoCar();
  }

  build() {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

/* ----- */

class Car {
  constructor() {
    this._edition = "";
    this._model = "";
    this._airBags = 2;
    this._color = "black";
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
}

class MastodonCar extends Car {
  constructor() {
    super();
  }
}

class RhinoCar extends Car {
  constructor() {
    super();
  }
}

/* ----- */

class Director {
  setProductionLine(productionLine) {
    this.productionLine = productionLine;
  }

  constructCVTEdition() {
    this.productionLine.setAirBags(4).setColor("blue").setEdition("CVT");
  }

  constructSignatureEdition() {
    this.productionLine.setAirBags(8).setColor("red").setEdition("Signature");
  }
}

function appBuilder(director) {
  const mastodonSedanProductionLine = new SedanProductionLine({
    model: "mastodon",
  });

  director.setProductionLine(mastodonSedanProductionLine);
  director.constructCVTEdition();

  const mastodonSedanCVT = mastodonSedanProductionLine.build();

  console.log(mastodonSedanCVT);

  director.constructSignatureEdition();
  const mastodonSedanSignature = mastodonSedanProductionLine.build();
  console.log(mastodonSedanSignature);
}

appBuilder(new Director());
