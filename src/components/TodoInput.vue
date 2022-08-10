<template>
  <div>
    <label for="todo-input" />
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    item: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(event: any) {
      this.$emit('input', event.target.value)
    },
    addTodo() {
      console.log('🤩🤩🤩 영우의 로그 : ', 'add')
    },
  },
})
</script>

<style scoped></style>
