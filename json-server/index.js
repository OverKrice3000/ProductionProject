const https = require(`https`);
const fs = require(`fs`);
const jsonServer = require(`json-server`);
const path = require(`path`);

const args = process.argv.slice(2);
const mode = args[0] ?? `dev`;
const port = args[1] ?? `8000`;
const keyPath = args[2];
const certificatePath = args[3];

const options =
  mode === `prod`
    ? {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certificatePath),
      }
    : {};

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, `db.json`));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  // eslint-disable-next-line
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.post(`/login`, (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, `db.json`), `UTF-8`),
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: `User not found` });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: `AUTH ERROR` });
  }

  next();
});

server.use(router);

const finalServer =
  mode === `prod` ? https.createServer(options, server) : server;

finalServer.listen(Number.parseInt(port), () => {
  console.log(`server is running on ${port} port`);
});
