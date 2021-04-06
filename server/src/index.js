import profileRoutes from './routes/profile';
import userRoutes from './routes/user';

const express = require('express');

const app = express();
const port = 8000;

app.use('/profile', profileRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});
