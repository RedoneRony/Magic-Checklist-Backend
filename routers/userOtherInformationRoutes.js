import express from 'express'
import {
  getUserOtherInformation,
  createOrUpdateUserOtherInformation
} from '../controllers/userOtherInformationController.js'

const router = express.Router()

router.route('/getAll').get(getUserOtherInformation)
router.route('/createList').post(createOrUpdateUserOtherInformation)

export default router
