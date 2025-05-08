// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Background worker logic (example)
const pingURL = 'https://vipul-attri-portfolio.netlify.app/';
const interval = 5 * 60 * 1000; // 5 minutes

const pingWebsite = () => {
    fetch(pingURL)
        .then(res => console.log(`[${new Date().toLocaleTimeString()}] Pinged: ${pingURL} Status: ${res.status}`))
        .catch(err => console.error('Ping error:', err));
};

// Start background pinger
setInterval(pingWebsite, interval);
pingWebsite(); // Run immediately too

// Minimal Express server to keep service alive
app.get('/', (req, res) => {
    res.send('Background worker is running! ✅');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
