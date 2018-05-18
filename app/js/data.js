function loadDataToLSFromFiles(listName, file1, file2) {
    loadData(file1).then(res => storeData(res, listName));
    loadData(file2).then(res => storeData(res, listName));
}

function loadData(file) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            items = JSON.parse(xhr.responseText);
            resolve(JSON.stringify(items));
        };
    });
}

function storeData(items, listName) {

    let localStorageContent = localStorage.getItem('list');

    let list;
    if (localStorageContent === null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem('list'));
    }

    let resultList = list.concat(JSON.parse(items).data.list);
    localStorage.setItem(listName, JSON.stringify(resultList));
}

module.exports = {
    loadDataToLSFromFiles: loadDataToLSFromFiles
};