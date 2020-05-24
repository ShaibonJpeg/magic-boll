import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
// Init VK  Mini App
bridge.send("VKWebAppInit");
let arr = ["I",
					"go",
					"home",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go",
					"go"];
      alert( randomInteger(0, 20) );

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
