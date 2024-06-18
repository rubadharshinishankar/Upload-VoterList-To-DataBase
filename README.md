# Upload-VoterList-To-DataBase

This project is a Node.js script designed to read voter information from an Excel file and insert it into a MySQL database. The script can be useful for automating the process of populating a voter list database with data from an Excel sheet, ensuring accuracy and efficiency.

Features:
1.Excel File Reading: Utilizes the xlsx package to read data from an Excel file (VoterList1.xlsx).
2.Data Extraction: Converts each sheet in the Excel file into a JSON object for easy manipulation.
3.MySQL Database Connection: Establishes a connection to a MySQL database using the mysql package.
4.Data Insertion: Iterates through the extracted data and inserts each row into the VoterList table in the specified database.

Technologies Used:
1.Node.js: The runtime environment for executing the JavaScript code.
2.xlsx: A library for parsing Excel files.
3.mysql: A library for interacting with MySQL databases.

How to Use:

1.Prerequisites:
*Ensure Node.js is installed on your system.
*Ensure MySQL is installed and running on your system.
*Create a database named bjp and a table named VoterList with appropriate columns.

2.Setup:
*Clone the repository.
*Run npm install to install the required dependencies.
*Place your Excel file (VoterList1.xlsx) in the root directory of the project.

3.Running the Script:
*Execute the script using the command: node insertsql.js

4.Configuration
*Modify the database connection details (host, port, user, password, database) in the script as needed.

***5.Note
Ensure the column names in the Excel file match the ones used in the script for seamless data insertion.
