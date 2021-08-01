so this is a quick test of webstorm intellisense in JS projects with dependencies compiled from TS.  
webstorm 2021.02. TS is compiled with bundled-in typescript 4.3.5

## test

typescript version:

```typescript
/**
jsdoc description
*/

export function fn (x:string, y:string, z:'foo'|'bar'|'baz' = 'bar') : { args:string[], opts: { [opt: string]: boolean | string } } | void
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
```

plain js version:

```javascript
/**
jsdoc description
@param {string} x
@param {string} y
@param {'foo'|'bar'|'baz'} [z='bar']
@return {{ args:string[], opts:{ [key:string]:boolean|string } | void }}
*/

export function fn (x, y, z = 'bar')
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
```

## results

- including `.d.ts` file alone has a problem - default values of params are unknown, so the tooltip is incomplete
- including `.ts` file produces a complete tooltip, but at the steep cost of at least doubling the size of the library
- [jsdoc with TS types]((https://blog.jetbrains.com/webstorm/2021/06/webstorm-2021-2-eap-4/#support_for_typescript_types_in_jsdoc)) produces a slightly different but complete tooltip

![tooltip-fn](https://raw.githubusercontent.com/r1vn/webstorm-intellisense-typescript/master/tooltip-fn.png)
![tooltip-param](https://raw.githubusercontent.com/r1vn/webstorm-intellisense-typescript/master/tooltip-param.png)