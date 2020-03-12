<template>
  <div class="todo">
    <h1>My Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoList
  }
};
</script>
