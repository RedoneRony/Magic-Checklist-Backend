import asyncHandler from 'express-async-handler'
import Bd from './../models/bdModel.js';

const getAllBdList = asyncHandler(async(req,res)=>{
    const bd = await Bd.find({email:req.headers.email})
    res.send(bd);
})
const createBdList = asyncHandler(async(req,res)=>{

    const {email,bdCheckList,salesActivity,marketPlace} = req.body

    const bd = await Bd.create({
        email,
        bdCheckList,
        salesActivity,
        marketPlace,
    })

    if(bd){
        res.status(201).json({message:"Record Created"})
    }
    else{
        res.status(400)
        throw new Error('Something went wrong')
    }
    res.send(bd);
})


//Update Bd List

const updateBdList = asyncHandler(async(req,res)=>{
    const bdList= await Bd.findById(req.headers.id)
    if(bdList){
        bdList.bdCheckList= req.body.bdCheckList || bdList.bdCheckList
        bdList.salesActivity = req.body.salesActivity || bdList.salesActivity
        bdList.marketPlace = req.body.marketPlace || bdList.marketPlace
        
        const updatedBdList = await bdList.save();

         res.send({msg:"Updated Successfully",updatedBdList}) 
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})


export {getAllBdList,createBdList,updateBdList}