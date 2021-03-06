
//vue构造函数
/**
{
    el: 'app',
    data: {
      text: 'hello world'
    }
  }
 */
function Vue(options) {

  this.data = options.data;//{text: 'hello world'} 数据挂载到实例上面去 

  var data = this.data;

  observe(data, this); //监听数据 get、set （没有触发）

  var id = options.el; //app

  //模板



  /**
     <input type="text" id="a" v-model="text">
    {{text}}
  */
  //  触发依赖收集
  var dom = new Compile(document.getElementById(id), this);

  // 数据已经变为99
  document.getElementById(id).appendChild(dom);
}