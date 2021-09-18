# Use Node app MongoDB

Please provide the password as an argument: node mongo.js <password>

## Example to use to add Person 
node mongo.js <password> <name | "Fistname familyName"> <number>

node mongo.js yourpassword Anna 040-1234556
node mongo.js yourpassword "Arto Vihavainen" 045-1232456

## Example to display all of the entries in the phonebook:
node mongo.js yourpassword
phonebook:
Anna 040-1234556
Arto Vihavainen 045-1232456
Ada Lovelace 040-1231236