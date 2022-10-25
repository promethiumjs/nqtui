import { Effect } from "../adaptEffect/effectTypes";
export declare type State<T> = {
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
export declare type Getter<T> = () => T;
export declare type Setter<T> = (nextValue: T) => void;
//# sourceMappingURL=stateTypes.d.ts.map