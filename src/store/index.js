import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let nextTodoId = 1;

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: nextTodoId++,
        text: "Learn Vue"
      },
      {
        id: nextTodoId++,
        text: "Learn about single-file components"
      },
      {
        id: nextTodoId++,
        text: "Fall in love"
      }
    ]
  },
  mutations: {
    addTodo(state, text) {
      const trimmedText = text.trim();
      if (trimmedText) {
        state.todos.push({
          id: nextTodoId++,
          text: trimmedText
        });
      }
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter(todo => {
        return todo.id !== id;
      });
    }
  },
  actions: {},
  modules: {}
});
