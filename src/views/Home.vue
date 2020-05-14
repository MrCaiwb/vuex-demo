<template>
  <div class="home">
    <h3>登录</h3>
    <input type="text" v-model="name" placeholder="请输入用户名">
    <input type="password" v-model="password" placeholder="请输入密码">
    <button @click="tologin">登录</button>


    <van-swipe class="swiper-wrap" @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>

      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
      </div>
    </van-swipe>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      current: 0,
      name: '', // 用户名
      password: '' // 密码
    }
  },
  computed: {
    ...mapState(['userInfo', 'count'])
  },
  methods: {
    ...mapMutations(['addCount', 'reduceCount', 'setInfo']),
    ...mapActions(['login']),
    onChange(index) {
      this.current = index
    },
    tologin () {
      this.login({name: this.name, password: this.password}).then((res) => {
        this.$toast(res)
        this.$router.push('/list')
      })
    },
    reduce () {
      const num = 1
      this.reduceCount(num)
    }
  }
}
</script>
<style lang="less" scoped>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .home {
    .swiper-wrap {
      width: 100%;
      height: 300px;
      border: 1px solid #000;
    }
    .van-swipe-item {
      height: 100%;
    }
    .custom-indicator {
      height: 50px;
      position: absolute;
      top: 0;
    }
    h3 {
      text-align: center;
      line-height: 50px;
    }
    input {
      width: 90%;
      height: 40px;
      margin: 0 auto 10px;
      display: block;
      border-radius: 6px;
      outline: none;
      border: 1px solid #000;
      padding: 0 10px;
    }
    button {
      width: 90%;
      height: 40px;
      display: block;
      margin: 10px auto 0;
      outline: none;
      border: 1px solid #000;
      text-align: center;
      line-height: 1;
      border-radius: 6px;
      background: none;
    }
  }
</style>
