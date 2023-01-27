const express = require('express');
const characters = express.Router();
const Character = require('../models/characters')

// CREATE Character
characters.post('/', (req, res)=>{
    Character.create(req.body, (err, createCharacter)=>{
        res.json(createCharacter)
    })
})

// GET Character
characters.get('/', (req, res)=>{
    Character.find({}, (err, getCharacter)=>{
        res.json(getCharacter)
    })
})

// SHOW Character
characters.get('/:id', (req, res)=>{
    Character.findById(req.params.id, (err, getCharacter)=>{
        res.json(getCharacter)
    })
})

// EDIT Character 
characters.get('/edit/:id', (req, res)=>{
    Character.findById(req.params.id, (err, editCharacter)=>{
        res.json(editCharacter)
    })
})

// UPDATE Character
characters.put('/:id', (req, res)=>{
    Character.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateCharacter)=>{
        res.json(updateCharacter)
    })
})

// DELETE Character
characters.delete('/:id', (req, res)=>{
    Character.findByIdAndRemove(req.params.id, (err, deleteCharacter) =>{
        res.json(deleteCharacter)
    })
})

module.exports = characters;
