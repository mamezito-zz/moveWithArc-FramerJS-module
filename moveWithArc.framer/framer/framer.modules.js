require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pointer":[function(require,module,exports){
exports.Pointer = (function() {
  var clientCoords, coords, offsetArgumentError, offsetCoords, screenArgumentError;

  function Pointer() {}

  Pointer.screen = function(event, layer) {
    var e, screenCoords;
    if (!((event != null) && (layer != null))) {
      screenArgumentError();
    }
    e = offsetCoords(event);
    if (e.x && e.y) {
      screenCoords = layer.screenFrame;
      e.x += screenCoords.x;
      e.y += screenCoords.y;
    } else {
      e = clientCoords(event);
    }
    return e;
  };

  Pointer.offset = function(event, layer) {
    var e, targetScreenCoords;
    if (!((event != null) && (layer != null))) {
      offsetArgumentError();
    }
    e = offsetCoords(event);
    if (!((e.x != null) && (e.y != null))) {
      e = clientCoords(event);
      targetScreenCoords = layer.screenFrame;
      e.x -= targetScreenCoords.x;
      e.y -= targetScreenCoords.y;
    }
    return e;
  };

  offsetCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.offsetX, e.offsetY);
  };

  clientCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.clientX, e.clientY);
  };

  coords = function(x, y) {
    return {
      x: x,
      y: y
    };
  };

  screenArgumentError = function() {
    error(null);
    return console.error("Pointer.screen() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.screen(event, layer)");
  };

  offsetArgumentError = function() {
    error(null);
    return console.error("Pointer.offset() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.offset(event, layer)");
  };

  return Pointer;

})();


},{}],"arcMovement":[function(require,module,exports){
exports.moveWithArc = function(layer, startPointX, startPointY, endPointX, endPointY) {
  var arc, proxy;
  arc = function(counter, layer, x1, y1, x2, y2) {
    layer.midX = startPointX - Math.sin((counter + 180) * Math.PI / 180) * (endPointX - startPointX);
    return layer.midY = endPointY - Math.cos((counter + 180) * Math.PI / 180) * (startPointY - endPointY);
  };
  proxy = new Layer({
    width: 0,
    height: 0,
    backgroundColor: "null"
  });
  proxy.states.add({
    finish: {
      x: 360
    }
  });
  proxy.states.next();
  return proxy.on("change:x", function() {
    return arc(proxy.x / 4, layer, startPointX, startPointY, endPointX, endPointY);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvd29yay9mcmFtZXIvbXkvYXJjL21vdmVXaXRoQXJjLmZyYW1lci9tb2R1bGVzL1BvaW50ZXIuY29mZmVlIiwiL3dvcmsvZnJhbWVyL215L2FyYy9tb3ZlV2l0aEFyYy5mcmFtZXIvbW9kdWxlcy9hcmNNb3ZlbWVudC5jb2ZmZWUiLCIvd29yay9mcmFtZXIvbXkvYXJjL21vdmVXaXRoQXJjLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ29CTSxPQUFPLENBQUM7QUFLYixNQUFBOzs7O0VBQUEsT0FBQyxDQUFBLE1BQUQsR0FBVSxTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ1QsUUFBQTtJQUFBLElBQUEsQ0FBQSxDQUE2QixlQUFBLElBQVcsZUFBeEMsQ0FBQTtNQUFBLG1CQUFBLENBQUEsRUFBQTs7SUFDQSxDQUFBLEdBQUksWUFBQSxDQUFhLEtBQWI7SUFDSixJQUFHLENBQUMsQ0FBQyxDQUFGLElBQVEsQ0FBQyxDQUFDLENBQWI7TUFFQyxZQUFBLEdBQWUsS0FBSyxDQUFDO01BQ3JCLENBQUMsQ0FBQyxDQUFGLElBQU8sWUFBWSxDQUFDO01BQ3BCLENBQUMsQ0FBQyxDQUFGLElBQU8sWUFBWSxDQUFDLEVBSnJCO0tBQUEsTUFBQTtNQU9DLENBQUEsR0FBSSxZQUFBLENBQWEsS0FBYixFQVBMOztBQVFBLFdBQU87RUFYRTs7RUFhVixPQUFDLENBQUEsTUFBRCxHQUFVLFNBQUMsS0FBRCxFQUFRLEtBQVI7QUFDVCxRQUFBO0lBQUEsSUFBQSxDQUFBLENBQTZCLGVBQUEsSUFBVyxlQUF4QyxDQUFBO01BQUEsbUJBQUEsQ0FBQSxFQUFBOztJQUNBLENBQUEsR0FBSSxZQUFBLENBQWEsS0FBYjtJQUNKLElBQUEsQ0FBQSxDQUFPLGFBQUEsSUFBUyxhQUFoQixDQUFBO01BRUMsQ0FBQSxHQUFJLFlBQUEsQ0FBYSxLQUFiO01B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QUFBLEdBQU0sR0FBUCxDQUFBLEdBQWUsSUFBSSxDQUFDLEVBQXBCLEdBQXlCLEdBQWxDLENBQUEsR0FBdUM7QUFGdEM7Ozs7QUNuQnRCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgYnkgSm9yZGFuIFJvYmVydCBEb2Jzb24gb24gMTQgQXVndXN0IDIwMTVcbiMgXG4jIFVzZSB0byBub3JtYWxpemUgc2NyZWVuICYgb2Zmc2V0IHgseSB2YWx1ZXMgZnJvbSBjbGljayBvciB0b3VjaCBldmVudHMuXG4jXG4jIFRvIEdldCBTdGFydGVkLi4uXG4jXG4jIDEuIFBsYWNlIHRoaXMgZmlsZSBpbiBGcmFtZXIgU3R1ZGlvIG1vZHVsZXMgZGlyZWN0b3J5XG4jXG4jIDIuIEluIHlvdXIgcHJvamVjdCBpbmNsdWRlOlxuIyAgICAge1BvaW50ZXJ9ID0gcmVxdWlyZSBcIlBvaW50ZXJcIlxuI1xuIyAzLiBGb3Igc2NyZWVuIGNvb3JkaW5hdGVzOiBcbiMgICAgIGJ0bi5vbiBFdmVudHMuQ2xpY2ssIChldmVudCwgbGF5ZXIpIC0+IHByaW50IFBvaW50ZXIuc2NyZWVuKGV2ZW50LCBsYXllcilcbiMgXG4jIDQuIEZvciBsYXllciBvZmZzZXQgY29vcmRpbmF0ZXM6IFxuIyAgICAgYnRuLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LCBsYXllcikgLT4gcHJpbnQgUG9pbnRlci5vZmZzZXQoZXZlbnQsIGxheWVyKVxuI1xuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIGV4cG9ydHMuUG9pbnRlclxuXG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIFB1YmxpYyBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXHRAc2NyZWVuID0gKGV2ZW50LCBsYXllcikgLT5cblx0XHRzY3JlZW5Bcmd1bWVudEVycm9yKCkgdW5sZXNzIGV2ZW50PyBhbmQgbGF5ZXI/XG5cdFx0ZSA9IG9mZnNldENvb3JkcyBldmVudFxuXHRcdGlmIGUueCBhbmQgZS55XG5cdFx0XHQjIE1vdXNlIEV2ZW50XG5cdFx0XHRzY3JlZW5Db29yZHMgPSBsYXllci5zY3JlZW5GcmFtZVxuXHRcdFx0ZS54ICs9IHNjcmVlbkNvb3Jkcy54XG5cdFx0XHRlLnkgKz0gc2NyZWVuQ29vcmRzLnlcblx0XHRlbHNlXG5cdFx0XHQjIFRvdWNoIEV2ZW50XG5cdFx0XHRlID0gY2xpZW50Q29vcmRzIGV2ZW50XG5cdFx0cmV0dXJuIGVcblx0XHRcdFxuXHRAb2Zmc2V0ID0gKGV2ZW50LCBsYXllcikgLT5cblx0XHRvZmZzZXRBcmd1bWVudEVycm9yKCkgdW5sZXNzIGV2ZW50PyBhbmQgbGF5ZXI/XG5cdFx0ZSA9IG9mZnNldENvb3JkcyBldmVudFxuXHRcdHVubGVzcyBlLng/IGFuZCBlLnk/XG5cdFx0XHQjIFRvdWNoIEV2ZW50XG5cdFx0XHRlID0gY2xpZW50Q29vcmRzIGV2ZW50XG5cdFx0XHR0YXJnZXRTY3JlZW5Db29yZHMgPSBsYXllci5zY3JlZW5GcmFtZVxuXHRcdFx0ZS54IC09IHRhcmdldFNjcmVlbkNvb3Jkcy54XG5cdFx0XHRlLnkgLT0gdGFyZ2V0U2NyZWVuQ29vcmRzLnlcblx0XHRyZXR1cm4gZVxuXHRcblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHJpdmF0ZSBIZWxwZXIgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHRcblx0b2Zmc2V0Q29vcmRzID0gKGV2KSAgLT4gZSA9IEV2ZW50cy50b3VjaEV2ZW50IGV2OyByZXR1cm4gY29vcmRzIGUub2Zmc2V0WCwgZS5vZmZzZXRZXG5cdGNsaWVudENvb3JkcyA9IChldikgIC0+IGUgPSBFdmVudHMudG91Y2hFdmVudCBldjsgcmV0dXJuIGNvb3JkcyBlLmNsaWVudFgsIGUuY2xpZW50WVxuXHRjb29yZHMgICAgICAgPSAoeCx5KSAtPiByZXR1cm4geDp4LCB5Onlcblx0XG5cdCMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHQjIEVycm9yIEhhbmRsZXIgTWV0aG9kcyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0XG5cdHNjcmVlbkFyZ3VtZW50RXJyb3IgPSAtPlxuXHRcdGVycm9yIG51bGxcblx0XHRjb25zb2xlLmVycm9yIFwiXCJcIlxuXHRcdFx0UG9pbnRlci5zY3JlZW4oKSBFcnJvcjogWW91IG11c3QgcGFzcyBldmVudCAmIGxheWVyIGFyZ3VtZW50cy4gXFxuXG5cdFx0XHRFeGFtcGxlOiBsYXllci5vbiBFdmVudHMuVG91Y2hTdGFydCwoZXZlbnQsbGF5ZXIpIC0+IFBvaW50ZXIuc2NyZWVuKGV2ZW50LCBsYXllcilcIlwiXCJcblx0XHRcdFxuXHRvZmZzZXRBcmd1bWVudEVycm9yID0gLT5cblx0XHRlcnJvciBudWxsXG5cdFx0Y29uc29sZS5lcnJvciBcIlwiXCJcblx0XHRcdFBvaW50ZXIub2Zmc2V0KCkgRXJyb3I6IFlvdSBtdXN0IHBhc3MgZXZlbnQgJiBsYXllciBhcmd1bWVudHMuIFxcblxuXHRcdFx0RXhhbXBsZTogbGF5ZXIub24gRXZlbnRzLlRvdWNoU3RhcnQsKGV2ZW50LGxheWVyKSAtPiBQb2ludGVyLm9mZnNldChldmVudCwgbGF5ZXIpXCJcIlwiIiwiI2F1dGhvciBTZXJnaXkgVm9yb25vdiB0d2l0dGVyLmNvbS9tYW1leml0byBkcmliYmJsZS5jb20vbWFtZXppdG9cbiNkb25lIGZvciBGcmFtZXIgTG9uZG9uIGZyYW1lcmxvbmRvbi5jb21cblxuXG5leHBvcnRzLm1vdmVXaXRoQXJjPShsYXllciwgc3RhcnRQb2ludFgsIHN0YXJ0UG9pbnRZLCBlbmRQb2ludFgsIGVuZFBvaW50WSktPlxuXHRhcmM9KGNvdW50ZXIsbGF5ZXIsIHgxLCB5MSwgeDIsIHkyKS0+XG5cdFx0bGF5ZXIubWlkWD1zdGFydFBvaW50WC1NYXRoLnNpbigoY291bnRlcisxODApICAqIE1hdGguUEkgLyAxODApKihlbmRQb2ludFgtc3RhcnRQb2ludFgpXG5cdFx0bGF5ZXIubWlkWT1lbmRQb2ludFktTWF0aC5jb3MoKGNvdW50ZXIrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSooc3RhcnRQb2ludFktZW5kUG9pbnRZKVxuXG5cdHByb3h5ID0gbmV3IExheWVyXG5cdFx0d2lkdGg6IDBcblx0XHRoZWlnaHQ6IDBcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwibnVsbFwiXG5cblx0cHJveHkuc3RhdGVzLmFkZFxuXHRcdGZpbmlzaDpcblx0XHRcdHg6IDM2MFxuXG5cdHByb3h5LnN0YXRlcy5uZXh0KClcblxuXHRwcm94eS5vbiBcImNoYW5nZTp4XCIsIC0+XG5cdFx0YXJjIHByb3h5LngvNCwgbGF5ZXIsIHN0YXJ0UG9pbnRYLCBzdGFydFBvaW50WSwgZW5kUG9pbnRYLCBlbmRQb2ludFlcblxuZXhwb3J0cy5wbGFjZU9uRWxpcHNlPShsYXllciwgY2VudGVyWCwgY2VudGVyWSwgYW5nbGUsIHJhZGl1c1gsIHJhZGl1c1kpLT5cblx0XHRsYXllci5taWRYPWNlbnRlclgtTWF0aC5zaW4oKGFuZ2xlKzE4MCkgICogTWF0aC5QSSAvIDE4MCkqcmFkaXVzWFxuXHRcdGxheWVyLm1pZFk9Y2VudGVyWS1NYXRoLmNvcygoYW5nbGUrMTgwKSAgKiBNYXRoLlBJIC8gMTgwKSpyYWRpdXNZXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
