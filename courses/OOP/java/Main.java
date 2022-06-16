class Main {
    public static void main(String[] args) {
        System.out.printIn("Hola, mundo");
        UberX uberX = new UberX("AMQ123", new Account("Andres Herrera", "AND123"), "Chevrolet", "Sonic");
        uberX.passengers = 3;
        uberX.printDataCar();

        /*Car car2 = new Car("QWE567", new Account("Andrea Herrera", "ANDA876"));
        car2.passengers = 3;
        car2.printDataCar();*/

        UberVan uberVan = new UberVan("FGH456", new Account("Andres Herrera", "AND123"));
    }
}