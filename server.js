express = require("express");
const app = express();
const port = "3030";
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`recommends listening on port ${port}`);
});
