const express=require("express");
const redis=require("redis");
const process=require("process")

const app=express();
/* Docker-compose make container known to each other with hostname as they are 
created in the same network. 

Info: if two containers are in default network(ex: bridge), they can be connected only by IP address. If containers are connected in user-created network, then containers can be accessed by hostname
*/
const client=redis.createClient({
    host: "redis-server",  //https://192.168.1.20:8080 or https://my-redis-server.com
    port: 6379
});

client.set('visits',0)
app.get('/',(req,res)=> {
    process.exit(0)
    client.get("visits",(err,visits)=>{
        res.send("Number of visits is" + visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081,()=>{
    console.log("Listen on port 8081");
});
 