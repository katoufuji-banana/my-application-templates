import express from "express";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import yaml from "js-yaml";

import { helloWorld, echo } from "./controller";

const encoding = "utf8"
const filePath = path.resolve('./config/app.yaml')

const yamlText = fs.readFileSync(filePath, encoding)
const config = yaml.safeLoad(yamlText);

const app = express()
  .use(morgan("common"))
  .use(express.json())
  .use(express.static('static'))
  .get('/hello', helloWorld)
  .post('/echo', echo);

const server = app.listen(config.port, () =>
  console.log("Node.js is listening to PORT:" + server.address().port)
);

