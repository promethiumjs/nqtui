import { Component } from "nqtui";
import { Entity } from "nqtx";
import App from "./src/components/App";
import entity from "./state";
import "./index.css";

Component.createRoot(App, { renderContainer: "body" });
Component.use(entity);
