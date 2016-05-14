arcMovement = require "arcMovement"


layerB = new Layer
	x: 230
	y: 187
	borderRadius: 100
	borderWidth: 2
	borderColor: "rgba(255,255,255,0.5)"
	backgroundColor: "rgba(255,255,255,0)"
layerB.center()
	
amount=10
for i in [0..amount]
	layerA = new Layer
		borderRadius: 100
		width: 50
		height: 50
		backgroundColor: "white"
#	layer object, center X of circle, circle Y of center , angle, radiusX, radiusY
	arcMovement.placeOnElipse layerA, layerB.midX, layerB.midY, 360/amount*i, 100, 100

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(46,181,255,1)"

	