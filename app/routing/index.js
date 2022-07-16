const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//const db = require("../db")
const bodyParser = require('body-parser')

const pages = path.resolve(__dirname + "../../../pages")
app.use(express.static(pages))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(pages + "/index.html")
})

app.get('/res/style.css', (req, res) => {
    res.sendFile(pages + req.path)
})

app.get('/notification', (req,res) => {
    res.sendFile(pages + "/" + req.path + ".html")
})

app.get('/shopping', (req,res) => {
    res.sendFile(pages + "/" + req.path + ".html")
})

app.get('/devices', (req,res) => {
    res.sendFile(pages + "/" + req.path + ".html")
})

app.get('/res/icon.png', (req,res) => {
    res.sendFile(pages + req.path)
})

app.get('/res/notification.css', (req,res) => {
    res.sendFile(pages + req.path)
})

app.get('/res/notification.js', (req,res) => {
    res.sendFile(pages + req.path)
})


/*app.post("/submit/notification", (req,res) => {
    db.none("INSERT INTO notification(topic, description) VALUES($1, $2);", [req.body.topic, req.body.description])
	.then(() => {
	    res.send("Submitted notification")
	})
	.catch(err => {
	    console.log(err)
	})
})
*/
/*app.get("/db/notification", (req,res) => {
    db.any("SELECT * FROM notification ORDER BY id DESC LIMIT 10")
	.then(data => {
	    console.log(data)
	    res.json(data)
	})
	.catch(err => {
	    console.log(err)
	})
})*/


// app.get('/res/mobi.js', (req,res) => {
//     res.sendFile(pages + req.path)
// })

// app.get('res/mobi.css', (req,res) => {
//     res.sendFile(pages + req.path)
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

