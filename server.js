const express = require('express');
const renderApi = require('@api/render-api');

const app = express();
const PORT = process.env.PORT || 3000;

// הכנס את ה-API Key שלך כאן
const apiKey = 'rnd_RENDER_APPS_LIST';
renderApi.auth(apiKey);

app.get('/services', (req, res) => {
    renderApi.listServices({ includePreviews: 'true', limit: '20' })
        .then(({ data }) => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});