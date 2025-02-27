const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jadi.html'));
});

app.post('/greet', (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userAge = req.body.age;
    const userGender = req.body.gender;
    const greetingMessage = `
        <h2>Hello, ${userName}!</h2>
        <p>We have received your information:</p>
        <ul>
            <li><strong>Email:</strong> ${userEmail}</li>
            <li><strong>Age:</strong> ${userAge}</li>
            <li><strong>Gender:</strong> ${userGender}</li>
        </ul>
        <p>Thank you for sharing this information with us!</p>
        <a href="/">Go back to the form</a>
    `;
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Personalized Greeting</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="container">
                ${greetingMessage}
            </div>
        </body>
        </html>
    `);
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
