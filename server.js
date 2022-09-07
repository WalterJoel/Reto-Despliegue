var mysql = require('mysql2');

//
const express = require('express'); 

const port ='8080';
const host ='0.0.0.0';
const app = express();

var con = mysql.createConnection({
  host: "localhost", //Aqui deben colocar la IP de su docker
  user: "root",
  password: "secret",
  database:"mydb",
  port: "33061"

});
//Ruta por defecto
app.get('/',(req,res)=>{    
    res.send('Hello Krowdy')
})

//Ruta por defecto
app.get('/registrar/:nombre',(req,res)=>{    
    let nombre = req.params.nombre;
    res.send('Hello World: ');
    console.log(nombre);
    var sql = `INSERT INTO nombre (nombre) VALUES ("${nombre}")`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 nombre nuevo insertado");
    });
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado a la BD!");
});

app.listen(port,host);