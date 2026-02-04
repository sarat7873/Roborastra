export function createRealtimeClient() {
  let listeners = [];

  return {
    connect() {
      console.log("Realtime connected (mock)");
    },

    onMessage(cb) {
      listeners.push(cb);

      // simulate incoming messages
      setInterval(() => {
        cb("Mock message from server");
      }, 3000);
    },

    disconnect() {
      listeners = [];
      console.log("Realtime disconnected");
    }
  };
}
