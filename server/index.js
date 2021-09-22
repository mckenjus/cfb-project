const express = require('express')
var path = require('path');
const cors = require('cors')
// const cfb = require('cfb.js');
const app = express()
const port = 3000
const axios = require('axios')
app.use(cors());
app.use(express.json());
var htmlPath = path.join(__dirname, '../client');
var teamObj
var venueObj
app.use(express.static(htmlPath));

axios.get('https://api.collegefootballdata.com/teams/fbs?year=2021', {
    headers: {
      'Authorization': `Bearer mKFbtgfkLiQNzqV/Skn5exPHkYLtoNiM9464DvI5pr4xFRmwQ9gZHBRjDPEKFsw3`
    }
  })
  .then((res) => {
    
    teamObj = res.data
    
    const myJSON = JSON.stringify(teamObj);  
       
  })
  .catch((error) => {
      console.error(error)
  })
app.get('/teams' , (req,res)=>{
    let data1 = [`hello world`]
    let rand = Math.floor(Math.random()* Object.keys(teamObj).length)
    
    console.log(rand)
 
 data1 = teamObj[rand]
    res.send(data1); 
 })

 axios.get('https://api.collegefootballdata.com/venues', {
    headers: {
      'Authorization': `Bearer mKFbtgfkLiQNzqV/Skn5exPHkYLtoNiM9464DvI5pr4xFRmwQ9gZHBRjDPEKFsw3`
    }
  })
  .then((res) => {

    venueObj = res.data
    const myJSON = JSON.stringify(venueObj); 
    
    
  })
  
  
  .catch((error) => {
      console.error(error)
  })

app.get('/venues' , (req,res)=>{
    let data1 = [`hello world`]
    let rand = Math.floor(Math.random()* Object.keys(venueObj).length)
    
    console.log(rand)
 
 data2 = venueObj[rand]
    res.send(data2); 
 })


 axios.get('https://api.collegefootballdata.com/player/search?searchTerm=Joe', {
     headers: {
         'Authorization': `Bearer mKFbtgfkLiQNzqV/Skn5exPHkYLtoNiM9464DvI5pr4xFRmwQ9gZHBRjDPEKFsw3`
        }
    })
    .then((res) => {
        
        joeObj = res.data
  
    })
    .catch((error) => {
        console.error(error)
    })
    
    app.get('/players' , (req,res)=>{
        let data3 = [`hello world`]
        let rand = Math.floor(Math.random()* Object.keys(joeObj).length)
        
        console.log(rand)
        
        data3 = joeObj[rand]
        res.send(data3); 
    })

    app.get('/' , (req,res)=>{
     
       res.sendFile(); 
    })
    
    app.listen(port, () => {
        console.log(`Lab server listening at http://localhost:${port}`)
    })