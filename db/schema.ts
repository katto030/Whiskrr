import { Schema, model } from 'mongoose';

const generalInfoSchema = new Schema ({
  origin: String,
  originId: String,
  gender: String,
  age: String
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
  generalInfo: generalInfoSchema,
  events: [{
    eventName: String,
    start: Date,
    end: Date
  }],
  Food: [{
    foodName: String,
    foodAmount: String,
    foodNotes: String
  }],
  Medication: [{
    medName: String,
    medAmount: String,
    medNotes: String
  }],
  notes: notesSchema,
  pfp: String,
  photos: Array
})

const Fosters = model('Fosters', fosterSchema);
export default Fosters;