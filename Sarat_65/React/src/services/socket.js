let socket = null;

export async function connectSocket() {
  const { io } = await import("socket.io-client");

  socket = io("http://localhost:3000", {
    autoConnect: true
  });

  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}
