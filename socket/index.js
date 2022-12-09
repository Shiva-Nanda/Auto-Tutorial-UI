import { Server } from "socket.io";


const io = new Server({
    cors: {
        orign: "http://localhost:3000"
    }
});
let onlineUsers = []
io.on("connection", (socket) => {
  // ...
    [
        {
            username: "Maahi..!",
            socketId: "aaa"
        },
        {
            username: "Shiva",
            socketId: "bbb"
        },
        {
            username: "testing",
            socketId: "ccc"
        }
        
    ]
    
    socket.on("disconnect", () => {
       
    })
});

io.listen(5000);