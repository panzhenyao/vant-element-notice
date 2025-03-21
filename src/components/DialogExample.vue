<template>
  <div class="dialog-example">
    <h2>统一对话框 API 示例</h2>
    <p>当前检测到使用的UI框架: <strong>{{ detectedFramework }}</strong></p>
    <p>当前指定的框架偏好: <strong>{{ configuredFramework || '自动检测' }}</strong></p>
    
    <div class="section">
      <h3>UI 框架切换</h3>
      <div class="button-group">
        <button class="btn btn-primary" @click="switchToElement">切换到 Element UI</button>
        <button class="btn btn-primary" @click="switchToVant">切换到 Vant</button>
        <button class="btn btn-primary" @click="switchToAuto">自动检测</button>
      </div>
    </div>
    
    <div class="section">
      <h3>消息提示 (Message)</h3>
      <div class="button-group">
        <button class="btn" @click="showInfoMessage">信息提示</button>
        <button class="btn btn-success" @click="showSuccessMessage">成功提示</button>
        <button class="btn btn-warning" @click="showWarningMessage">警告提示</button>
        <button class="btn btn-danger" @click="showErrorMessage">错误提示</button>
      </div>
    </div>
    
    <div class="section">
      <h3>警告框 (Alert)</h3>
      <div class="button-group">
        <button class="btn" @click="showBasicAlert">基本警告框</button>
        <button class="btn" @click="showCustomAlert">自定义警告框</button>
      </div>
    </div>
    
    <div class="section">
      <h3>确认框 (Confirm)</h3>
      <div class="button-group">
        <button class="btn" @click="showBasicConfirm">基本确认框</button>
        <button class="btn btn-warning" @click="showCustomConfirm">自定义确认框</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogExample',
  computed: {
    detectedFramework() {
      return this.$ELEMENT ? 'Element UI' : 'Vant'
    },
    configuredFramework() {
      return this.$vantElementConfig?.framework
    }
  },
  methods: {
    // UI 框架切换
    switchToElement() {
      this.$vantElementConfig.framework = 'element'
      this.$utils.message.success('已切换到 Element UI')
    },
    switchToVant() {
      this.$vantElementConfig.framework = 'vant'
      this.$utils.message.success('已切换到 Vant')
    },
    switchToAuto() {
      this.$vantElementConfig.framework = this.$ELEMENT ? 'element' : 'vant'
      this.$utils.message.success('已切换到自动检测模式')
    },
    
    // Message examples
    showInfoMessage() {
      this.$utils.message({
        message: '这是一条信息提示',
        type: 'info'
      })
    },
    showSuccessMessage() {
      this.$utils.message.success('操作成功')
    },
    showWarningMessage() {
      this.$utils.message.warning('警告：这是一条警告消息')
    },
    showErrorMessage() {
      this.$utils.message.error('操作失败')
    },
    
    // Alert examples
    showBasicAlert() {
      this.$utils.alert('这是一个简单的警告框')
    },
    showCustomAlert() {
      this.$utils.alert({
        title: '自定义标题',
        message: '这是一个自定义的警告框内容',
        confirmButtonText: '我知道了',
        callback: (action) => {
          this.$utils.message(`Alert closed with action: ${action}`)
        }
      })
    },
    
    // Confirm examples
    showBasicConfirm() {
      this.$utils.confirm('确定要执行此操作吗？')
        .then(() => {
          this.$utils.message.success('操作已确认')
        })
        .catch(() => {
          this.$utils.message.info('操作已取消')
        })
    },
    showCustomConfirm() {
      this.$utils.confirm({
        title: '删除确认',
        message: '此操作将永久删除该文件, 是否继续?',
        confirmButtonText: '确定删除',
        cancelButtonText: '放弃删除',
        type: 'warning'
      })
        .then(() => {
          this.$utils.message.success('删除成功')
        })
        .catch(() => {
          this.$utils.message.info('已取消删除')
        })
    }
  }
}
</script>

<style scoped>
.dialog-example {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  color: #303133;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 10px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #f5f7fa;
}

.btn-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.btn-success {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

.btn-success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
}

.btn-warning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.btn-warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
}

.btn-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
}

.btn-danger:hover {
  background-color: #f78989;
  border-color: #f78989;
}
</style> 