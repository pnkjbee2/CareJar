const mongoose = require('mongoose');
const Chance = require('chance');
const chance = new Chance();

mongoose.connect(process.env.MONGODB_URI);
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    clinic: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    stories: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // URL of image
        required: true,
    },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

const saveDoctor = async (doctorData) => {
  const fakeDoctor = new Doctor(doctorData);
  try {
    const savedDoctor = await fakeDoctor.save();
    console.log(`Saved doctor: ${savedDoctor.name}`);
  } catch (error) {
    console.error(`Error saving doctor: ${error.message}`);
  }
};

const fetchDoctorsFromDB = async (type) => {
    try {
      const doctors = await Doctor.find({ speciality: type }).limit(4); 
      return doctors;
    } catch (error) {
      console.error('Error fetching doctors from the database:', error);
      return null;
    }
  };

module.exports = { saveDoctor, Doctor, fetchDoctorsFromDB };
