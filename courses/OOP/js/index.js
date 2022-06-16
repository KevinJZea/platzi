var car = new Car("AW456", new Account("Andres Herrera", "AND123"));
car.passengers = 4;
car.printDataCar();

var uberx = new UberX(
  "AW456",
  new Account("Andrea Ferran", "ANDA765"),
  "Chevrolet",
  "Spark"
);
uberx.passengers = 4;
uberx.printDataCar();

var user = new User("Alfredo", "ADO123", "alf@me.com", "*****");
user.printDataAccount();
