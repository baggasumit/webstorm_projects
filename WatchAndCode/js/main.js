var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        var todo = this.todos[position];
        todo.todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position,1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        this.todos.forEach(function (todo) {
            if (todo.completed) {
                completedTodos++;
            }
            console.log(this);
        });

        if (completedTodos === totalTodos) {
            this.todos.forEach(function (todo) {
                todo.completed = false;
            });
        } else {
            this.todos.forEach(function (todo) {
                todo.completed = true;
            });
        }
    }
};

var handlers = {
    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoTextInput.value = '';
        changeTodoPositionInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        var todos = todoList.todos;
        todosUl.innerHTML = '';
        todos.forEach(function (todo, position) {
            var todoLi = document.createElement('li');
            var mark = '( )';
            if (todo.completed) {
                mark = '(X)';
            }
            todoLi.id = position;
            todoLi.textContent = `${mark} ${todo.todoText}`;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (event) {
            var elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                var position = parseInt(elementClicked.parentNode.id);
                handlers.deleteTodo(position);
            }
        });
    }
};

view.setUpEventListeners();

