<template>
  <div class="home">
    <van-tabs 
      :line-width="0"
      :animated="true"
       v-model="tabsActive">
      <van-tab title="标签 1">
        <van-list
          v-model="vantListLoading"
          :finished="vantListFinished"
          finished-text="没有更多了"
          @load="getTableList"
        >
          <van-cell v-for="item in listData" :key="item.key" :title="item.county" />
        </van-list>
      </van-tab>
      <van-tab title="标签 2">
        <van-list
          v-model="vantListLoading2"
          :finished="vantListFinished2"
          finished-text="没有更多了"
          @load="getTableList2"
        >
          <van-cell v-for="item in listData2" :key="item.key" :title="item.nameEN" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import * as apiServices from "@/services/api";
import { List, Cell, Tab, Tabs } from "vant";

export default {
  name: "Login",
  data() {
    return {
      tabsActive: 0,
      status: 1,
      listData: [],
      vantListFinished: false,
      vantListLoading: false,
      listData2: [],
      vantListFinished2: false,
      vantListLoading2: false
    };
  },
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },

  methods: {
    getTableList() {
      this.vantListLoading = true;
      apiServices
        .getTableList().then(res => {
          if (res.code === 0) {
            this.listData = this.listData.concat(res.data.list);
            this.vantListLoading = false;


            // 添加终止 加载动作
            if (this.listData.length > 100) {
              this.vantListFinished = true
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTableList2() {
      this.vantListLoading2 = true;
      apiServices
        .getTableList2().then(res => {
          if (res.code === 0) {
            this.listData2 = this.listData2.concat(res.data.list);
            this.vantListLoading2 = false;


            // 添加终止 加载动作
            if (this.listData.length > 100) {
              this.vantListFinished2 = true
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  // mounted() {
  //   this.getTableList();
  // }
};
</script>

<style>
.home .van-tab:nth-child(1) {
  background: red;
}
.home .van-tab:nth-child(2) {
  background: blue;
}
</style>