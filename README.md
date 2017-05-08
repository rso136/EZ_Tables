# EZ_Tables

Description: EZ Tables is a MySQL database administration application I programmed recently in order to run SQL queries and review and edit tables quickly and efficiently. Built around the MySQL node package, EZ Tables combines an Express.js framework with Jquery front end scripting in order to create an easy to use database management web application. Furthermore, EZ Tables has a Bootstrap mobile responsive interface which means database administration may be done on the go through your phone or tablet.

In order to utilize EZ Tables for your own MySQL database, one needs only to modify a few parameters in the source code. Edit the server.js file to take in the necessary database connection info:


var pool = mysql.createPool({

     connectionLimit: 100,

     host: 'Your host',

     user: 'Your username',

     password: 'Your password',

     database: 'Name of your database'

});


Next, edit the following line in the script.js file as follows:


     data[i].Tables_in_'Insert the name of your database here'


That's it. You can now use EZ Tables for your own MySQL database administration needs!

 
The primary technologies utilized in this application are as follows:

- Node & Express
- MySQL 
- Jquery
- User Interface: Bootstrap v3.3.7  