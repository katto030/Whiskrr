import { Schema, model } from 'mongoose';

const generalInfoSchema = new Schema ({
  origin: String,
  originId: String,
  gender: String,
  age: String,
  description: String
});

const notesSchema = new Schema ({
  type: String,
  date: Date,
  time: String,
  note: String
})

const fosterSchema = new Schema ({
  user: String,
  fosterName: String,
  adopted: Boolean,
  generalInfo: generalInfoSchema,
  events: [{
    eventName: String,
    start: Date,
    end: Date
  }],
  food: [{
    foodName: String,
    foodAmount: String,
    foodNotes: String,
    foodFreq: String
  }],
  medication: [{
    medName: String,
    medAmount: String,
    medNotes: String,
    medFreq: String
  }],
  notes: [notesSchema],
  pfp: String,
  photos: Array
})

const Fosters = model('Fosters', fosterSchema);
export default Fosters;