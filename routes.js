let express = require('express')
let router = express.Router()
// Import contact controller
var UserController = require('./Controllers/User')
router.get('/', UserController.ShowAll)
router.get('/user', UserController.ShowAll)
router.get('/user/:id', UserController.ShowUser)
router.post('/user/add',UserController.AddUser)
router.put('/user/update/:id',UserController.UpdateUser)
router.delete('/user/delete/:id',UserController.DeleteUser)
//router.post('/Piece/Add', PieceController.AddPiece)
//router.get('/Piece',PieceController.PieceDetail)
module.exports = router;