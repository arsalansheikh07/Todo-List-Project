import inquirer from "inquirer";
// inqurier done
// array done
// function done
// operators
let todos = ["arsalan", "kamran",];
async function creatTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete",]
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add iteam in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            // console.log(addTodo);
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update iteam in the list",
                name: "todo",
                choices: todos.map(iteam => iteam)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add iteam in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("**********************");
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update iteam in the list",
                name: "todo",
                choices: todos.map(iteam => iteam)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
creatTodo(todos);
