let express = require('express')
let path = require('path')
let app = express()
let port = 8000

console.log(`running express server at port:${port}`)

//define the routes to the pages
app.get(
    '/home', function(_request,response){
        console.log('home page loaded.')
        response.sendFile(path.join(__dirname,'index.html'))
    }
)

app.get(
    '/travel', function(_request,response){
        console.log('holiday page loaded.')
        response.sendFile(path.join(__dirname,'travel.html'))
    }
)

app.get(
    '/house', function(_request,response){
        console.log('house page loaded.')
        response.sendFile(path.join(__dirname,'house.html'))
    }
)

//use static resources, load css.
app.use(express.static('./'))

//listen port
app.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
})
