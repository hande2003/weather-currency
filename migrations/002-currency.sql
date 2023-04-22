--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE Currency (
  ID   INTEGER PRIMARY KEY AUTOINCREMENT,
  CURRENCY_NAME STRING UNIQUE NOT NULL,
  CODE STRING UNIQUE NOT NULL
);

INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("Canadian - Dollar", "CAD");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("Indian - Rupee", "INR");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("Japan - Yen", "JPY");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("Russia - Rouble", "RUB");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("United Arab Emirates - Dirham", "AED");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("United Kingdom - Pounds", "GBP");
INSERT INTO Currency (CURRENCY_NAME, CODE) VALUES ("Unites States - Dollar", "USD");
--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
DROP TABLE Currency;