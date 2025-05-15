(function (doc, win) {
  var docEl = doc.documentElement, //文档根标签
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize", //viewport变化事，获取移动端屏幕是否翻转件源
    recalc = function () {
      //重置方法
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      // 改变DOM根节点fontSize大小的值;
      // (屏幕宽度/设计图宽度) = 缩放或扩大的比例值;
      if (clientWidth >= 640) {
        docEl.style.fontSize = "40px";
      } else {
        docEl.style.fontSize = 40 * (clientWidth / 640) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
