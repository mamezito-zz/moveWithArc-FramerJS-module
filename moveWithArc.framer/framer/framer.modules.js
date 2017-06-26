require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arcMovement":[function(require,module,exports){
exports.moveWithArc = function(layer, endPointX, endPointY, time) {
  layer.animate({
    x: endPointX,
    options: {
      curve: Bezier.easeIn,
      time: time
    }
  });
  return layer.animate({
    y: endPointY,
    options: {
      curve: Bezier.easeOut,
      time: time
    }
  });
};

exports.placeOnElipse = function(layer, centerX, centerY, angle, radiusX, radiusY) {
  layer.midX = centerX - Math.sin((angle + 180) * Math.PI / 180) * radiusX;
  return layer.midY = centerY - Math.cos((angle + 180) * Math.PI / 180) * radiusY;
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL21hbWV6aXRvL3dvcmsvZnJhbWVyL215L21vdmV3aXRoYXJjL21vdmV3aXRoYXJjLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL21hbWV6aXRvL3dvcmsvZnJhbWVyL215L21vdmV3aXRoYXJjL21vdmV3aXRoYXJjLmZyYW1lci9tb2R1bGVzL2FyY01vdmVtZW50LmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiNhdXRob3IgU2VyZ2l5IFZvcm9ub3YgdHdpdHRlci5jb20vbWFtZXppdG8gZHJpYmJibGUuY29tL21hbWV6aXRvXG4jZG9uZSBmb3IgRnJhbWVyIExvbmRvbiBmcmFtZXJsb25kb24uY29tXG5cblxuZXhwb3J0cy5tb3ZlV2l0aEFyYz0obGF5ZXIsICBlbmRQb2ludFgsIGVuZFBvaW50WSwgdGltZSktPlxuXG5cdGxheWVyLmFuaW1hdGVcblx0XHR4OmVuZFBvaW50WFxuXHRcdG9wdGlvbnM6XG5cdFx0XHRjdXJ2ZTogQmV6aWVyLmVhc2VJblxuXHRcdFx0dGltZTogdGltZVxuXHRsYXllci5hbmltYXRlXG5cdFx0eTplbmRQb2ludFlcblx0XHRvcHRpb25zOlxuXHRcdFx0Y3VydmU6IEJlemllci5lYXNlT3V0XG5cdFx0XHR0aW1lOiB0aW1lXG5cblxuZXhwb3J0cy5wbGFjZU9uRWxpcHNlPShsYXllciwgY2VudGVyWCwgY2VudGVyWSwgYW5nbGUsIHJhZGl1c1gsIHJhZGl1c1kpLT5cblx0XHRsYXllci5taWRYPWNlbnRlclgtTWF0aC5zaW4oKGFuZ2xlKzE4MCkgICogTWF0aC5QSSAvIDE4MCkqcmFkaXVzWFxuXHRcdGxheWVyLm1pZFk9Y2VudGVyWS1NYXRoLmNvcygoYW5nbGUrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSpyYWRpdXNZXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxXQUFSLEdBQW9CLFNBQUMsS0FBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsSUFBL0I7RUFFbkIsS0FBSyxDQUFDLE9BQU4sQ0FDQztJQUFBLENBQUEsRUFBRSxTQUFGO0lBQ0EsT0FBQSxFQUNDO01BQUEsS0FBQSxFQUFPLE1BQU0sQ0FBQyxNQUFkO01BQ0EsSUFBQSxFQUFNLElBRE47S0FGRDtHQUREO1NBS0EsS0FBSyxDQUFDLE9BQU4sQ0FDQztJQUFBLENBQUEsRUFBRSxTQUFGO0lBQ0EsT0FBQSxFQUNDO01BQUEsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFkO01BQ0EsSUFBQSxFQUFNLElBRE47S0FGRDtHQUREO0FBUG1COztBQWNwQixPQUFPLENBQUMsYUFBUixHQUFzQixTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDLE9BQWpDLEVBQTBDLE9BQTFDO0VBQ3BCLEtBQUssQ0FBQyxJQUFOLEdBQVcsT0FBQSxHQUFRLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBQyxLQUFBLEdBQU0sR0FBUCxDQUFBLEdBQWUsSUFBSSxDQUFDLEVBQXBCLEdBQXlCLEdBQWxDLENBQUEsR0FBdUM7U0FDMUQsS0FBSyxDQUFDLElBQU4sR0FBVyxPQUFBLEdBQVEsSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFDLEtBQUEsR0FBTSxHQUFQLENBQUEsR0FBZSxJQUFJLENBQUMsRUFBcEIsR0FBeUIsR0FBbEMsQ0FBQSxHQUF1QztBQUZ0Qzs7OztBRGR0QixPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQTtTQUNwQixLQUFBLENBQU0sdUJBQU47QUFEb0I7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIn0=
