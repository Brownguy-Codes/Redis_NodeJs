const redis = require('redis');
const client = redis.createClient({
      host: 'iris_redis' ,
      port: 6379 ,
      password:'tpstps'
   });

  console.log("Connecting ...");

client.on('error', err => {
    console.log('Error ' + err);
    console.log("In error.");
 });
 
client.on('connect', function() {
  console.log('Connected!');
  console.time();
  console.log("before setting");
for(var i=0;i<5;i++)
{
  client.set('new_key_'+i+2,"Test Message_"+i+2,function(err,reply){
    console.log(reply);
  });
}
console.log("setting end");


console.log("before getting");
for(var i=0;i<5;i++){

  client.get('new_key_'+i+2,function(err,reply){
    console.log(reply);
    });
}
console.log("getting end");
console.timeEnd();

});
