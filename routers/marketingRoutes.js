import express from 'express'
import { createMarketingList, deleteMarketingList, getAllMarketingList, updateMarketingList } from '../controllers/marketingController.js';


const router = express.Router()

router.route('/getAll').get(getAllMarketingList)
router.route('/createList').post(createMarketingList);
router.route('/update').put(updateMarketingList);
router.route("/delete").delete(deleteMarketingList);

export default router