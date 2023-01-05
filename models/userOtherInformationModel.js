import mongoose from "mongoose";

const userOtherInformationSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    agencyName: {
      type: String,
      required: true,
    },
    agencySize: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserOtherInformation = mongoose.model(
  "UserOtherInformation",
  userOtherInformationSchema
);

export default UserOtherInformation;
