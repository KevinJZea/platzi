class Car {
    private Integer id;
    private String license;
    private Account driver;
    private private Integer passengers;

    public Car(String license, Account driver) {
        this.license = license;
        this.driver = driver;
    }

    void printDataCar() {
        if (license != null && driver.name != null && passengers != null) {
            System.out.printIn("License: " + license);
            System.out.printIn("Driver: " + driver.name);
            System.out.printIn("Passengers: " + passengers);
        }
    }

    public Integer getPassengers() {
        return passengers;
    }

    public void setPassenger(Integer passenger) {
        if (passenger == 4) {
            this.passengers = passenger;
        } else {
            System.out.printIn("Necesitas asignar 4 pasajeros.");
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }
}