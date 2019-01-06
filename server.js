express = require("express");
const app = express();
const port = "3040";
const cors = require("cors");
app.use(cors());
require("dotenv").config({ path: __dirname + "/../.env" });

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`recommends listening on port ${port}`);
});
