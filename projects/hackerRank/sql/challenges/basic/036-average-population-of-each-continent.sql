/*

Given the CITY and COUNTRY tables,
query the names of all the continents (COUNTRY.Continent) and their respective
average city populations (CITY.Population) rounded down to the nearest integer.

Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

*/

SELECT C2.CONTINENT, TRUNCATE(AVG(C1.POPULATION), 0)
FROM CITY C1
INNER JOIN COUNTRY C2
    ON C1.COUNTRYCODE = C2.CODE
GROUP BY C2.CONTINENT;

