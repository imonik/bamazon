var mysql = require('mysql');
const readline = require('readline');

var productId;
var quantity;
var data;

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
  if (err) throw err;
  con.query(sql, function (err, result) {
    if (err) throw err;
    var data = result;
    for(var i = 0; i< result.length; i++){
      let id = result[i].id < 10? result[i].id + " " : result[i].id;
      let name = addSpaces(result[i].product_name, 40);
      let department = addSpaces(result[i].department_name, 13);
      let price = result[i].Price;
      let stock = addSpaces(result[i].Stock_quantity, 3);
      console.log(`|${id}| ${name}| ${department}|${stock}|${price}|`);
      console.log("-----------------------------------------------------------------------");
    }
    questions(data);
  });
});

function addSpaces(word, max){
  let rest = max - word.toString().length;
  for(var i = 0; i< rest; i++){
    word += " "
  }
  return word;
}

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
                console.log(quantity,result[i].Stock_quantity );
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



function findInResult(result, id, quantity){
  for (let i = 0; i < result.length; i++) {
    let enough = result[i].Stock_quantity - quantity;
    console.log(enough);
    if(result[i].id === id) {
        console.log("here");
    }
  }
}

