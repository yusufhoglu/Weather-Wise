require('dotenv').config()
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const apiKey = process.env.MAILCHIMP;
console.log(apiKey)


var temp = 0;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    
    res.render("index",{kindOfTemp:temp});

});

app.post("/weather",function(req,res){
    const cityName = req.body.cityName;
    const apiKey ="d2ffc652323dfcf44d68bf1a781a3e2b&units=metric"

    const url="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;

    https.get(url,function(response){
        response.on("data",function(data){
            try {
                const weather = JSON.parse(data);
                const temp = weather.main.temp;
                const description = weather.weather[0].description;
                const icon = weather.weather[0].icon;
                const iconUrl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
                const weatherInfo = {temp: temp, description: description, iconUrl: iconUrl,icon:icon};
                res.json(weatherInfo);
            } catch (e) {
                console.log('Error: ' + e.message);
                
                const weatherInfo = {temp:"", description:"Error: Invalid city name", iconUrl: ""};
                res.json(weatherInfo);
                
            }
        });
    });



    
})

 app.get("/signup",function(req,res){
    // res.sendFile( __dirname + "/signup.html")
    res.render('sign', { myAtrr: 'hidden',myAtrr2:'hidden' });


});

app.post("/signup",function(req,res){

    const firstName = req.body.name
    const email = req.body.email
 
    var data = {
        members: [
            {
                email_address:email,
                status:"subscribed",
                merge_fields: {
                    FNAME: firstName,
                    
                }
            }
        ]
    }

    // Converting string data to JSON data

    const jsonData= JSON.stringify(data);

    // const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
    //     "0fd0a05da9af7c22e0cbe2f4233903bc-us21"
    //   );

     const url="https://us21.api.mailchimp.com/3.0/lists/cceff7d63f";
     const options={
       method:"POST",
       auth:"yusuf:"+apiKey
     }
   //On success send users to success, otherwise on failure template 
    const request=https.request(url,options,function(response){
         if(response.statusCode===200){
            res.render('sign', { myAtrr: 'success',myAtrr2: 'hidden' });
        }else{
            res.render('sign', { myAtrr: 'hidden',myAtrr2: 'fail' });
        }
         response.on("data",function(data){
         console.log(JSON.parse(data));
         });
     });

         request.write(jsonData);
         request.end();
    

})



app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000")
})
