let express = require('express')
let router = express.Router()
// Import contact controller
var UserController = require('./Controllers/User')
router.get('/', UserController.ShowAll)
router.get('/user', UserController.ShowAll)
router.get('/user/id/:id', UserController.ShowUserbyID)
router.get('/user/name/:UserName', UserController.ShowUserbyUserName)
router.post('/user/add',UserController.AddUser)
router.put('/user/update/:id',UserController.UpdateUser)
router.delete('/user/delete/:id',UserController.DeleteUser)
//router.post('/Piece/Add', PieceController.AddPiece)
//router.get('/Piece',PieceController.PieceDetail)
module.exports = router;