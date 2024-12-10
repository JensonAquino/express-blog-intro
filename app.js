console.log("ciao")
const express = require("express");
const app = express()
const port = 3001;

app.get("/", (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
});

app.get("/bacheca", (req, res) => {
    const posts = [
        {
            title: "Introduzione a JavaScript",
            content: "JavaScript è un linguaggio di programmazione versatile usato per il web.",
            image: "https://example.com/javascript.png",
            tags: ["programmazione", "JavaScript", "web"]
        },
        {
            title: "Le basi di Node.js",
            content: "Node.js è un runtime per eseguire JavaScript lato server.",
            image: "https://example.com/nodejs.png",
            tags: ["backend", "Node.js", "JavaScript"]
        },
        {
            title: "Introduzione a Express",
            content: "Express è un framework minimalista per creare applicazioni web.",
            image: "https://example.com/express.png",
            tags: ["Express", "Node.js", "framework"]
        },
        {
            title: "Cosa sono le API REST",
            content: "Le API REST permettono di comunicare tra sistemi tramite HTTP.",
            image: "https://example.com/restapi.png",
            tags: ["API", "REST", "web"]
        },
        {
            title: "Frontend vs Backend",
            content: "Scopri le differenze tra lo sviluppo frontend e backend.",
            image: "https://example.com/frontend-backend.png",
            tags: ["frontend", "backend", "sviluppo web"]
        }
    ];
    res.json(posts)
})

app.listen(port, () => {
    console.log("listener on");
    
})