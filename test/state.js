import Entity from "nqtx";
import firstTrigger from "./firstTrigger";

const entity = Entity.create();

entity.particle({
  id: "count-1",
  initialState: 0,
  previousState: true,
  mutator: {
    inc({ state, payload }) {
      return state + payload.jump;
    },
  },
});

entity.derivative({
  id: "derivedCount",
  previousState: true,
  transform: ({ get, payload }) => {
    const animal = get("count-1");

    return animal + payload.jump;
  },
});

entity.trigger(firstTrigger);

export default entity;
