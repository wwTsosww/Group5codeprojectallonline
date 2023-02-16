  const express = require("express");
const app = express();
const connection = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const session = require("express-session");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new session.MemoryStore();

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);
//ท็อป
const register = async (req, res) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const name = req.body.name;
  const email = req.body.email;
  let role = "user";
  try {
    const conn = await connection;
    const user = await conn.query("SELECT * FROM users WHERE username = ?", [
      name,
    ]);
    if (user[0].length > 0) {
      res.send({ message: "ชื่อผู้ใช้นี้มีอยู่แล้วกรุณากรอกข้อมูลใหม่" });
    } else {
      await conn.execute(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, hashedPassword, role]
      );
      const token = jwt.sign({ name, email, role }, "secret_key", {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000),
      });
      res.status(200).send("OK");
    }
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  register
}