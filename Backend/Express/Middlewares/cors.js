import express from 'express';
import cors from 'cors';
const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'This is CORS-enabled for all origins!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/*CORS (Cross-Origin Resource Sharing) is a security feature implemented 
by web browsers to control how resources (like APIs) on a web server can be 
requested from another domain outside the domain from which the resource originated. 
It helps prevent malicious websites from making unauthorized requests to your server.*/