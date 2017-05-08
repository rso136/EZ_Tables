CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE `products` (
	`ItemID` INT NOT NULL AUTO_INCREMENT,
    `Item` VARCHAR(50) NOT NULL,
    `Department` VARCHAR(50) NOT NULL, 
    `Price` DECIMAL(10,2) NULL,
    `Quantity` INT NULL,
    PRIMARY KEY (`ItemID`)
);

CREATE TABLE `associates` (
	`ID` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Department` VARCHAR(50) NOT NULL, 
    `Position` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`ID`)
);

CREATE TABLE `online_accounts` (
	`UserID` INT NOT NULL AUTO_INCREMENT,
	`Email` VARCHAR(50) NOT NULL,
	`Username` VARCHAR(50) NOT NULL,
	`Customer` VARCHAR(50) NOT NULL,
	`Address` VARCHAR(300) NOT NULL,
	PRIMARY KEY (`UserID`)
);

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('nflmike81@qmail.com', 'nflmike81', 'Michael Capizzi', '124 Broad St. Hampton, PA 16801');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('asl21@qmail.com', 'socalprtee99', 'Alicia Lee', '1480 Meadow Rd, Los Santos, CA 90210');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('Ih8rtStuff@zerocast.com', 'ih8rtstuff', 'Vincent Weatherspoon', '41 Mountain Dr. Millbrook, CO 72971');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('dovah1987@qmail.com', 'drizzt87', 'Jonathan De La Rosa', '452 East Windsor Ave. High Abbey, NJ 14502');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('granmail123@zerocast.com', 'phyllis123', 'Phyllis Goldman', '11 Harbor Rd. White Sands, FL 78294');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('blkPink17@qmail.com', 'kpopper17', 'Janice Elliot', '189 Park Ave. Newton, NY 45321');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('stanford@wFinancial.com', 'stanford1', 'William Stanford', '7281 Finance Rd. Bldg.7 North Ridge, MD 78397');

INSERT INTO `online_accounts` (`Email`, `Username`, `Customer`, `Address`)
	VALUES ('bsm42@rutherford.edu', 'bsm42', 'Brittany McDowell', '11 Spruce Ln. Apt 4B, College Park, SC 58931');

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Acer ST-2458', 'Computers', '349.99', '10' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Asus E-350', 'Computers', '400', '15' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('IBM Probook', 'Computers', '675.85', '8' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Alienware X-800', 'Computers', '1225.55', '10' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Samsung Mini-Tab', 'Electronics', '275.99', '20' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Xbox One', 'Electronics', '350', '27' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Apple Pro Tablet 2', 'Electronics', '550', '14' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Pariah Game Box', 'Electronics', '825.75', '4' ); 

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Avalon BB Cream', 'Beauty', '25.99', '52' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Zyko Stylez Hairwax', 'Beauty', '35.55', '81' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Avalon Skin Care Set', 'Beauty', '50.25', '48' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Zyko Ultimate Shave', 'Beauty', '80.25', '10' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Squier Telecaster', 'Instruments', '199.99', '8' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Agile Les Paul', 'Instruments', '253.40', '16' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Fender Stratocaster', 'Instruments', '849.99', '15' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Gibson Les Paul', 'Instruments', '1200', '5' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Hamilton Beach Blender', 'Appliances', '39.75', '25' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('The Magic Bullet Blender', 'Appliances', '72.45', '15' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Keurig K475', 'Appliances', '150', '8' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Dyson Vacuum', 'Appliances', '399.78', '5' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Hariboro Peach Rings', 'Food', '2.45', '122' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Pepperidge Farm Milano Box', 'Food', '9.99', '98' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Bragg Extra Virgin Olive Oil', 'Food', '18.99', '53' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Keurig Variety Pack Pods', 'Food', '29.99', '45' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Centrum Multivitamn', 'Health', '9.99', '88' );

INSERT INTO `products` (`Item`, `Department`, `Price`, `Quantity`)
	VALUES ('Optimum Nutrition Whey Powder', 'Health', '29.99', '25' );

INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('John Babson', 'Administration', 'General Manager');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('James Cook', 'Computers', 'Supervisor');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Bob Rothman', 'Computers', 'IT Support');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Anna Liu', 'Computers', 'Customer Support');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Eddy Baker', 'Computers', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('William Cohen', 'Computers', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Matthew Lee', 'Computers', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Sarah Johnson', 'Electronics', 'Supervisor');

INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Phil Whitman', 'Electronics', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Janice Rodriguez', 'Electronics', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Stella Park', 'Beauty', 'Sales Specialist');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Jenna Goldstein', 'Beauty', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Marcus Torres', 'Beauty', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Matt Kingston', 'Instruments', 'Sales Specialist');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Aditya Patel', 'Instruments', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Vince Romano', 'Instruments', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Alice Zhang', 'Instruments', 'Resoration Specialist');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Mina Assad', 'Appliances', 'Supervisor');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Josh Muller', 'Appliances', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('John Carter', 'Appliances', 'Merchandising Specialist');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Jeffery Ortega', 'Food', 'Supervisor');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Julio Lopez', 'Food', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Ellen Smith', 'Food', 'Sales Associate');
    
INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Abby Fitzgerald', 'Health', 'Sales Specialist');

INSERT INTO `associates` (`Name`, `Department`, `Position`)
	VALUES ('Crystal Durand', 'Health', 'Sales Associate');







































