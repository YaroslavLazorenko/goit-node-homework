/* eslint-disable */

const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = require("../../app");
const { User } = require("../../models");

const { DB_TEST_HOST, PORT } = process.env;

jest.setTimeout(20000);

describe("test login route", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(DB_TEST_HOST).then(() => done());
  });

  afterEach((done) => {
    mongoose.connection.db.dropCollection("users", () => {
      mongoose.connection.close(() => done());
    });
  });

  test("Response status code - 200", async () => {
    const newUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    const user = await User.create(newUser);

    const loginUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginUser);
    expect(response.statusCode).toBe(200);
  });

  test("Response has token", async () => {
    const newUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    const user = await User.create(newUser);

    const loginUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginUser);

    const { body } = response;
    expect(body.token).toBeTruthy();

    const { token } = await User.findById(user._id);
    expect(body.token).toBe(token);
  });

  test("Response has user.email and user.subscription fields with string type", async () => {
    const newUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;

    const user = await User.create(newUser);

    const loginUser = {
      email: "test@test.com",
      password: "qwerty",
    };

    const response = await request(app)
      .post("/api/users/login")
      .send(loginUser);

    const { body } = response;
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");
  });
});
