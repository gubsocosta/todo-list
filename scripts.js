var todos = [
  {
    text: 'Aprender HTML, CSS e Javascript',
    done: true
  },
  {
    text: 'Aprender o básico de Vue JS',
    done: false
  },
  {
    text: 'Completar o desafio de Vue JS com excelência',
    done: false
  }
];

const todoApp = {
  data() {
    return {
      todos: window.todos,
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
