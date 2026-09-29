// Student Activity monitorig System using Event Emitter Module
// Create the events:
// Login: display: Student logged successfully
// Assignment: display:  Assignment Submitted
// LogOut: display student logged out
// Exit: display: Existing application

const EventEmitter= require("events");
// Create EventEmitter object
const student = new EventEmitter();
// Login event
student.on("login", () => {
    console.log("Student logged successfully");
});
// Assignment event
student.on("assignment", () => {
    console.log("Assignment submitted");
});
// Logout event
student.on("logout", () => {
    console.log("Student logged out");
});
// Exit event
student.on("exit", () => {
    console.log("Exiting application");
});
// Trigger events
student.emit("login");
student.emit("assignment");
student.emit("logout");
student.emit("exit");
