const express = require('express');
const app = express();
const port = 3000;

// إعدادات أساسية
app.use(express.static('../frontend'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '../frontend' });
});

app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});