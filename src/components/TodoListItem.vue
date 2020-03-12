<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">x</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>
