/**
jsdoc description
*/

export function fn2 (x:string, y:string, z:'foo'|'bar'|'baz' = 'bar') : { args:string[], opts: { [opt: string]: boolean | string } } | void
{
    if (Math.random() < 0.5)
    {
        return {
            args: [x, y],
            opts: {
                z: true
            }
        }
    }
} 