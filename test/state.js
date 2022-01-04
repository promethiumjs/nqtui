import { Entity } from "nqtx";
import firstTrigger from "./firstTrigger";

const entity = Entity.create();

entity.particle({
  id: "count",
  initialState: 0,
  mutator: {
    inc({ state, payload }) {
      return state + payload.jump;
    },
  },
});

entity.derivative({
  id: "derivedCount",
  transform: ({ get, payload }) => {
    const animal = get("count");

    return animal + payload.jump;
  },
});

entity.trigger(firstTrigger);

export default entity;
