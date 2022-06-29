import Entity from "nqtx";
import firstTrigger from "./firstTrigger";

const entity = Entity.create();

entity.particle({
  id: "count-1",
  initialState: 0,
  previousState: true,
  mutations: {
    inc({ state, payload }) {
      return state + payload.jump;
    },
  },
  actions: {
    inc({ $context, payload }) {
      console.log($context.state);
      $context.commit("inc", payload);

      return $context.state;
    },
  },
});

entity.catalyst({
  id: "inc-cat",
  actions: {
    inc({ getContext, payload }) {
      const $count1 = getContext("count-1");
      console.log($count1.state);
      $count1.commit("inc", payload);

      return $count1.get();
    },
  },
});

entity.particle({
  id: "count-2",
  initialState: 0,
  previousState: true,
  mutations: {
    inc({ state, payload }) {
      return state + payload.jump;
    },
  },
});

entity.derivative({
  id: "derivedCount",
  transform: ({ getState }) => {
    const animal = getState("count-1");

    return animal;
  },
});

entity.trigger(firstTrigger);

export default entity;
