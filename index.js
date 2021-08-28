import express from 'express';

const app = express();

// Server Creation
app.listen(7000, (err) => {
    console.log(`Server running at port 7000`);
});