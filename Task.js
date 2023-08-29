
let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This is Home Page.');
    }else if(req.url === '/about'){
        res.end('This is About Page.')
    }else if(req.url === '/contact'){
        res.end('This is Contact Page.')
    }else if(req.url === '/file-write'){
        fs.writeFile('./demo.txt','hello world',(err,data)=>{
            if(err){
                res.writeHead(200);
                res.write('File creation failed!');
                res.end();
            }else{
                res.writeHead(200);
                res.write('File creation successful!');
                res.end();
            }
        })
    }
})

server.listen(3000);

console.log('Server is running...');