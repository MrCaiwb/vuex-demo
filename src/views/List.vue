<template>
  <div class="list">
   <h3>你好</h3>
    <p>尊敬的<span class="member">{{level}}</span></p>
    <div class="list" v-for="(item, index) in list" :key="index">
      <div class="item" @click="viewResouse(item)">
        <img :src="item.img" alt="">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.num}}</p>
          <p>{{item.class}}</p>
        </div>
      </div>
    </div>
    <button>
      <router-link to="/user">去充值</router-link>
    </button>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        list: [
          {id: 1, img: require('../assets/logo.png'), name: 'Vuex学习', num: 1223, class: '免费课程', level: 0},
          {id: 2, img: require('../assets/logo.png'), name: '实战课程', num: 1223, class: '实战课程', level: 1},
          {id: 3, img: require('../assets/logo.png'), name: 'V12会员专享', num: 1223, class: 'V12会员专享', level: 2}
        ]
      }
    },
    computed: {
      ...mapState(['userInfo', 'level'])
    },
    methods: {
      viewResouse (item) {
        if (this.userInfo > item.level){
          this.$router.push(`/detail/${item.id}`)
        } else {
          this.$toast('等级不够')
        }
      }
    }
  }
</script>
<style scoped lang="less">
.list {
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    img {
      width: 100px;
    }
    div {
      flex: 1;
      display: inline-flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      p:nth-child(2) {
        font-size: 14px;
      }
      p:nth-child(2) {
        color: #aaa;
      }
      p:nth-child(3) {
        color: darkorange;
      }
    }
  }
  button {
    width: 90%;
    background: black;
    text-align: center;
    line-height: 1;
    outline: none;
    border: none;
    padding: 15px 0;
    border-radius: 4px;
    margin: 20px auto 0;
    a {
      color: #fff;
    }
  }
}
</style>