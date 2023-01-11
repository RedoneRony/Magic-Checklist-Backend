import mongoose from "mongoose";

const marketingSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    marketingCheckListTitle: {
      type: String,
      required: true,
    },
    marketingCheckList: [
      {
        type: String,
        required: true,
      },
    ],
    webDirectoriesTitle: {
      type: String,
      required: true,
    },
    webDirectories: [
      {
        type: String,
        required: true,
      },
    ],
    contentPlanTitle: {
      type: String,
      required: true,
    },
    contentPlan: [
      {
        type: String,
        required: true,
      },
    ],

    seoTitle1: {
      type: String,
      required: true,
    },
    basicChecklist: [
      {
        type: String,
        required: true,
      },
    ],

    seoTitle2: {
      type: String,
      required: true,
    },
    keywordResearch: [
      {
        type: String,
        required: true,
      },
    ],

    seoTitle3: {
      type: String,
      required: true,
    },
    technicalSEO: [
      {
        type: String,
        required: true,
      },
    ],

    seoTitle4: {
      type: String,
      required: true,
    },
    onPage: [
      {
        type: String,
        required: true,
      },
    ],

    seoTitle5: {
      type: String,
      required: true,
    },
    offPage: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Marketing = mongoose.model("Marketing", marketingSchema);

export default Marketing;
