import { Component, html } from "nqtui";
import Game from "./src/components/Game";
import "./index.css";

const NewGame = Component.createRoot(Game, { renderContainer: "body" });
NewGame.emitEvent("renderRoot");
