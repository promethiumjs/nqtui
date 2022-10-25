import { TemplateResult, RootPart } from "lit-html";
/**
 * This is the component type
 */
export declare type Component<T = null> = T extends null ? (props?: null) => () => TemplateResult : (props: T) => () => TemplateResult;
/**
 * This is the render function
 */
export declare function render(Component: Component<{
    renderContainer: string | HTMLElement | DocumentFragment;
    renderOptions?: Object;
}>, props: {
    renderContainer: string | HTMLElement | DocumentFragment;
    renderOptions?: Object;
}): () => RootPart;
//# sourceMappingURL=render.d.ts.map