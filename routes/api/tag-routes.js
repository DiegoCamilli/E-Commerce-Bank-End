const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')


// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags &be sure to include its associated Product data
  Tag.findAll({
    include: [
      Product
    ]
  })
    .then(data => res.json(data).status(200))
    .catch(err => res.json(err).status(400))
    
})


router.get('/:id', (req, res) => {
  // find a single tag by its `id` & be sure to include its associated Product data
  Tag.findOne({
    where: {
      // find one by its id
      id: req.params.id
    },
    include: [
      Product
    ]
  })
    .then(data => res.json(data).status(200))
    .catch(err => res.json(err).status(400))
    
})


router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    req.body
  )
    .then(data => res.json(data).status(200))
    .catch(err => res.json(err).status(400))
    
})


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      // use id to update a specific one
      id: req.params.id
    }
  })
    .then(data => res.json(data).status(200))
    .catch(err => res.json(err).status(400))
    
})


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      // use the id to delete a specific one
      id: req.params.id
    }
  })
    .then(data => res.json(data).status(200))
    .catch(err => res.json(err).status(400))
    
})


module.exports = router
