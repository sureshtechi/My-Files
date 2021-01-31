var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
var http = require('http');
var fs = require('fs');

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "university-timetable",
  port:"3306"
});

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static("public"));
app.use(bodyParser.json());

//var teacher;


app.post('/cse-details', urlencodedParser, function (req, res) {
  connection.connect(function(err){
      console.log("Connected to database");
    
      connection.query(`select * from allocation where sec = '${req.body.section}' ;`,function(err,results){
           console.log(results);
             res.send({details: results});
  
      });
  });
});


app.post('/login', urlencodedParser,function (req, res) {
  var username1=req.body.user;
  var password1=req.body.psw;
  console.log(username1);
  console.log(password1);

  connection.connect(function(err){
      console.log("connected");
      var sql="SELECT PASSWORD FROM ADMIN WHERE USERNAME ='"+username1+"'";
      connection.query(sql,function(err,results){

        console.log(results);
          console.log(results[0].PASSWORD);
          console.log(password1);
          if ( results[0].PASSWORD.toString()==password1)
          {
            console.log("Congratulations Login Success");

              fs.readFile('./public/input.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
              });
              
            //   fs.readFile('inpa.css', function(err, data) {
            // //  res.writeHead(200, {'Content-type' : 'text/css'});
            //   var fileContents = fs.readFileSync('inpa.css', {encoding: 'utf8'});
            //   res.write(fileContents);
            //   });

              // fs.readFile('inpa.css', function(err, data) {
              //   res.writeHead(200, {'Content-Type': 'text/css'});
              //   res.write(data);
              //   res.end();
              // });

              // fs.readFile('bootstrap.css', function(err, data) {
              //   res.writeHead(200, {'Content-Type': 'text/css'});
              //   res.write(data);
              //   res.end();
              // });

          }
          else
          {
            console.log('Incorrect username/password. Please try again.');
            alert("Incorrect username/password. Please try again.");
            fs.readFile('login.html', function(err, data) {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);

              res.end();
            });
          }

       
      });
  });
  // app.listen(8081);
  });

  app.post('/createaccount', urlencodedParser, function (req, res) {
    var username1=req.param('user', null);
    var password1=req.param('psw', null);
    var password2=req.param('re psw', null);
  
    username1=username1.toString();
    password1=password1.toString();
    password2=password2.toString();
  
    console.log(username1);
    console.log(password1);
    console.log(password2);
  
    // connection.connect(function(err){
        console.log("connected");
        var sql="SELECT username FROM ADMIN WHERE username ='"+username1+"'";
        connection.query(sql,function(err,results){
  
          console.log(results);
            
            if ( results.length==0)
            {
              console.log("Unique Username");
              
              if(password1==password2)
              {
                var sql1="INSERT INTO ADMIN VALUES ('"+username1+"','"+password1+"');";
                connection.query(sql1,function(err,results){
  
                  fs.readFile('./public/input.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
                  });
                }); 
  
              }
              else
              {
                fs.readFile('create account.html', function(err, data) {
                  res.writeHead(200, {'Content-Type': 'text/html'});
                  res.write(data);
                });
              }
  
                 // res.end();
                
              //   fs.readFile('inpa.css', function(err, data) {
              // //  res.writeHead(200, {'Content-type' : 'text/css'});
              //   var fileContents = fs.readFileSync('inpa.css', {encoding: 'utf8'});
              //   res.write(fileContents);
              //   });
  
                // fs.readFile('inpa.css', function(err, data) {
                //   res.writeHead(200, {'Content-Type': 'text/css'});
                //   res.write(data);
                //   res.end();
                // });
  
                // fs.readFile('bootstrap.css', function(err, data) {
                //   res.writeHead(200, {'Content-Type': 'text/css'});
                //   res.write(data);
                //   res.end();
                // });
  
            }
            else
            {
              console.log(results[0].username);
              console.log('This Username Already Exists. Please try again.');
  
              fs.readFile('create account.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
  
                res.end();
              });
            }
  
         
        });
    // });
    // app.listen(8081);
    });

    app.post('/input', urlencodedParser, function (req, res) {


      var t1=req.body.c1;
      var c1=req.body.cr1;
      var m1=req.body.m1;
      var id1=req.body.id1;

      var t2=req.body.c2;
      var c2=req.body.cr2;
      var m2=req.body.m2;
      var id2=req.body.id2;

      var t3=req.body.c3;
      var c3=req.body.cr3;
      var m3=req.body.m3;
      var id3=req.body.id3;

      var t4=req.body.c4;
      var c4=req.body.cr4;
      var m4=req.body.m4;
      var id4=req.body.id4;

      var t5=req.body.c5;
      var c5=req.body.cr5;
      var m5=req.body.m5;
      var id5=req.body.id5;

      var t6=req.body.c6;
      var c6=req.body.cr6;
      var m6=req.body.m6;
      var id6=req.body.id6;

      var t7=req.body.c7;
      var c7=req.body.cr7;
      var m7=req.body.m7;
      var id7=req.body.id7;

      var t8=req.body.c8;
      var c8=req.body.cr8;
      var m8=req.body.m8;
      var id8=req.body.id8;

        var f1=req.body.f1;
        var fc1=req.body.fc1;
        var cid1=req.body.cid1;

      var f2=req.body.f2;
      var fc2=req.body.fc2;
      var cid2=req.body.cid2;

      var f3=req.body.f3;
      var fc3=req.body.fc3;
      var cid3=req.body.cid3;

      var f4=req.body.f4;
      var fc4=req.body.fc4;
      var cid4=req.body.cid4;

      var f5=req.body.f5;
      var fc5=req.body.fc5;
      var cid5=req.body.cid5;

      var f6=req.body.f6;
      var fc6=req.body.fc6;
      var cid6=req.body.cid6;

      var f7=req.body.f7;
      var fc7=req.body.fc7;
      var cid7=req.body.cid7;

      var f8=req.body.f8;
      var fc8=req.body.fc8;
      var cid8=req.body.cid8;

      var f9=req.body.f9;
      var fc9=req.body.fc9;
      var cid9=req.body.cid9;

      var f10=req.body.f10;
      var fc10=req.body.fc10;
      var cid10=req.body.cid10;

      var f11=req.body.f11;
      var fc11=req.body.fc11;
      var cid11=req.body.cid11;

      var f12=req.body.f12;
      var fc12=req.body.fc12;
      var cid12=req.body.cid12;

      var f13=req.body.f13;
      var fc13=req.body.fc13;
      var cid13=req.body.cid13;

      var f14=req.body.f14;
      var fc14=req.body.fc14;
      var cid14=req.body.cid14;

      var f15=req.body.f15;
      var fc15=req.body.fc15;
      var cid15=req.body.cid15;

      var f16=req.body.f16;
      var fc16=req.body.fc16;
      var cid16=req.body.cid16;

      var f17=req.body.f17;
      var fc17=req.body.fc17;
      var cid17=req.body.cid17;

      var f18=req.body.f18;
      var fc18=req.body.fc18;
      var cid18=req.body.cid18;

      var f19=req.body.f19;
      var fc19=req.body.fc19;
      var cid19=req.body.cid19;

      var f20=req.body.f20;
      var fc20=req.body.fc20;
      var cid20=req.body.cid20;

      var f21=req.body.f21;
      var fc21=req.body.fc21;
      var cid21=req.body.cid21;

      var f22=req.body.f22;
      var fc22=req.body.fc22;
      var cid22=req.body.cid22;

      var f23=req.body.f23;
      var fc23=req.body.fc23;
      var cid23=req.body.cid23;

      var f24=req.body.f24;
      var fc24=req.body.fc24;
      var cid24=req.body.cid24;

      var f25=req.body.f25;
      var fc25=req.body.fc25;
      var cid25=req.body.cid25;

      var f26=req.body.f26;
      var fc26=req.body.fc26;
      var cid26=req.body.cid26;

      var f27=req.body.f27;
      var fc27=req.body.fc27;
      var cid27=req.body.cid27;

      var f28=req.body.f28;
      var fc28=req.body.fc28;
      var cid28=req.body.cid28;

      var f29=req.body.f29;
      var fc29=req.body.fc29;
      var cid29=req.body.cid29;

      var f30=req.body.f30;
      var fc30=req.body.fc30;
      var cid30=req.body.cid30;

      var f31=req.body.f31;
      var fc31=req.body.fc31;
      var cid31=req.body.cid31;

      var f32=req.body.f32;
      var fc32=req.body.fc32;
      var cid32=req.body.cid32;

      var f33=req.body.f33;
      var fc33=req.body.fc33;
      var cid33=req.body.cid33;

      var f34=req.body.f34;
      var fc34=req.body.fc34;
      var cid34=req.body.cid34;

      var f35=req.body.f35;
      var fc35=req.body.fc35;
      var cid35=req.body.cid35;

      var f36=req.body.f36;
      var fc36=req.body.fc36;
      var cid36=req.body.cid36;

      var f37=req.body.f37;
      var fc37=req.body.fc37;
      var cid37=req.body.cid37;

      var f38=req.body.f38;
      var fc38=req.body.fc38;
      var cid38=req.body.cid38;

     // console.log(t1);
     // console.log(c1);
     // console.log(m1);
     // console.log(id1);

    //  console.log(f1);
    //  console.log(fc1);
    //  console.log(cid1);

      connection.connect(function(err){
         // console.log("connected");
          var sql="insert into course values ('"+id1+"','"+t1+"',"+c1+",'"+m1+"');";
          connection.query(sql,function(err,results){
    
           // console.log(results);

                //console.log("Updated");
    
                  // fs.readFile('./public/input.html', function(err, data) {
                  //   res.writeHead(200, {'Content-Type': 'text/html'});
                  //   res.write(data);
                  //  // res.end();
                  // });
                  
                //   fs.readFile('inpa.css', function(err, data) {
                // //  res.writeHead(200, {'Content-type' : 'text/css'});
                //   var fileContents = fs.readFileSync('inpa.css', {encoding: 'utf8'});
                //   res.write(fileContents);
                //   });
    
                  // fs.readFile('inpa.css', function(err, data) {
                  //   res.writeHead(200, {'Content-Type': 'text/css'});
                  //   res.write(data);
                  //   res.end();
                  // });
    
                  // fs.readFile('bootstrap.css', function(err, data) {
                  //   res.writeHead(200, {'Content-Type': 'text/css'});
                  //   res.write(data);
                  //   res.end();
                  // });
    
              // else
              // {
              //   console.log('Incorrect username/password. Please try again.');
              //   alert("Incorrect username/password. Please try again.");
              //   // fs.readFile('login.html', function(err, data) {
              //   //   res.writeHead(200, {'Content-Type': 'text/html'});
              //   //   res.write(data);
    
              //   //   res.end();
              //   // });
              // }
    
           
          });

          var sql="insert into course values ('"+id2+"','"+t2+"',"+c2+",'"+m2+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id3+"','"+t3+"',"+c3+",'"+m3+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id4+"','"+t4+"',"+c4+",'"+m4+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id5+"','"+t5+"',"+c5+",'"+m5+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id6+"','"+t6+"',"+c6+",'"+m6+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id7+"','"+t7+"',"+c7+",'"+m7+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into course values ('"+id8+"','"+t8+"',"+c8+",'"+m8+"');";
          connection.query(sql,function(err,results){
          });



          var sql="insert into instructor values ('"+fc1+"','"+f1+"');";
          connection.query(sql,function(err,results){
            //console.log(fc1);
            //console.log(f1);
            //console.log("Values Updated");
          });

          var sql="insert into teaches values ('"+fc1+"','"+cid1+"');";
          connection.query(sql,function(err,results){
            //console.log(fc1);
            //console.log(cid1);
            //console.log("Values Updated");
          });

          var sql="insert into instructor values ('"+fc2+"','"+f2+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc2+"','"+cid2+"');";
          connection.query(sql,function(err,results){
          });
          
          var sql="insert into instructor values ('"+fc3+"','"+f3+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc3+"','"+cid3+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc4+"','"+f4+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc4+"','"+cid4+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc5+"','"+f5+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc5+"','"+cid5+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc6+"','"+f6+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc6+"','"+cid6+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc7+"','"+f7+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc7+"','"+cid7+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc8+"','"+f8+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc8+"','"+cid8+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc9+"','"+f9+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc9+"','"+cid9+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc10+"','"+f10+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc10+"','"+cid10+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc11+"','"+f11+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc11+"','"+cid11+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc12+"','"+f12+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc12+"','"+cid12+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc13+"','"+f13+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc13+"','"+cid13+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc14+"','"+f14+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc14+"','"+cid14+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc15+"','"+f15+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc15+"','"+cid15+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc16+"','"+f16+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc16+"','"+cid16+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc17+"','"+f17+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc17+"','"+cid17+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc18+"','"+f18+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc18+"','"+cid18+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc19+"','"+f19+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc19+"','"+cid19+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc20+"','"+f20+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc20+"','"+cid20+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc21+"','"+f21+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc21+"','"+cid21+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc22+"','"+f22+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc22+"','"+cid22+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc23+"','"+f23+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc23+"','"+cid23+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc24+"','"+f24+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc24+"','"+cid24+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc25+"','"+f25+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc25+"','"+cid25+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc26+"','"+f26+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc26+"','"+cid26+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc27+"','"+f27+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc27+"','"+cid27+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc28+"','"+f28+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc28+"','"+cid28+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc29+"','"+f29+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc29+"','"+cid29+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc30+"','"+f30+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc30+"','"+cid30+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc31+"','"+f31+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc31+"','"+cid31+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc32+"','"+f32+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc32+"','"+cid32+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc33+"','"+f33+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc33+"','"+cid33+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc34+"','"+f34+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc34+"','"+cid34+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc35+"','"+f35+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc35+"','"+cid35+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc36+"','"+f36+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc36+"','"+cid36+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc37+"','"+f37+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc37+"','"+cid37+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into instructor values ('"+fc38+"','"+f38+"');";
          connection.query(sql,function(err,results){
          });

          var sql="insert into teaches values ('"+fc38+"','"+cid38+"');";
          connection.query(sql,function(err,results){
          });


          var i,j,k,length,teacher,cor,temp,min,mode1,tit,d,sl,section,d_name,flag=1,flag2=1,m;
          var inc = -1;

          i=4;
          section="cse-e";

       //   for(i=0;i<5;i++)
       //   {
            inc=inc+1;
            var arr = new Array(10);
            for(var v=0;v<=7;v++)
            {
              arr[v]=new Array(10);
              for(var n=0;n<=7;n++)
                {
                    arr[v][n]=0;
                }
            }
            
              //  var sql="select * from course";
              // connection.query(sql,function(err,results){
              //   var gh=results[i%i].credits;
              //  });
          
            // if( i == 0 )
            // {
            //   section="cse-a";
            //   console.log("IM IN CSE A ");
            // }
            // else if(i == 1)
            // {
            //   section="cse-b";
            //   console.log("IM IN CSE B ");
            // }
            // else if(i == 2)
            // {
            //   section="cse-c";
            //   console.log("IM IN CSE C ");
            // }
            // else if(i == 3)
            // {
            //   section="cse-d";
            //   console.log("IM IN CSE D ");
            // }
            // else
            // {
            //   section="cse-e";
            //   console.log("IM IN CSE E ");
            // }

            //console.log(section + " 744 ");
            
            var sql="select c.title,c.course_id,c.credits, i.instructor_id from course c, teaches i where c.mode='lab' and c.course_id=i.course_id";
            connection.query(sql,function(err,results){
              console.log("CURRENTLY IN LAB");
            length = results.length;
            m=-1;
            for(j=0;j<length;j++)
            {

              if(j!=0 && results[j].course_id ==results[j-1].course_id)
              {
                continue;
              }
              m=m+1;
              temp=results[j].credits;
              tit=results[j].title;
              cor=results[j].course_id;
              mode1=results[j].mode;
              if(length<5)
              {
                min=length;
              }
              else
              {
                min=5;
              }
              teacher=results[(j+(i%3))].instructor_id;
              
            //  console.log(tit +"title");

              //console.log(cor + " course id for teacher");
            //   var sql="select * from teaches where course_id ='"+cor+"'";
            //   connection.query(sql,function(error,results1){
            //    console.log(section + " 762 hey dsjhfbejfbjehbfjebfhjerfgf ");
            //     var l1=results1.length;
               
            // //    console.log(results);
            //     if(l1<5)
            //     {
            //       min=l1;
            //     }
            //     else
            //     {
            //       min=5;
            //     }
            //     teacher=results1[i%min].instructor_id;
            //     console.log(teacher+" hey teacher heree inside");
            //   });

              // console.log(teacher+" hey teacher heree outside");


              //console.log(section + " 774 hey dsjhfbejfbjehbfjebfhjerfgf ");
              if(tit=='cir')
              {
              //  console.log("CURRENTLY IN CIR");
                if(i==0 || i==1)
                {
                  arr[0][1]=1;
                  arr[0][2]=1;
                  arr[0][3]=1;
                 // console.log(section + " 783 hey dsjhfbejfbjehbfjebfhjerfgf ");
                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',1,'monday','"+section+"');";
                  connection.query(sql,function(err,results){
             //       console.log(results);
              //      console.log("CIR INSERTED MONDAY 1");
                  });

                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',2,'monday','"+section+"');";
                  connection.query(sql,function(err,results){
                   //        console.log("CIR INSERTED MONDAY 2");
                     //       console.log(results);
                  });

                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',3,'monday','"+section+"');";
                  connection.query(sql,function(err,results){
                   //        console.log("CIR INSERTED MONDAY 3");
                //    console.log(results);
                  });

                }
                else
                {
                  arr[1][1]=1;
                  arr[1][2]=1;
                  arr[1][3]=1;

                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',1,'tuesday','"+section+"');";
                  connection.query(sql,function(err,results){
               //     console.log("CIR INSERTED TUESDAY 1");
                  });

                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',2,'tuesday','"+section+"');";
                  connection.query(sql,function(err,results){
               //     console.log("CIR INSERTED TUESDAY 2");
                  });

                  var sql="insert into allocation values ('"+cor+"','"+teacher+"',3,'tuesday','"+section+"');";
                  connection.query(sql,function(err,results){
                //    console.log("CIR INSERTED TUESDAY 3");
                  });

                }
              }
              else
              {
                d=(i+m)%5;
                arr[d][5]=1;
                arr[d][6]=1;
                
                if(d==0)
                {
                  d_name="monday";
                }
                else if(d==1)
                {
                  d_name="tuesday";
                }
                else if(d==2)
                {
                  d_name="wednesday";
                }
                else if(d==3)
                {
                  d_name="thursday";
                }
                else
                {
                  d_name="friday";
                }

                var sql="insert into allocation values ('"+cor+"','"+teacher+"',5,'"+d_name+"','"+section+"');";
                connection.query(sql,function(err,results){
                 // console.log("LAB VALUES ENTERED");
                });

                var sql="insert into allocation values ('"+cor+"','"+teacher+"',6,'"+d_name+"','"+section+"');";
                connection.query(sql,function(err,results){
              //    console.log("LAB VALUES ENTERED");
                });

              }

            }

            });

            var sql="select c.title,c.course_id,c.credits, i.instructor_id from course c, teaches i where c.mode='class' and c.course_id=i.course_id";
            //console.log("CURRENTLY IN CLASS MODE");
            connection.query(sql,function(err,results){
            length = results.length;
            m=-1;
            for(j=0;j<length;j++)
            {
              if(j!=0 && results[j].course_id==results[j-1].course_id)
              {
                continue;
              }
              m=m+1;
              temp=results[j].credits;
              cor=results[j].course_id;
              tit=results[j].title;
              mode1=results[j].mode;
              if(length<5)
              {
                min=length;
              }
              else
              {
                min=5;
              }
              teacher=results[(j+(i%3))].instructor_id;
              

              // var sql="select * from teaches where course_id ='"+cor+"'";
              // connection.query(sql,function(err,results){
              //   var l1=results.length;
              //   if(l1<5)
              //   {
              //     min=l1;
              //   }
              //   else
              //   {
              //     min=5;
              //   }
              //   teacher=results[i%min].instructor_id;
              // });

              d=(i+m)%5;
              for(k=0;k<temp;k++)
              {
                flag=0;
                sl=1;
                for(sl=1;sl<=6;sl++)
                {
                  if(arr[d][sl]==0)
                  {
                    arr[d][sl]=1;
                    flag=1;
                    break;
                  }
                }

                if(flag==0)
                {
                  d=0;
                  sl=1;
                  flag2=0;
                  for(d=0;d<5;d++)
                  {
                    for(sl=1;sl<=6;sl++)
                    {
                      if(arr[d][sl]==0)
                      {
                        flag2=1;
                        break;
                      }
                    }
                    if(flag2==1)
                    {
                      break;
                    }
                  }
                }

                if(d==0)
                {
                  d_name="monday";
                }
                else if(d==1)
                {
                  d_name="tuesday";
                }
                else if(d==2)
                {
                  d_name="wednesday";
                }
                else if(d==3)
                {
                  d_name="thursday";
                }
                else
                {
                  d_name="friday";
                }

               // console.log("values in class mode" + section);
                var sql="insert into allocation values ('"+cor+"','"+teacher+"',"+sl+",'"+d_name+"','"+section+"');";
                connection.query(sql,function(err,results){
                  if(err)
                  {
                    throw err;
                  }
                 // console.log("values inserted in class mode" + section);
                });
                d=(d+1)%5;
              }
            }
            });

        //  }

        


      });

      fs.readFile('./public/output.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
      // app.listen(8081);
      });

    app.listen(8081);

