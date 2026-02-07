const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Routes
server.use("/users", router);

server.listen(PORT, () => {
  console.log("JSON Server running on port " + PORT);
});
