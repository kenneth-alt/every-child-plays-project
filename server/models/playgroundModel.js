import mongoose from 'mongoose';

const playgroundSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    description: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
    }],
    accessibilityFeatures: [{
        type: String,
    }],
    safetyFeatures: [{
        type: String,
    }],
    ageRange: {
      type: String,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
      }
    ],
    neighbourhood: {
      type: String,
    },
    quadrant: {
      type: String,
    },
    moreInformation: [{
      type: String,
  }],
  });

  const Playground = mongoose.model('Playground', playgroundSchema);

  export default Playground;