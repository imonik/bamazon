var mysql = require('mysql');
var Table = require('cli-table');
const readline = require('readline');

var productId;
var quantity;
var data;



var table = new Table({
  head: ['ID','NAME','DEPARTMENT','PRICE','STOCK']//,
  //colWidths: [5,50,50,20,20]
});

function askUser(question) {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  rl.question(question, (answer) => { 
      return answer;
      rl.close();
    });
}


var con = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "password",
  database: "bamazon"
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var sql = 'Select * From Products;';
con.connect(function(err) {
  console.log("[mysql error]",err);
  con.query(sql, function (err, result) {
    if (err) throw err;
    var data = result;
    for(var i = 0; i < result.length; i++){
      table.push([result[i].id, result[i].product_name, result[i].department_name, result[i].Stock_quantity, result[i].Price]); 
    }
    console.log(table.toString());
    questions(data);
  });
});

function questions(result){
  rl.question('Please enter the id of the desired product: ', (answer1) => {
    rl.question('Please enter quantity: ', (answer2) => {
        productId = answer1;
        quantity = answer2;
        for (let i = 0; i < result.length; i++) {
          if(result[i].id == productId  ) {
            if(result[i].Stock_quantity  < quantity) {
              console.log("There are not enough in stock to fulfill this order");
            } else {
              console.log(`Order Number: ${1001} Product: ${result[i].product_name} Units: ${quantity} Unit price:${result[i].Price} Total: $${quantity 
                *result[i].Price }`);
                let enough = result[i].Stock_quantity - quantity;
                sql = `UPDATE products SET Stock_quantity = ${enough} WHERE id = ${productId}`;
                con.query(sql, function (err, result) {
                  if (err) throw err;
                });
                return;
            }
          }
        }
        rl.close();
    });
  });
}
