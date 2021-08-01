"use strict";
/**
jsdoc description
*/
exports.__esModule = true;
exports.fn2 = void 0;
function fn2(x, y, z) {
    if (z === void 0) { z = 'bar'; }
    if (Math.random() < 0.5) {
        return {
            args: [x, y],
            opts: {
                z: true
            }
        };
    }
}
exports.fn2 = fn2;
