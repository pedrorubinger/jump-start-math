const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on(
      'error',
      (error) => console.log('Error trying to connect to database:', error)
    );
    db.once('open', () => console.log('MongoDB: Successfully connected.'));
  }
}

module.exports = new Database();
