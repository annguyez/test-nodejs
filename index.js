const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!  welcome to Jenkins 3 4 5 6')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



console.log('1');
<<<<<<< HEAD
console.log('3');
=======
console.log('2');
>>>>>>> 2
