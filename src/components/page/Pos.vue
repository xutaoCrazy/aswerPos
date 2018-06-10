<template>
    <div id='pos'>
       <el-row>
            <el-col :span='7' class="pos-bord" id='order-list'>
                我是订单栏
            </el-col>
            <el-col>
                我是产品栏
            </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
  name: 'pos',
  mounted: function () {
    var oderheight = document.body.clientHeight
    document.getElementById('order-list').style.height = oderheight + 'px'
  }
}
</script>

<style>
.pos-bord{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda
}
</style>
