import { Component } from "../package/src/index.js";
import child from "./child.js";

const app = new Component();

app.addChild(child, "child");
app.addChildren(child, "children", 9);
console.log(app);

app.children.children[0].state.app = 4;
console.log(app.children.children[5].state.app);
