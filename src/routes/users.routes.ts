import { Router } from "express";
import * as userCtrl from "./users.controllers"

const router = Router()

router.get('/company', userCtrl.getAllCompanies)

router.get('/company/:id', userCtrl.getCompany)


router.get('/users', userCtrl.getAllUsers)

router.post('/users', userCtrl.addUser)


router.get('/users/:id', userCtrl.getUser)

router.put('/users/:id', userCtrl.updateUser)

router.delete('/users/:id', userCtrl.deleteUser)


export default router