<template>
  <div class="home">
    <van-tabs :line-width="0" :animated="true" v-model="tabsActive">
      <van-tab title="标签 1">
        <Item1></Item1>
      </van-tab>
      <van-tab title>
        <Item2></Item2>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
import Item1 from './item1'
import Item2 from './item2'

export default {
  name: "Login",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    Item1,
    Item2
  },
  data() {
    return {
      tabsActive: 0
    };
  },

  methods: {}
  // mounted() {
  //   this.getTableList();
  // }
};
</script>

<style>
.home .van-tab:nth-child(1) {
  background: url("../../../assets/1.png");
  background-size: 100% 100%;
}
.home .van-tab:nth-child(2) {
  background: url("../../../assets/2.png");
  background-size: 100% 100%;
}
.home .van-tab:nth-child(1).van-tab--active {
  background: url("../../../assets/1_active.png") no-repeat;
  background-size: 100% 100%;
}
.home .van-tab:nth-child(2).van-tab--active {
  background: url("../../../assets/2_active.png") no-repeat;
  background-size: 100% 100%;
}
</style>