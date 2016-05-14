arcMovement = require "arcMovement"

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(46,181,255,1)"

layerB = new Layer
	x: 230
	y: 187
	borderRadius: 100
	borderWidth: 2
	borderColor: "rgba(255,255,255,0.5)"
	backgroundColor: "rgba(255,255,255,0)"
layerB.center()
	

layerA = new Layer
	borderRadius: 100
	width: 50
	height: 50
	backgroundColor: "white"
	
arcMovement.placeOnElipse layerA, layerB.midX, layerB.midY, 0, 100, 100

slider = new SliderComponent
slider.center()
slider.y+=500
slider.min=0
slider.max=360
slider.on "change:value", ->
	# 	layer object, center X of circle, circle Y of center , angle, radiusX, radiusY
	arcMovement.placeOnElipse layerA, layerB.midX, layerB.midY, this.value, 100, 100
