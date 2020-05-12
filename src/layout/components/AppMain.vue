<template>
  <section class="app-main">
    <h2>父亲组件</h2>
    <p>count计算结果 ：
      <strong>{{ count }}</strong>
    </p>
    <el-button size="small" @click="addFn">+</el-button>
    <el-button size="small" @click="subtractFn">-</el-button>
    <el-input
      v-model="inputdte"
      :autosize="{ minRows: 1, maxRows: 4 }"
      type="textarea"
    />
    {{ inputdte }}
    <div>
      <child />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Child from './chind'

export default {
  name: 'AppMain',
  components: {
    Child
  },
  data: function() {
    return {
      inputdte: ''
    }
  },
  computed: {
    ...mapState({
      count: state => state.app.count
    })
  },
  methods: {
    ...mapActions(['add', 'subtract']),
    addFn() {
      this.add()
    },
    subtractFn() {
      this.subtract()
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
  margin-top: 100px;
}

</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
