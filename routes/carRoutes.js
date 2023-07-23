const express = require('express')
const router = express.Router()
const { getCars, 
    getCar,
    setCar,
    updateCar,
    deleteCar,
    } = require('../controllers/carController')

router.route('/').get(getCars).post(setCar)
// router.get('/', getCar)
// router.post('/', setCar)

router.route('/:id').delete(deleteCar).put(updateCar).get(getCar)
// router.put('/:id', updateCar)
// router.delete('/:id', deleteCar)

module.exports = router