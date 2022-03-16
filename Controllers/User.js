const express = require("express")
const User = require("../Models/User")

exports.ShowAll = function(req,res){    
    User.findAll({ attributes : ["name","password"]})
        .then(data=>{
            res.json(data)
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        }
    )
}
exports.ShowUserbyID = function(req,res){
    const id = parseInt(req.params.id)    
    User.findOne({attributes : ["name","password"], where:{id:id}})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        }
    )
}
exports.AddUser = function(req,res){
    let user = User.build({ name: req.body.name, password: req.body.password })
    user.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({ message: err.message })
        }
    )
}
exports.UpdateUser = function(req,res){    
    const id = req.params.id
    User.update(
        {name:req.body.name,password:req.body.password},
        {where:{id:id}}
        )
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({ message: err.message })
        }
    )
}
exports.DeleteUser = function(req,res){
    const id = parseInt(req.params.id)
    User.delete(
        {where:{id:id}}
        )
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        }
    )
}
exports.ShowUserbyUserName = function(req,res){
    const name = req.params.name    
    User.findOne({attributes : ["name","password"], where:{name:name}})
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({message:err.message})
        }
    )
}