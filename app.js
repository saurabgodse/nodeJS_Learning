const express =require('express');
const app = express();
const port =3000;
const data='{"name":"Saurab", "age":20}'
try{
    const user =JSON.parse(data);
    console.log(user);
}catch(err){
    console.error(err);
}

const fs=require('fs');
fs.readFile('./firstjson.json','utf8',(err,fileContents)=>{
if(err){
    console.error(err);
    return;
}
try{
    const datanew =JSON.parse(fileContents)
    console.log(`username: ${datanew.username}\npassword: ${datanew.password}\nemail: ${datanew.email}\nuid: ${datanew.uid}`);
} catch(err){
    console.error(err);
}
}
)

app.get('/', (resq,res) => res.send('Hello World!'));
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
