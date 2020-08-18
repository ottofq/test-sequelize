import app from "./server";
import "./database";

app.listen(5000, () => {
  console.log("Server up....");
});
