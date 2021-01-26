const express = require('express')
const app = express()
const PORT= process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req,res) =>{
  res.json({
    names:["samson","olusegun"],
    age:12,

  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)})