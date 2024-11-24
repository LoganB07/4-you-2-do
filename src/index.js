import "./styles.css";
import {loadHomepage} from "./home.js";
import {addJson, Project} from "./logic.js"


localStorage.clear();
let project = new Project("TEST", "TEST", "00/00/0000", "low");
addJson(project);

project = new Project("TEST", "TEST", "00/00/0000", "low");
addJson(project);

loadHomepage();