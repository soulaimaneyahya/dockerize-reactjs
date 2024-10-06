const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Wireless Headphones",
      description:
        "High-quality wireless headphones with noise cancellation and 30 hours of battery life.",
      price: "$199.99",
      category: "Electronics",
    },
    {
      id: "2",
      title: "Smartwatch",
      description:
        "Feature-rich smartwatch with fitness tracking, heart rate monitoring, and GPS.",
      price: "$249.99",
      category: "Wearables",
    },
    {
      id: "3",
      title: "4K Ultra HD TV",
      description:
        "55-inch 4K Ultra HD Smart TV with HDR support and built-in streaming apps.",
      price: "$599.99",
      category: "Home Entertainment",
    },
    {
      id: "4",
      title: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with powerful sound and waterproof design.",
      price: "$79.99",
      category: "Audio",
    },
  ]);
});

const SERVER_PORT = process.env.SERVER_PORT || 4000;

app.listen(SERVER_PORT, () => {
  console.log(`listening for requests on port ${SERVER_PORT}`);
});
