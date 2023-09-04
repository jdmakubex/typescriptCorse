"use strict";
(() => {
    const error = (message = 'string') => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Holamundo');
})();
//# sourceMappingURL=never.js.map