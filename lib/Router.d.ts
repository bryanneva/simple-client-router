import { Observable } from "./Observable";
export interface Route {
    readonly matcher: string;
    readonly name: string;
}
export declare class Router extends Observable {
    private currentRoute?;
    readonly routes: {
        [name: string]: Route;
    };
    constructor(currentRoute?: string | undefined);
    getCurrentPath(): string;
    register(name: string, matcher: string): Route;
    goTo(name: string): void;
}
