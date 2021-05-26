CREATE TABLE student (id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40));

INSERT INTO student (firstname, lastname, age, address, email) 
VALUES ('John', 'Smith', 21, '88 Colin P Kelly Jr St, San Francisco, CA 94107, United States','johnsmith@example.com');

