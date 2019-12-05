var http=require('http')
var fs=require('fs')

var server=http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data,'utf-8')
    })
}).listen(3000,'127.0.0.1')

console.log('Server running on 127.0.0.1:3000')

var io=require('socket.io').listen(server)

io.sockets.on('connection',(socket)=>{
    socket.on('message',(data)=>{
        socket.broadcast.emit('push message',data)
    })
})