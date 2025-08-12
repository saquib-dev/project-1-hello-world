const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 786;
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// API endpoint
app.get('/api/hello', (req, res) => {
res.json({ message: 'Hello from the backend!' });
});
// Catch-all for other routes to serve the index.html
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

