import adaptEffect from "./adaptEffect";
import adaptInstantEffect from "./adaptInstantEffect";
import adaptInvocationEffect from "./adaptInvocationEffect";

function adaptMount(fn) {
  adaptEffect(fn, []);
}

function adaptInstantMount(fn) {
  adaptInstantEffect(fn, []);
}

function adaptInvocationMount(fn) {
  adaptInvocationEffect(fn, []);
}

export { adaptMount, adaptInstantMount, adaptInvocationMount };
