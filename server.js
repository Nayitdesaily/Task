const { app } = require('./app');

//Utils
const { db } = require('./utils/database.util');
const { initModels } = require('./models/initModels');

const startServer = async () => {
  try {
    await db.authenticate();

    //Established the relation between models
    initModels();

    await db.sync();

    const PORT = 4000;
    app.listen(PORT, () => {
      console.log('Express app running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
