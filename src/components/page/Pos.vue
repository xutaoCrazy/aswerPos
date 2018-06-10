<template>
    <div id='pos'>
       <el-row>
            <el-col :span='7' class="pos-bord" id='order-list'>
                我是订单栏
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
  mounted: function () {
    var oderheight = document.body.clientHeight
    document.getElementById('demo').style.height = oderheight + 'px'
  }
}
</script>

<style>
.pos-bord{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
</style>
