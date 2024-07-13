const express = require('express');
const vehicleRoute = require('./modules/vehicles/index');

const app = express();
const port = 3000;
app.use(express.json());

app.use("/vehicles", vehicleRoute)

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
});