interface CarProductionLine {
  setAirBags(howMany: number): CarProductionLine;
  setColor(color: AvailableColors): CarProductionLine;
  setEdition(edition: string): CarProductionLine;
  resetProductionLine(): void;
}

/* ----- */
type CarCatalog = "mastodon" | "rhino";
type ConstructorParams = { model: CarCatalog };
class SedanProductionLine implements CarProductionLine {
  private sedanCar!: Car;
  private internalModel!: CarCatalog;

  constructor({ model }: ConstructorParams) {
    this.setInternalModel(model);
    this.resetProductionLine();
  }

  setAirBags(howMany: number): SedanProductionLine {
    this.sedanCar.airBags = howMany;
    return this;
  }
  setColor(color: AvailableColors): SedanProductionLine {
    this.sedanCar.color = color;
    return this;
  }
  setEdition(edition: string): SedanProductionLine {
    this.sedanCar.edition = edition;
    return this;
  }

  setInternalModel(model: CarCatalog) {
    this.internalModel = model;
  }

  setModel() {
    this.sedanCar.model = "sedan";
  }

  resetProductionLine() {
    this.sedanCar =
      this.internalModel === "mastodon" ? new MastodonCar() : new RhinoCar();
  }

  build(): Car {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine();
    return sedanCar;
  }
}

/* ----- */
type AvailableColors = "red" | "black" | "gray" | "blue";
class Car {
  private _edition!: string;
  private _model!: string;
  private _airBags: number = 2;
  private _color: AvailableColors = "black";
  constructor() {
    this._edition = "";
    this._model = "";
    this._airBags = 2;
    this._color = "black";
  }

  set airBags(howMany: number) {
    this._airBags = howMany;
  }

  set color(color: AvailableColors) {
    this._color = color;
  }

  set edition(edition: string) {
    this._edition = edition;
  }

  set model(model: string) {
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
  private productionLine: CarProductionLine;

  setProductionLine(productionLine: CarProductionLine) {
    this.productionLine = productionLine;
  }

  constructCVTEdition(): void {
    this.productionLine.setAirBags(4).setColor("blue").setEdition("CVT");
  }

  constructSignatureEdition(): void {
    this.productionLine.setAirBags(8).setColor("red").setEdition("Signature");
  }
}

function appBuilder(director: Director) {
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
