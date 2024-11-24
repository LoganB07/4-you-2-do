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

export {requestJson, addJson, Project};