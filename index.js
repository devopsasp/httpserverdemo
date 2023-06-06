import http from 'http'
import fs from 'fs'
const server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/')
    {
    fs.readFile('index.html','utf8',(err,data)=>{
        
        res.write(data)
        res.end()
    })
    }
    if(req.method=='POST' && req.url=='/saveorder')
    {
    
        req.on('data',(data)=>{
          const  itemdata=data.toString().split("&")
            console.log(itemdata[0])
            console.log(itemdata[1])

        })
        res.write("<h1>Order received successfully</h1>")
        res.end()
    }
    
})
server.listen(5050)