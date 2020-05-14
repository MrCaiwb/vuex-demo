<template>
  <div class="user">
    <h2>用户中心</h2>
    <ul>
      <li>
        <span>账号：</span>
        <span>{{user}}</span>
      </li>
      <li>
        <span>会员等级：</span>
        <span>{{level}}</span>
      </li>
    </ul>
    <ul class="list" v-for="(item, index) in list" :key="index">
      <li>{{item.name}}</li>
      <li>
        <span>{{item.count}} / 天</span>
        <span @click="pay(item)">购买</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        list: [
          {id: 1, img: require('../assets/logo.png'), name: 'Vuex学习', count: 1223, class: '免费课程', level: 2},
          {id: 2, img: require('../assets/logo.png'), name: '实战课程', count: 1223, class: '实战课程', level: 2},
          {id: 3, img: require('../assets/logo.png'), name: 'V12会员专享', count: 1223, class: 'V12会员专享', level: 3}
        ]
      }
    },
    computed: {
      ...mapState(['level', 'user'])
    },
    methods: {
      ...mapActions(['buy']),
      pay (item) {
        this.buy(item).then((res) => {
          this.$toast(res)
          setTimeout(() => {
            this.$router.push('/list')
          }, 1000)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  ul,li {
    list-style: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .list {
    width: 90%;
    display: flex;
    margin: 10px 5%;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    li {
      display: flex;
    }
    span {
      flex: 1;
      &:last-child {
        flex: none;
        padding: 5px 10px;
        border: 1px solid #000;
        border-radius: 4px;
      }
    }
  }
</style>