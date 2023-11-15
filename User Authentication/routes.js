// Server.get('/',(req,res)=>{
//   res.sendFile('home.html');
// })
// Server.get('/login',(req,res)=>{
//   res.sendFile('loginpage.html');
// })
// Server.get('/signupPage',(req,res)=>{
//   res.sendFile('signupPage.html');
// })

export const routes = {
  '/': (req,res)=>{
    res.sendFile('home.html');
},
  '/loginPage': (req,res)=>{
    res.sendFile('loginPage.html');
},
  '/signupPage': (req,res)=>{
    res.sendFile('signupPage.html');
},
};
