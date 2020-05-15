<template>
  <div>
    <van-list
      v-model="vantListLoading"
      :finished="vantListFinished"
      finished-text="没有更多了"
      @load="getTableList"
    >
      <van-cell v-for="item in listData" :key="item.key" :title="item.county" />
    </van-list>
  </div>
</template>
<script>
import * as apiServices from "@/services/api";
import { Cell, List } from "vant";
export default {
  name: "Item1",
  data () {
    return {
      listData: [],
      vantListFinished: false,
      vantListLoading: false,
    }
  },
  components: {
    [Cell.name]: Cell,
    [List.name]: List
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
  }
};
</script>