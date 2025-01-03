const express = require('express');
const app =express();

//Middle ware explained
app.use((req, res, next) => {
    console.log("Middleware used and request forwaded");
    next();
})

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/profile', (req, res) => {
    res.send("World is round");
})
app.get('/about', (req, res, next) => {
    return next(new Error("Something went wrong"));
});

//Error handling

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");

})

app.listen(3000);