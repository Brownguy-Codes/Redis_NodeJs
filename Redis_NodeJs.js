const redis = require('redis');
const client = redis.createClient({
      host: "hostname" ,
      port: "Your_Port" ,
      password: "Your_Password"
   });

  console.log("Connecting ...");

client.on('error', err => {
    console.log('Error ' + err);
    console.log("In error.");
 });
 
client.on('connect', function() {
  console.log('Connected!');
  console.time();
for(var i=0;i<5;i++)
{
  client.set('new_key_'+i,"Test Message_"+i,function(err,reply){
    console.log(reply);
  });
}


for(var i=0;i<5;i++){

  client.get('new_key_'+i,function(err,reply){
    console.log(reply);
    });
}

console.timeEnd();

});
