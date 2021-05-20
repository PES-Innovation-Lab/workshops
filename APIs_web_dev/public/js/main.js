function renderData(data) {
    const listContainer = document.getElementById('myList');
    let content = '';
    for(const task of data) {
        content += `<li>${task}</li>`
    }
    listContainer.innerHTML = content;
}

function addTask() {
    const task = document.getElementById('myInput').value;
    const data = {
        task
    }
    if(!task) return alert('Cannot submit empty task!');
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Item added succesfully!");
        document.getElementById('myInput').value = '';
        getData();
    }).catch(err => {
        console.log(err);
    })
}

function getData() {
    console.log("getting data!");
    fetch('/tasks')
        .then((res) => res.json())
        .then(res => {
            console.log(res);
            renderData(res);
        })
        .catch(err => {
            console.log(err);
        })
}

getData();