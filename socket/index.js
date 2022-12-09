import { Server } from "socket.io";

const io = new Server({ 
    cors: {
        orign: "http://localhost:3000"
    }
 });

io.on("connection", (socket) => {
  // ...
    console.log("someone has connected");
    socket.on("disconnect", () => {
        console.log("someone has left")
    })
});

io.listen(5000);