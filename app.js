const app = new Vue ({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Buttare la spazzatura',
                done: false,
            }
        ]
    },
    methods: {
        addTodo: function() {
            if( this.newTodo === '' ){
                return;
            }
            this.todoList.push( {text:this.newTodo, done: false} );
            this.newTodo = '';
        },
        deleteTodo: function( i ) {
            this.todoList.splice(i,1)
        },
    },
})