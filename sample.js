const express=require('express');
const body_parser=require('body pareser');
const app=express();
const port=3000;
app.use(body_parser,urlencode({extended:true}));
app.set('view engine','ejs');
const user={admin:'password123',};
app.get{'/',(req,res)}
{
    res.render('login');
};
app.port('/ login',(req,res){
const{username,password}=req.body;
if(user[username]&&users[username]===password){
    res.send('login successfully');
}
else{
    res.send('login failed');
}
});
app.listen(PORT,(){console.log('server is running on http://localhost:${port}');
});