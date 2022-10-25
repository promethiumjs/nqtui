import { Effect } from "../adaptEffect/effectTypes";

export type State<T> = {
  syncSubscriptions: {
    one: Set<Effect>;
    two: Set<Effect>;
  };
  memoSubscriptions: {
    one: Set<Effect>;
    two: Set<Effect>;
  };
  asyncAndRenderSubscriptions: Set<Effect>;
  activeSubscriptions: "one" | "two";
  value: T;
};

export type Getter<T> = () => T;
export type Setter<T> = (nextValue: T) => void;
