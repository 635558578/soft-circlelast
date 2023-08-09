import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  console.log(111)
  const currentBar = ref('divinatory-circle')
  function changeCurrentBar(bar: string) {
    currentBar.value = bar
  }

  return { currentBar, changeCurrentBar }
})
