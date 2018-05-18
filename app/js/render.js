function renderPage() {
    let lsList = localStorage.getItem('list');
    if (lsList) {
        renderData(JSON.parse(lsList), document.querySelector('#products_wrapper'));
    }
}

function renderData(list, template) {

    let pattern = document.querySelector('#item_pattern');

    list.forEach(i => {
            let item = pattern.cloneNode(true);
            item.classList.remove('pattern');
            item.classList.add('rendered');

            let title = item.querySelector('.title');
            let id = item.querySelector('.id');

            title.innerHTML = 'Title: ' + i.title;
            id.innerHTML = 'Id: ' + i.id;

            item.removeAttribute('id');
            template.appendChild(item);
        }
    )
}

function clearRenderedBeforeData(list) {
    list.forEach(element => element.parentNode.removeChild(element));
}

module.exports = {
    renderPage: renderPage,
    clearRenderedBeforeData: clearRenderedBeforeData
};