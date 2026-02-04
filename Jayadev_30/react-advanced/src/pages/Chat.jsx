import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Chat() {
  useEffect(() => {
    socket.on("message", msg => console.log(msg));
  }, []);

  return <div>Socket Connected</div>;
}
