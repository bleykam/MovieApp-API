const express = require("express");
const app = express();
const fs = require("node:fs");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const readWatchlist = () => JSON.parse(fs.readFileSync("./data.json")).watchlist;
const writeWatchlist = (list) => {
  const data = JSON.parse(fs.readFileSync("./data.json"));
  data.watchlist = list;
  fs.writeFileSync("./data.json", JSON.stringify(data));
};

app
  .route("/watchlist")
  .get((req, res) => {
    res.json(readWatchlist());
  })
  .post((req, res) => {
    const { id } = req.body;
    const watchhlist = readWatchlist();
    watchhlist.push(`${id}`);
    writeWatchlist(watchhlist);
    res.json(watchhlist);
  });

app.delete("/watchlist/:id", (req, res) => {
  const { id } = req.params;
  const watchhlist = readWatchlist();
  const newWatchlist = watchhlist.filter((movieId) => movieId !== id);

  console.log({ id, watchhlist, newWatchlist });
  writeWatchlist(newWatchlist);
  res.json(newWatchlist);
});

app.listen(8080, () => console.log("Server is running | " + new Date()));
