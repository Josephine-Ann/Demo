function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    if (data.slice(0, 7) === 'PENDING' && ev.target.id === 'done' || data.slice(0, 8) === 'REJECTED' && ev.target.id === 'done' || data.slice(0, 4) === 'DONE' && ev.target.id === 'rejected') {
        ev.target.appendChild(document.getElementById(data));
        ev.preventDefault();
        document.getElementById(data).innerText = `${ev.target.id.toUpperCase()}`
        document.getElementById(data).id = `${ev.target.id.toUpperCase()}${data[data.length - 2]}${data[data.length - 1]}`
    }
}