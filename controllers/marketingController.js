import asyncHandler from 'express-async-handler'
import Marketing from '../models/marketingModel.js';

const getAllMarketingList = asyncHandler(async(req,res)=>{
    const marketing = await Marketing.find({email:req.headers.email})
    res.send(marketing);
})
const createMarketingList = asyncHandler(async(req,res)=>{

    const {email,marketingCheckList,webDirectories,contentPlan} = req.body

    const marketing = await Marketing.create({
        email,
        marketingCheckList,
        webDirectories,
        contentPlan,
    })

    if(marketing){
        res.status(201).json({message:"Record Created"})
    }
    else{
        res.status(400)
        throw new Error('Something went wrong')
    }
    res.send(marketing);
})


//Update Marketing List

const updateMarketingList = asyncHandler(async(req,res)=>{
    const marketingList= await Marketing.findById(req.headers.id)
    if(marketingList){
        marketingList.marketingCheckList= req.body.marketingCheckList || marketingList.marketingCheckList
        marketingList.webDirectories = req.body.webDirectories || marketingList.webDirectories
        marketingList.contentPlan = req.body.contentPlan || marketingList.contentPlan
        
        const updatedList = await Marketing.save();

         res.send({msg:"Updated Successfully",updatedList}) 
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})


export {getAllMarketingList,createMarketingList,updateMarketingList}