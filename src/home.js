import {requestJson} from "./logic.js";
//Dom Manipulation for the homepage
function loadHomepage() {
    removeAllElements();
    const body = document.getElementById("body");
    body.classList.add("homepage")
    createHeader();

    //Creates Project List
    const projectListBox = document.createElement("div");
    projectListBox.classList.add("project-list");
    body.appendChild(projectListBox);

    let projects = requestJson();
    console.log(projects);

    projects.forEach(project => {
        let card = document.createElement("div");
        card.classList.add("project-card");

        switch (project.priority) {
            case "high": 
                card.classList.add("high");
                break;
            case "mid":
                card.classList.add("mid");
                break;
            case "low": 
                card.classList.add("low");
                break;
        }

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("project-info");
        let name = document.createElement("div");
        name.textContent = project.name;
        nameDiv.appendChild(name);
        card.appendChild(nameDiv);

        let dueDiv = document.createElement("div");
        dueDiv.classList.add("project-info");
        let due = document.createElement("div");
        due.textContent = project.dueDate;
        dueDiv.appendChild(due);
        card.appendChild(dueDiv);
    
        projectListBox.appendChild(card);
        
    });
}

function createHeader() {
    const body = document.getElementById("body")
    const header = document.createElement("div");
    header.classList.add("header");
    createHeaderTitle(header);
    createHeaderBtn(header);
    body.appendChild(header);
}

function createHeaderTitle(header){
    const title = document.createElement("div");
    title.classList.add("header-title");
    title.textContent = "4 YOU 2 DO";
    header.appendChild(title);
}

function createHeaderBtn(header) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.textContent = "ADD NEW PROJECT";
    btn.addEventListener("click", ()=>{
        loadProjectForm();
    })
    header.appendChild(btn);
}

function loadProjectForm() {
    console.log("Button Pressed");
    removeAllElements();
    const body = document.getElementById("body");
    body.classList.remove("homepage");
    body.classList.add("project-form");
    createTitle(body);
    createCancelBtn(body);
    //createForm(body);
}

function createTitle(body) {
    let title = document.createElement("div");
    title.classList.add("header-title")
    title.textContent = "ADD NEW PROJECT";
    body.appendChild(title);
}

function createCancelBtn(body) {
    let btn = document.createElement("button");
    btn.classList.add("cancel");
    btn.addEventListener("click", ()=> {
        removeAllElements();
        loadHomepage();
    });
    body.appendChild(btn)
}

function removeAllElements(){
    let body = document.getElementById("body");
    while(body.lastChild) {
        body.removeChild(body.firstChild);
    }
}

export {loadHomepage};