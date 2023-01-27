const express = require('express');
const character = express.Router();
const Character = require('../models/character')

// CREATE Character
character.post('/', (req, res)=>{
    Character.create(req.body, (err, createCharacter)=>{
        res.json(createCharacter)
    })
})

// GET Character
character.get('/', (req, res)=>{
    Character.find({}, (err, getCharacter)=>{
        res.json(getCharacter)
    })
})

// SHOW Character
character.get('/:id', (req, res)=>{
    Character.findById(req.params.id, (err, getCharacter)=>{
        res.json(getCharacter)
    })
})

// EDIT Character 
character.get('/edit/:id', (req, res)=>{
    Character.findById(req.params.id, (err, editCharacter)=>{
        res.json(editCharacter)
    })
})

// UPDATE Character
character.put('/:id', (req, res)=>{
    Character.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateCharacter)=>{
        res.json(updateCharacter)
    })
})

// DELETE Character
character.delete('/:id', (req, res)=>{
    Character.findByIdAndRemove(req.params.id, (err, deleteCharacter) =>{
        res.json(deleteCharacter)
    })
})

module.exports = character;
