--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE Weather (
  ID   INTEGER PRIMARY KEY AUTOINCREMENT,
  COUNTRY TEXT    NOT NULL,
  CITY TEXT NOT NULL,
  LATITUDE REAL NOT NULL,
  LONGITUDE REAL NOT NULL
);

INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("India", "Mumbai", 19.0760, 72.8777);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("Russia", "Moscow", 55.7558, 37.6173);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("Japan", "Tokyo", 35.6762, 139.6503);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("Canada", "Toronto", 43.6532, 79.3832);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("USA", "New York", 40.7128, 74.0060);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("UK", "London", 51.5072, 0.1276);
INSERT INTO Weather (COUNTRY, CITY, LATITUDE, LONGITUDE) VALUES ("UAE", "Dubai", 23.4241, 53.8478);
--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
DROP TABLE Weather;