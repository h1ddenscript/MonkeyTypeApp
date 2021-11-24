const store = require('electron-store');

module.exports = new store({
    defaults: {
        theme: {
            bgcolor: "#323437",
            caretcolor: "#e2b714"
        },
        appconfig: {
            devtools: false
        }
    }
});