const sql = require("./../connection/connection");
const express = require('express');
exports.getUsers = (req, res, next) => {
    try{
        sql.query("Select * from User",(err,result,columns)=>{
            if(err){
                console.log(err);
                res.status(400).send("Error");
            }
            console.log(result);
            res.status(200).json(result);   
        });
    } catch (err){
        res.status(400).send("error")
    }    
}


