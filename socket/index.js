import { useTransition } from "react";
import { Server } from "socket.io";


const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET','POST']
    }
});

let onlineUsers = []

const addNewUser = (username, socketId) => {
    !onlineUsers.some(user => user.username === username) &&
        onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId);
};

const getUser = (username) => {
    return onlineUsers.find(user => user.username === username);
}

io.on("connection", (socket) => {
    io.emit("firstEvent","Hello this is test")

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
    });

    socket.on("sendLike", (data) => {
        const { senderName, receiverName, type } = data;
        io.to(receiverName.socketId).emit("getNotification", {
            senderName,
            type
        })
    })

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });
});

io.listen(5000);