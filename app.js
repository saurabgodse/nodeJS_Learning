const express =require('express');
const app= express();
app.listen(3000,()=>console.log('listening to 3000'));
app.get('/',(req,res)=>
    res.send('hello world')
)
app.get('/givehtml',(req,res)=>
{
    res.sendFile(__dirname+'/takehtml.html');
})


var firstObj ={"name":"Saurab", "email":"godsesaurab@gmail.com"}
const MongoClient =require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/test',(err,database)=>{
  if(err) return console.log(err);
  var db= database.db('first');
  db.collection('first').save(firstObj,(err,result)=>
  {
    if(err) return console.log(err);
    console.log('saved to database');
  })

  db.collection('first').find().toArray((err,results)=>{
    console.log(results);
  })
})

