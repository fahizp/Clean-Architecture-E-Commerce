import { Server } from "http";

const serverConfig = (server: Server) => {
  const startServer = () => {
    server.listen(6000, () => {
      console.log(`Server listening on Port 6000`);
    });
  };

  return { startServer };
};

export default serverConfig;
