export default function swipe (el, callback) {

  let direction,
    startX, startY,
    distX, distY;

  const threshold = 150,
    restraint = 100,
    allowedTime = 300;

  let elapsedTime, startTime;

  const start = function (e) {
    var touchobj = e.changedTouches[0];
    direction = 'none';
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
  };

  const end = function (e) {
    var touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        direction = (distX < 0)? 'left' : 'right';
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        direction = (distY < 0)? 'up' : 'down';
      }
    }
    if(typeof callback == 'function')
      callback(direction);
  }

  el.addEventListener('touchstart', start);
  el.addEventListener('touchend', end);

  return function removeListener () {
    el.removeEventListener('touchstart', start);
    el.removeEventListener('touchend', end);
  };

}
