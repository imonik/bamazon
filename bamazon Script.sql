Create database bamazon;
Use bamazon;

CREATE TABLE Products(
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255), 
    department_name VARCHAR(255),
    Price DECIMAL(5,2),
    Stock_quantity INT,
    PRIMARY KEY (id)
);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Affresh W10282479 Dishwasher Cleaner', 'Home', 4.59, 22);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Baebody Eye Gel', 'Beauty', 13.41, 8);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Hiking Backpack Daypack', 'Sports', 16.16, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Mellanni Bed Sheet Set', 'Home', 27, 12);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Hot Glue Gun', 'Arts & Crafts', 6.69, 32);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Samsung Galaxy S9 Plus Holster Case Flip', 'Cell Phones', 7.99, 5);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Elephant Ring Holder for Jewelry', 'Home', 8.00, 22);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Plastic Pen Holder Office', 'Home', 2.82, 18);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Make up Sponge Set', 'Beauty', 8.99, 3);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Utensil and Kitchen Tool Holder ', 'Kitchen', 14.99, 2);



