import Entity from "nqtx";
import firstTrigger from "./firstTrigger";

const entity = Entity.create();

entity.derivative({
  id: "derivedCount",
  transform: ({ get, payload }) => {
    const animal = get("count");

    return animal + payload.jump;
  },
});

entity.trigger(firstTrigger);

export default entity;
