var mysql = require('mysql');

// koneksi database

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'panahan'
});
conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Terkoneksi');
});
module.exports = conn;