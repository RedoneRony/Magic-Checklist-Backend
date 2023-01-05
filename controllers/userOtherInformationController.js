import asyncHandler from 'express-async-handler'
import UserOtherInformation from '../models/userOtherInformationModel.js'

const getUserOtherInformation = asyncHandler(async (req, res) => {
  const userOtherInfo = await UserOtherInformation.find({})
  res.json(userOtherInfo)
})

const createOrUpdateUserOtherInformation = asyncHandler(async (req, res) => {
  const userOtherInformation = await UserOtherInformation.findOne({
    email: req.body.email
  }).exec()
  const { email, agencyName, agencySize, location } = req.body
  if (userOtherInformation === null) {
    await UserOtherInformation.create({
      email,
      agencyName,
      agencySize,
      location
    })
    res.status(201).json({ message: 'User Other Information Created' })
  } else {
    UserOtherInformation.findOneAndUpdate(
      { email: req.body.email },
      {
        $set: {
          agencyName: agencyName,
          agencySize: agencySize,
          location: location
        }
      }
    ).exec(function (err, result) {
      if (err) {
        console.log(err)
        res.status(500).send(err)
      } else {
        res.status(200).send(result)
      }
    })

    // await UserOtherInformation.findOneAndUpdate(filter, update)
    // res.status(400).json({ message: ' Update User Other Information' })
  }
})

export { getUserOtherInformation, createOrUpdateUserOtherInformation }
