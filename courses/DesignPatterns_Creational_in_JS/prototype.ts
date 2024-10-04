type AvailableColors = "red" | "black" | "gray" | "blue";
type EditionsType = "cvt" | "signature" | "default";
type CarConstructorParams = {
  airBags: number;
  color: AvailableColors;
  edition: EditionsType;
  model: string;
};

abstract class Car {
  private _airBags: number;
  private _color: AvailableColors;
  private _edition: EditionsType;
  private _model: string;

  constructor({ airBags, color, edition, model }: CarConstructorParams) {
    this._airBags = airBags || 0;
    this._color = color || "default";
    this._edition = edition || "default";
    this._model = model || "";
  }

  set airBags(howMany: number) {
    this._airBags = howMany;
  }

  set color(color: AvailableColors) {
    this._color = color;
  }

  set edition(edition: EditionsType) {
    this._edition = edition;
  }

  set model(model: string) {
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

  abstract clone(): Car;
}

/* ---------- */

class MastodonCar extends Car {
  constructor(carToClone?: MastodonCar);
  constructor(carToClone: MastodonCar) {
    super({
      airBags: carToClone?.airBags,
      color: carToClone?.color,
      edition: carToClone?.edition,
      model: carToClone?.model,
    });
  }

  clone(): MastodonCar {
    return new MastodonCar(this);
  }
}

/* ---------- */

class Director {
  private productionLine: CarProductionLine;

  setProductionLine(productionLine: CarProductionLine) {
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

interface CarProductionLine {
  setAirBags(howMany: number): void;
  setColor(color: AvailableColors): void;
  setEdition(edition: string): void;
  resetProductionLine(newCar: Car): void;
}

type ConstructorParams = { factory: Factory };

class SedanProductionLine implements CarProductionLine {
  private sedanCar!: Car;
  private carFactory: Factory;

  constructor({ factory }: ConstructorParams) {
    this.carFactory = factory;
    this.resetProductionLine(this.carFactory.create());
  }

  resetProductionLine(car: Car) {
    this.sedanCar = car;
  }

  setAirBags(howMany: number): SedanProductionLine {
    this.sedanCar.airBags = howMany;
    return this;
  }
  setColor(color: AvailableColors): SedanProductionLine {
    this.sedanCar.color = color;
    return this;
  }
  setEdition(edition: EditionsType): SedanProductionLine {
    this.sedanCar.edition = edition;
    return this;
  }

  setModel(): SedanProductionLine {
    this.sedanCar.model = "sedan";
    return this;
  }

  build(): Car {
    this.setModel();
    const sedanCar = this.sedanCar;
    this.resetProductionLine(this.carFactory.create());
    return sedanCar;
  }
}

/* ---------- */

interface Factory {
  create(): Car;
}

class MastodonCarFactory implements Factory {
  create(): Car {
    return new MastodonCar();
  }
}

/* ---------- */

function appBuilder(director: Director) {
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
