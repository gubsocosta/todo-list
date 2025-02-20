const todoApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false
      }
    };
  },
  methods: {
    addTodo: function() {
      if(this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false
        };

        return
      }
      alert('Não é possível criar uma tarefa sem um texto.');
    }
  }
};

Vue.createApp(todoApp).mount('#app');
