class Project {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    tasks = [];
}

function requestJson() {
    const jsonString = localStorage.getItem("projects");
    let array = JSON.parse(jsonString);
    return array;
}

function addJson(item) {
    let jsonString = localStorage.getItem("projects");
    console.log(jsonString);
    let array;
    if (jsonString != null) {
        array = JSON.parse(jsonString);
        array.push(item);
    }
    else {
        array = [item]
        console.log(array);
    }
    jsonString = JSON.stringify(array);
    console.log(jsonString);
    localStorage.setItem("projects", jsonString);
}

function recieveData(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let array = [];
    for (let key of formData.entries()) {
        console.log(key);
        array.push(key);
    }
    console.log(array);
    let project = new Project(array[0][1], array[1][1], array[2][1], array[3][1]);
    console.log(project);
    addJson(project);
}

export {requestJson, addJson, recieveData, Project};