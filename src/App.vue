<template>
  <div id="app">
    <div class="container">
      <h1>vantElementNotice  统一对话框 API 示例</h1>
      <p class="intro">
        这个示例展示了如何在使用不同UI框架的项目中，通过统一的API接口调用弹框组件。<br>
        无论项目使用 Element UI 还是 Vant UI，都可以使用相同的代码调用对话框。
      </p>
      
      <dialog-example></dialog-example>
      
    </div>
  </div>
</template>

<script>
import DialogExample from './components/DialogExample.vue'

export default {
  name: 'App',
  components: {
    DialogExample
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.component-demo {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
}

h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}

.intro {
  margin-bottom: 30px;
  color: #666;
  line-height: 1.6;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #409EFF;
}
</style>
