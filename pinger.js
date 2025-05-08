const https = require('https');

console.log('Pinger started...');

const urls = [
  'https://pinger-pj83.onrender.com/',
  'https://vipul-attri-portfolio.netlify.app/',
  'https://pinger2-p72y.onrender.com',
  // '// <-- Replace this with your second website
];

function pingWebsite(url) {
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged ${url} - Status Code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Error pinging ${url}:`, err.message);
  });
}

function pingAllWebsites() {
  urls.forEach(pingWebsite);
}

pingAllWebsites();
setInterval(pingAllWebsites, 30000);
