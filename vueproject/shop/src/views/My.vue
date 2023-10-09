<template id="temp">
    <!-- vue实例外创建 -->
    <div>
      个人中心
    </div>
  </template>
  <script>
  export default {
    name:'My',
    methods: {
      goto() {
        // 前进
        this.$router.forward()
      },
      back() {
        // 后退
        this.$router.back()
      },
      gogo() {
          this.$router.go(1)
      },
      look() {
        this.$router.push('shop')
      },
    },
  };
  </script>
  