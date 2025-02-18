const http=require("http");

const server=http.createServer((req,res)=>{

    res.write("hello world");
    res.end("response provided")
})

server.listen("3101","192.168.1.4",()=>{
    console.log("server is running")
})