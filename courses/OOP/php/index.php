<?php

require_once("Account.php");
require_once("Car.php");
require_once("UberX.php");
require_once("UberPool.php");
require_once("UberVan.php");


// $car = new Car("AW456", new Account("Andres Herrera", "AMS123"));
// $car->printDataCar();

$uberx = new UberX("CVB123", new Account("Andres Herrera", "AMS123", "and@gmail.com", "******"), "Chevrolet", "Spark");
$uberx->printDataCar();

$uberPool = new UberPool("TYU567", new Account("Andrea Ferran", "ANDA765", "and@gmail.com", "******"), "Dodge", "Attitude");
$uberPool->printDataCar();

$uberVan = new UberVan("TYU567", new Account("Andrea Ferran", "ANDA765", "and@gmail.com", "******"), "Dodge", "Attitude");
$uberVan->setPassenger(6);
$uberVan->printDataCar();

?>