1. 2018年六月十号 开始做项目

##### 项目设计图初稿
![image](https://github.com/xutaoCrazy/aswerPos/blob/master/src/assets/pos.png)
    
```
graph TD
    A[首页]--> b(左侧导航栏)
    A[首页]--> c(结账)
    A[首页]--> d(食品区域)
    b(左侧导航栏)--> 收银,会员统计
    c(结账)--> 结账,挂单,外卖
    d(食品区域)-->  热销食品,选择食品
```
>完成侧边导航栏功能