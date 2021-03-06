//vue实例、  text ，'hello world'
function defineReactive(vm, key, val) {


  var dep = new Dep();//初始化依赖收集的过程

  Object.defineProperty(vm, key, {
    get: function () {
      //1. 返回数据 
      //2. 收集依赖 
      //收集依赖
      //当前使用这个key的属性的一个watcher
      if (Dep.target) {  //watcher
        dep.addSub(Dep.target);//Dep.target==?watcher
      }
      return val;
    },

    set: function (newVal) {
      if (newVal === val) return;
      val = newVal;
      dep.notify();//通知watcher
    }
  })
}



/**
  obj:{text: 'hello world'}
  vm: vue实例 
*/
function observe(obj, vm) {
  Object.keys(obj).forEach(function (key) {
    //text
    defineReactive(vm, key, obj[key]);
  })
}