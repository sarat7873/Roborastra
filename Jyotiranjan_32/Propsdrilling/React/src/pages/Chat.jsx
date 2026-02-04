import { useEffect, useState } from "react";
import { connectSocket, disconnectSocket } from "../services/socket";

export default function Chat() {
  const [status, setStatus] = useState("connecting");

  useEffect(() => {
    let mounted = true;

    connectSocket()
      .then(socket => {
        if (!mounted) return;
        setStatus("connected");
        socket.on("message", msg => console.log(msg));
      })
      .catch(() => setStatus("offline"));

    return () => {
      mounted = false;
      disconnectSocket();
    };
  }, []);

  return <div>Chat status: {status}</div>;
}
