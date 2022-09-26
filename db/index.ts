import { connect, connection } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

connect(`mongodb://localhost/${process.env.DB_NAME}`);

const db = connection;

db.on('error', () => {
  console.log('Connection error, cannot connect to database');
})

db.once('open', () => {
  console.log('Successfully connected to database');
})

module.exports = db;