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
      todos: window.todos
    };
  }
};

Vue.createApp(todoApp).mount('#app');
