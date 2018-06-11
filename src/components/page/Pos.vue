<template>
    <div id='pos'>
       <el-row>
            <el-col :span='7' class="pos-bord" id='order-list'>
               <el-tabs >
                 <el-tab-pane label='收银'>
                   <el-table :data='tableData' border style='width:100'>
                     <el-table-column prop="goodsName" label="商品名称" ></el-table-column>
                     <el-table-column prop="count" label="数量" width='50' ></el-table-column>
                     <el-table-column prop="price" label="单价" width='70'></el-table-column>
                     <el-table-column  label="操作" fixed='right' width='100'>
                       <template scope='scope'>
                        <el-button type='text'  size='small'>删除</el-button>
                        <el-button type='text'  size='samll'>增加</el-button>
                       </template>
                     </el-table-column>

                   </el-table>
                   <div class='div-btn'>
                     <el-button type='warning' @click='add'>挂单</el-button>
                     <el-button type='danger'>删除</el-button>
                     <el-button type='success'>结账</el-button>
                   </div>
                 </el-tab-pane>
                 <el-tab-pane label='挂单'>
                 </el-tab-pane>
                 <el-tab-pane label='结账'>
                 </el-tab-pane>
               </el-tabs>
            </el-col>
            <el-col :span='17' id=''>
                我是产品栏77
            </el-col>
       </el-row>
       <!-- <el-container id='demo'>
        <el-aside width="200px">
            <ul id='ulid'>
                <li>我是导航栏一</li>
                <li>我是导航栏一</li>
                <li>我是导航栏一</li>
                <li>我是导航栏一</li>
                <li>我是导航栏一</li>
            </ul>
        </el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container> -->
    </div>
</template>
<script>
export default {
  name: 'pos',
  data () {
    return {
      tableData: ''
    }
  },
  mounted: function () {
    var oderheight = document.body.clientHeight
    document.getElementById('order-list').style.height = oderheight + 'px'
  },
  methods: {
    add () {
      var url = "http://127.0.0.1:8088/get";
      var $this = this;
      this.$ajax({
        method: "get",
        url: url
      }).then(function(res) {
        console.log(res.data);
        $this.tableData=res.data;
      });
    }
  },
   created () {
    var url = "http://127.0.0.1:8088/get";
      var $this = this;
      this.$ajax({
        method: "get",
        url: url
      }).then(function(res) {
        console.log(res.data);
        $this.tableData=res.data;
      });
  }
}
</script>

<style>
.pos-bord{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda
}

#ulid{
    padding: 0px;
    margin: 0px;
}
#ulid li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding:10px;
}
.div-btn{
  margin-top: 10px
}
</style>
