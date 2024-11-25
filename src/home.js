import {requestJson, recieveData} from "./logic.js";
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

    if (projects != null) {
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
    createForm(body);
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
    btn.textContent = "X";
    btn.addEventListener("click", ()=> {
        removeAllElements();
        body.classList.remove("project-form");
        loadHomepage();
    });
    body.appendChild(btn)
}

function createForm(body) {
    const form = document.createElement("form");
    form.id = "p-form";
    form.addEventListener("submit", recieveData);
    form.addEventListener("submit", ()=>{
        body.classList.remove("project-form")
        loadHomepage();
    });

    //name
    let name = document.createElement("label");
    name.textContent = "Project Name:";
    name.setAttribute("for", "name");
    name.classList.add("name-label");
    form.appendChild(name);

    name = document.createElement("input");
    name.id = "name";
    name.setAttribute("form", "p-form");
    name.setAttribute("name", "name");
    form.appendChild(name);
    //desc
    let desc = document.createElement("label");
    desc.textContent = "Project Description:";
    desc.setAttribute("for", "desc");
    desc.classList.add("desc-label");
    form.appendChild(desc);

    desc = document.createElement("input");
    desc.id = "desc";
    desc.setAttribute("form", "p-form");
    desc.setAttribute("name", "desc");
    form.appendChild(desc);
    //due
    let date = document.createElement("label");
    date.textContent = "Due Date:";
    date.setAttribute("for", "date");
    date.classList.add("date-label");
    form.appendChild(date);

    date = document.createElement("input");
    date.id = "date";
    date.setAttribute("form", "p-form");
    date.setAttribute("name", "date");
    form.appendChild(date);
    //priority
    let priorityLabel = document.createElement("p");
    priorityLabel.textContent = "Select Priority Level";
    priorityLabel.classList.add("pr-label");
    form.appendChild(priorityLabel);

    let priorityContainer = document.createElement("div");
    priorityContainer.classList.add("pr-container");

    let priority = document.createElement("input");
    priority.setAttribute("type", "radio");
    priority.setAttribute("name", "priority");
    priority.setAttribute("value", "high");
    priority.checked = true;
    priority.id = "high";
    priorityContainer.appendChild(priority);

    priority = document.createElement("p");
    priority.textContent = "High";
    priorityContainer.appendChild(priority);

    
    priority = document.createElement("input");
    priority.setAttribute("type", "radio");
    priority.setAttribute("name", "priority");
    priority.setAttribute("value", "mid");
    priority.id = "mid";
    priorityContainer.appendChild(priority);

    priority = document.createElement("p");
    priority.textContent = "Medium";
    priorityContainer.appendChild(priority);

    
    priority = document.createElement("input");
    priority.setAttribute("type", "radio");
    priority.setAttribute("name", "priority");
    priority.setAttribute("value", "low");
    priority.id = "low";
    priorityContainer.appendChild(priority);

    priority = document.createElement("p");
    priority.textContent = "Low";
    priorityContainer.appendChild(priority);

    form.appendChild(priorityContainer);

    let submitBtn = document.createElement("button");
    submitBtn.classList.add("btn", "submit");
    submitBtn.setAttribute("formaction", "./logic.js");
    submitBtn.textContent = "Submit";
    form.appendChild(submitBtn);
    
    body.appendChild(form);
}

function removeAllElements(){
    let body = document.getElementById("body");
    while(body.lastChild) {
        body.removeChild(body.firstChild);
    }
}

export {loadHomepage};