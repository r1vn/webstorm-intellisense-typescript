/**
jsdoc description
*/
export declare function fn1(x: string, y: string, z?: 'foo' | 'bar' | 'baz'): {
    args: string[];
    opts: {
        [opt: string]: boolean | string;
    };
} | void;
