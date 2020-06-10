import { Observable } from "./Observable";
export interface Route {
    readonly matcher: string;
    readonly name: string;
}
export interface RouteRegistry {
    [name: string]: Route;
}
interface RouterConfig {
    currentRoute?: string;
    routes?: RouteRegistry;
}
export declare class Router extends Observable {
    private currentRoute;
    readonly routes: RouteRegistry;
    constructor(config?: Partial<RouterConfig>);
    getCurrentPath(): string;
    register(name: string, matcher: string): Route;
    goTo(name: string): void;
}
export {};
