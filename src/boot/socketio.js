// Here we are initializing the socketio client and making it globally avail
// that way we can "inject" in component versus having to redeclare socketio
// in every file
import io from 'socket.io-client';

export default ({ app }) => {
    const socket = io(process.env.SOCKETS_API_URL);
    app.config.globalProperties.$socket = socket;
    app.provide('socket', socket);
};
