let data = require('./data.js');
let render = require('./render.js');

init();

function init() {
    render.renderPage();
    setBtnHandlers();
}

function setBtnHandlers() {

    let showBtn = document.querySelector('#getList');
    showBtn.addEventListener('click', function () {

        let lsList = localStorage.getItem('list');

        if (!lsList) {
            data.loadDataToLSFromFiles('list', 'data_1.json', 'data_2.json');
            location.reload();
        }
    });

    let clearBtn = document.querySelector('#clearList');
    clearBtn.addEventListener('click', function () {
        localStorage.clear();
        render.clearRenderedBeforeData(document.querySelectorAll('.rendered'));
    });

    let reloadBtn = document.querySelector('#reloadPage');
    reloadBtn.addEventListener('click', function () {
        location.reload();
    });
}






