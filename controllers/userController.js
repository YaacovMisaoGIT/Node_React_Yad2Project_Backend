const asyncHandler = require('express-async-handler')
const { deleteModel } = require('mongoose')

const User = require('../model/userModel')
// const Car = require('../model/carModel')

 
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})

const getOneUser = asyncHandler(async (req, res) => {
    const user = await User.findById()

    console.log(user);
 
    res.status(200).json(user)


})

 
const createUser = asyncHandler(async (req, res) => {
    // const { userName, userContact, userEmail} = req.body
    const body = req.body 

    console.log()
    if(!req.body) {
        res.status(400)
        throw new Error('Please add all the information required')
    }

    const user = await User.create({
        userName: req.body.userName,
        userContact: req.body.userContact,
        userEmail: req.body.userEmail,
        // car_id: req.body.car_id
    })

    res.status(200).json(user)
})

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedUser)
})
 
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if(!user) {
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
}
