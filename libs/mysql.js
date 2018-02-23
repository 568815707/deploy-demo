/**
 * mysql connector
 */
'use strict'

 const mysql = require('mysql')
 const pool = mysql.createPool({
   host     :  '39.106.194.105',
   user     :  'root',
   password :  'kuaile1118',
   database :  'myself'
 })

 let query = function( sql, values ) {
   return new Promise(( resolve, reject ) => {
     pool.getConnection(function(err, connection) {
       if (err) {
         reject( err )
       } else {
         connection.query(sql, values, ( err, rows) => {

           if ( err ) {
             reject( err )
           } else {
             resolve( rows )
           }
           connection.release()
         })
       }
     })
   })
 }

 module.exports = { query }
