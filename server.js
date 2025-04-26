const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// הכנס את ה-API Key שלך כאן
const API_KEY = process.env.rnd_RENDER_APPS_LIST;
console.log("process.env.rnd_RENDER_APPS_LIST",process.env.rnd_RENDER_APPS_LIST)

app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('/', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving apps');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
