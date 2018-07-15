const express = require('express');

const router = express.Router();

const Characters = require('../models/characters');



router.get('/', (req, res) => {
  Characters.find({}, (err, allCharacters) => {
    if(err){
      res.send(err)
    }else{

      res.render('index.ejs', {
        characters: allCharacters
      });
    }
  });
});


router.post('/', (req, res) => {
  console.log(req.body, 'this is req.body, should be form info')

  const newCharacter = {
    name: req.body.name,
    patronus: req.body.patronus,
    bloodStatus: req.body.bloodStatus,
    human: false,
    delete: 'off'
  };
  if (req.body.human === 'on'){
    req.body.human = true
  }

  Characters.create(req.body, (err, createdCharacters) => {
    if(err){
      console.log(err)
      re.send(err)
    } else {
      console.log(createdCharacters)
      console.log(Characters)
      res.redirect('/characters')
    }
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});



router.get('/:id/edit', (req, res) => {
  Characters.findById(req.params.id, (err, foundCharacter) => {
    console.log(foundCharacter)
    res.render('edit.ejs' {
      character: foundCharacter
    })
  });
});


router.get('/:id', (req, res) => {
  
  Characters.findById(
    req.params.id,
    (err, findCharacter) => {
      if (err)console.log(err)
        else {
          console.log(findCharacter, " character found")
        }
        res.resnder('show.ejs', {
          character: findCharacter
        })
    });
});


router.delete('/:id', (req, res) => {
  Characters.findByIdAndRemove(
    req.params.id,
    req.body,
    (err, deleteCharacter) => {
      if(err) console.log(err)
        else {
          console.log(deleteCharacter, " what deleted")
          res.redirect('/characters')
        }
    })
})

router.put('/:id', (req, res) => {
  if (req.body.human === 'on'){
    req.body.human = true;
  }else {
    req.body.human =false
  }

  Characters.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updateCharacter) => {
      if (err){ console.log(err)
      }else {
        console.log(updatedCharacter, " this is what we got back from findByIdAndUpdate")
        res.redirect('/characters')
      }
    })
});

module.exports = router;












