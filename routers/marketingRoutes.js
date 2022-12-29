import express from 'express'
import { createMarketingList, getAllMarketingList, updateMarketingList } from '../controllers/marketingController.js';


const router = express.Router()

router.route('/getAll').get(getAllMarketingList)
router.route('/createList').post(createMarketingList);
router.route('/update').put(updateMarketingList)

export default router