const express = require("express")
const User = require("../Models/User")
const {Sequelize} = require("sequelize")
const details = require("../info.json")
const sequelize = new Sequelize(
    details.database,
    details.HostName,
    details.PassWord,
    {
        dialect:details.dialect,
        host:details.HostIP
    }
)
exports.ShowAll = function(req,res){    
    try{
        sequelize.authenticate()
        sequelize.query("select * from User;").then(([resultat,metadata])=>{
            res.status(200).json(resultat)
        })
    }
    catch{
        console.error("No connexion")
        res.status(500).json({"status":"Connexion Error"})
    }
}
exports.ShowUser = function(req,res){
    const id = parseInt(req.params.id)    
    try{
        sequelize.authenticate()
        sequelize.query("select * from User where idUser = "+id+";").then(([resultat,metadata])=>{
            res.status(200).json(resultat)
        })
    }
    catch{
        console.error("No connexion")
        res.status(500).json({"status":"Connexion Error"})
    }
}
exports.AddUser = function(req,res){
    const id = parseInt(req.params.id)  
    try{
        sequelize.authenticate()
        sequelize.query("insert into User(UserName,PassWord) values('"+ req.body.UserName+"','"+req.body.PassWord+"');").then(([result,metadata])=>{
            
        })
        res.status(200).json({
            "UserName":req.body.UserName,
            "status":"Added"
        })
    }
    catch(error){
        console.log(error)
        res.send("error")
    }
}
exports.UpdateUser = function(req,res){    
    const id = req.params.id
    try{
        sequelize.authenticate()
        sequelize.query("Update User set UserName ='"+req.body.UserName+"',PassWord='"+req.body.PassWord+"' where idUser="+id+";").then(([resultat,metadata])=>{
            res.status(200).json({
                "UserName":req.body.UserName,
                "status":"Updated"
            })
        })
    }
    catch{
        console.error("No connexion")
        res.status(500).json({"status":"Connexion Error"})
    }
}
exports.DeleteUser = function(req,res){
    try{
        sequelize.authenticate()
        sequelize.query("delete from User where idUser = "+req.params.id+";").then(([results,metadata])=>{
            res.status(200).json({"status":"Succes"})
        })
        
    }catch(error){
        console.error(error)
        res.send("error")
    }
}/*
exports.updateUser = function(req,res){
    try{
        sequelize.authenticate()
        sequelize.query("delete from User where idUser = "+req.params.id+";")
    }catch(error){
        console.error(error)
    }
}*/
