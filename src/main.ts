import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')

/**
 * 할일 관리 앱 (CRUD)
 * - [x] 할일 조회
 * - [x] 할일 추가
 * - [x] 할일 삭제
 * - [x] 할일 수정
 */
