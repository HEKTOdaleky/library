const prodDb = "mongodb://localhost:27017/library-production";
const testDb = "mongodb://localhost:27017/library";

module.exports = {
  db: {
    url: process.env.APP_ENV === "test" ? testDb : prodDb
  }
};
