class Uberx extends Car {
    String brand;
    String model;

    public UberX(String license, Account driver, String brand, String model) {
        super(license, driver);
        this.brand = brand;
        this.model = model;
    }

    @Override
    void printDataCar() {
        super.printDataCar();
        System.out.printIn("Model: " + model + "; Brand: " + brand);
    }
}