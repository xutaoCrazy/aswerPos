<template>
    <div id='pos'>
       <el-row>
            <el-col :span='7' class="pos-bord" id='order-list'>
               <el-tabs  id='order-auto'>
                 <el-tab-pane label='收银'>
                   <el-table :data='tableData' border style='width:200'>
                     <el-table-column prop="goodsName" label="商品名称" style="margin-left:10px;" ></el-table-column>
                     <el-table-column prop="count" label="数量" width='50' ></el-table-column>
                     <el-table-column prop="price" label="单价" width='70'></el-table-column>
                     <el-table-column  label="操作" fixed='right' width='100'>
                       <template slot-scope='scope'>
                        <el-button type='text'  size='small'  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                        <el-button type='text'  size='samll' @click='addGoodlis(scope.row)'>增加</el-button>
                       </template>
                     </el-table-column>
                   </el-table>
                   <div id='iddroot'>
                    <span>金额：{{ money}}</span>
                    <span>数量：{{ count }}</span>
                   </div>
                   <div class='div-btn'>
                     <el-button type='warning' @click='guadan'>挂单</el-button>
                     <el-button type='danger' @click='remove'>删除</el-button>
                     <el-button type='success' @click='checkout'>结账</el-button>
                   </div>
                 </el-tab-pane>
                 <el-tab-pane label='挂单'>
                    <el-table :data='guadanData' border style='width:200'>
                        <el-table-column prop="goodsName" label="商品名称" style="margin-left:10px;" ></el-table-column>
                        <el-table-column prop="count" label="数量" width='100' ></el-table-column>
                        <el-table-column prop="price" label="单价" width='100'></el-table-column>
                        <!-- <el-table-column  label="操作" fixed='right' width='100'>
                          <template scope='scope'>
                           <el-button type='text'  size='small'  @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
                           <el-button type='text'  size='samll' @click='addGoodlis(scope.row)'>增加</el-button>
                          </template>
                        </el-table-column> -->
                      </el-table>
                      <div id='iddrootgua'>
                          <span>金额：{{ moneygua}}</span>
                          <span>数量：{{ countgua }}</span>
                         </div>
                 </el-tab-pane>
                 <el-tab-pane label='结账'>
                 </el-tab-pane>
               </el-tabs>
            </el-col>
            <el-col :span='17' id=''>
               <div class='often-goods'>
                  <div class='title'>
                     常用商品
                  </div>
                  <div class='often-goods-list'>
                    <ul>
                      <li v-for="often in offgoodsList" :key='often.goodsId' @click="addGoodlis(often)">
                         <span>{{ often.goodsName }}</span>
                         <span class='o-price'>￥{{ often.price }}元</span>
                      </li>
                    </ul>
                  </div>
               </div>
               <div class='goods-type'>
                <el-tabs>
                  <el-tab-pane label='汉堡'>
                    <ul class='cookList'>
                      <li v-for='type in type0list' :key='type.goodsId' @click='addGoodlis(type)'>
                        <span class="foodImg"><img :src="type.goodsImg" width="100%"></span>
                        <span class="foodName">{{ type.goodsName }}</span>
                        <span class="foodPrice">￥{{ type.price }}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label='小食'>小食</el-tab-pane>
                  <el-tab-pane label='饮料'>饮料</el-tab-pane>
                  <el-tab-pane label='套餐'>套餐</el-tab-pane>
                </el-tabs>
               </div>
            </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
  name: 'pos',
  data () {
    return {
      tableData: [],
      offgoodsList: '',
      type0list: '',
      money: 0,
      count: 0,
      guadanData: [],
      moneygua: 0,
      countgua: 0
    }
  },
  mounted: function () {
    var oderheight = document.body.clientHeight
    document.getElementById('order-list').style.height = oderheight + 'px'
    document.getElementById('order-list').style.overflowY = 'auto'
  },
  methods: {
    addGoodlis (goods) {
      debugger
      let isFlag = false
      this.count = 0
      this.money = 0
      for (let i = 0; i < this.tableData.length; i++) {
        if (goods.goodsId === this.tableData[i].goodsId) {
          isFlag = true
        }
      }
      if (isFlag) {
        let arr = this.tableData.filter(o => o.goodsId === goods.goodsId)
        arr[0].count++
        // console.log(arr);
      } else {
        let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1}
        this.tableData.push(newGoods)
      }
      this.tableData.forEach(element => {
        this.count += element.count
        this.money += element.count * element.price
      })
    },
    deleteRow (index, row) {
      row.splice(index, 1)
      this.count = 0
      this.money = 0
      this.tableData.forEach(element => {
        this.count += element.count
        this.money += element.count * element.price
      })
    },
    remove () {
      this.tableData = []
      this.count = 0
      this.money = 0
    },
    guadan () {
      debugger
      for (let i = 0; i < this.tableData.length; i++) {
        this.guadanData.push(this.tableData[i])
      }
      this.guadanData.forEach(element => {
        this.countgua += element.count
        this.moneygua += element.count * element.price
      })
      this.tableData = []
      this.count = 0
      this.money = 0
    },
    checkout () {
      if (this.count !== 0) {
        this.tableData = []
        this.count = 0
        this.money = 0
        this.$message.success('结账成功')
      } else {
        this.$message.error('结账失败')
      }
    }
  },
  created () {
    var urls = 'http://127.0.0.1:8088/gets'
    var urlType = 'http://127.0.0.1:8088/gettype'
    var $this = this
    this.$ajax({
      method: 'get',
      url: urls
    }).then(function (res) {
      $this.offgoodsList = res.data
    })
    this.$ajax({
      method: 'get',
      url: urlType
    }).then(function (res) {
      $this.type0list = res.data
    })
  }
}
</script>

<style scoped>
.pos-bord{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
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
.title{
  height:20px;
  border-bottom:1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left
}
.often-goods-list ul li{
  list-style: none;
  float:left;
  border: 1px solid #E5e9fe;
  padding: 10px;
  margin: 10px;
  background: #fff
}
.o-price{
  columns: #5887ff
}
.goods-type{
  clear: both;
}
.cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
   }
   .cookList li span{
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   #iddroot{
     width: 100%;
     height: 40px;
     border-bottom:1px solid #d8d8d8;
     line-height: 40px;
   }
   #iddrootgua{
     width: 100%;
     height: 40px;
     border-bottom:1px solid #d8d8d8;
     line-height: 40px;
   }
</style>
