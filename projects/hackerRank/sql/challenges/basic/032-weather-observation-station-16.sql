/*

Query the smallest Northern Latitude (LAT_N) from STATION that is greater than 38.7880.
Round your answer to 4 decimal places.

*/

SELECT ROUND(MIN(LAT_N), 4)
FROM STATION
WHERE LAT_N > 38.7880;
