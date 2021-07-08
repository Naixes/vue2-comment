vue  

vue2 

vue3


Web Components  


1. vue 架构 
2. 双向数据绑定 
3. 



vue      +      react  (fiber) 


编译时优化       运行时优化 


vue 双向数据绑定 
    
    语法模板 


    <div>
    {{data.map(()=>{

    })}}
    </div> 

React 
    jsx  ==> React.CreateElement  

    把标签替换成js的创建方法 ==>语法唐 

     React.CreateElement
    {{data.map(()=>{
        
    })}}
    </div> 





dist :   

    runtime  运行时   ==> 反应 内存里的数据状态

        虚拟dom
        响应式数据


    compile 编译时    写的代码==> 认识的代码

    vue teamplate ==> 编译时 (离线编译、在线编译)



     only Runtime     运行时 
     Runtime+compiler    运行时 + 编译器代码

flow(js类型框)    ts (语言)


new vue ({
    teamplate:<vue> 
});


packages  
    vue-loader    vue(teamplate==>js)
    SSR 



compiler 编译代码  










core   runtime'
 


platform  

sfc


component ==> vuex    ==> vue 

 ```js
 // Vue
with(this){
  //创建虚拟dom
  return _c('div',{attrs:{"id":"app"}},[_c('div',[(message)?_c('h2',[_v(_s(message))]):_e(),_v(" "),_c('button',{on:{"click":showName}},[_v("showName")]),_v(" "),(v)?_c('div',[_m(0)]):_e()])])
}
 ```
模板分析不出来 

vue模板 里面  => js 语句   ==>   bable core   

```js
// hack 
with(this){
  return _c('div',{attrs:{"id":"app"}},[_c('div',[(message)?_c('h2',[_v(_s(message? showName : 2))]):_e(),_v(" "),_c('button',{on:{"click":showName}},[_v("showName")]),_v(" "),(v)?_c('div',[_m(0)]):_e()])])
}
// VNode  
```

message? showName : data

this.message?this.showName:this.data


vue3 离线编译 集成js编译器分析js
     在线编译 with 


vue2 正则匹配模板  ==> 回溯 
   静态节点的优化(编译时分析)

vue3 状态机 

```js
var obj={}
var a;
Object.defineProperty(obj,'a',{
    get:function(){
        console.log('get val');
        return a;

        //get {{times}} 添加Dep
    },
    set:function(newVal){
        console.log('set val:'+newVal);
        a=newVal;
        //update
    }
});

```



Vnode diff 

重写数据的某一个key   get set   


数组 对象    新增的key？？    $set 


数组操作 ==> 频繁的get set 
vue 重写了 ??

指令 


watcher 关系 


watcher    directive 

observer  响应式数据

dep 
1. 收集  什么？  Watcher
2. 通知  谁 什么？


一个指令   对应一个watcher   


watcher    ??内存   ==> 1. 定向修改到dom节点 ==> no dom diff

一个组件component     watcher   定向更新到组件  ==> dom diff


vue ==> 定向到某一个组件 render  ==> 维护一套映射关系  ==> 内存（响应式数据、watcher、render）


react  jsx ==> Element  ==> fiber(dom 修改)==>fiber diff (中断) ==> EffectTag ==> 修改  (中断)    

进程  CPU BFC


update
 1.no Vnode  
 2. render ==> Vnode 
 3. Vnode ==> dom

 1. old node
 2. render ==> Vnode 
 3. diff  old Vnode Vnode
 4. 定向修改




1. vue 批量更新 


2. vue Keep Alive算法 

  LRU  最新、最常使用的 
  https://leetcode-cn.com/problems/lru-cache/ 

3. vue2、vue3 模板处理解析区别

vue2 正则匹配  回溯缺点     vue3 状态机  


/yd{1,3}c/ 
ydddc 


y   /y 
yd  yd{1}
ydd ydd{2}
yddd yddd{3}
ydddc yddd{3}c

yddc 

yd yd{1}
ydd yd{2}

yddc yd{3}

ydd yd{2}  
yddc   ydd{2}c

/yd{1,3}ddc

ydddc

y  y
yd   yd{1}
ydd  yd{2}
yddd  yd{3}

ydddc yd{3}d

yddc  yd{3}d
ydd  yd{2}
yddc yd{2}d

yd   yd{1}
yd   yd{1}
ydd  yd{1}d
yddd  yd{1}dd
ydddc  yd{1}ddc

贪婪 




状态机 


var a=1+2 

string 
空格
string
符号
数字
符号
数字
var，a，=，1，+，2 (Token)

var a= 1+2


