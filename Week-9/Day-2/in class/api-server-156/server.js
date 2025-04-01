const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/products.router.js");

const app = express();
app.use(cors());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/** body-parser */
app.use(express.json());

app.use("/products", productRouter);
