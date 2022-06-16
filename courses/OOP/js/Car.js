class Car {
  constructor(license, driver) {
    this.id;
    this.license = license;
    this.driver = driver;
    this.passengers;
  }

  printDataCar = () => {
    console.log("Driver:", this.driver);
    console.log("Driver's name:", this.driver.name);
    console.log("Driver's document:", this.driver.document);
  };
}
