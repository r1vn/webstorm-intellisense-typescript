'use strict'

/**
jsdoc description
@param {string} x
@param {string} y
@param {'foo'|'bar'|'baz'} [z='bar']
@return {{ args:string[], opts:{ [key:string]:boolean|string } | void }}
*/

export function fn3 (x, y, z = 'bar')
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