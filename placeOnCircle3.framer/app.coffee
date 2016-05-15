arcMovement = require "arcMovement"

	
amount=10

for i in [0...amount]
	layerA = new Layer
		borderRadius: 100
		width: 50
		height: 50
		x:10*i
		y:10*i
		scale:0
		opacity:0
		backgroundColor: "white"
#	layer object, center X of circle, circle Y of center , angle, radiusX, radiusY
		circleCoord=arcMovement.circlePoint Screen.width/2, Screen.height/2, 360/amount*i, 100, 100
	layerA.animate
		properties:
			midX:circleCoord.x
			midY:circleCoord.y
			scale:1
			opacity:1
		delay:0.1*i+5
		curve: "spring(150, 10, 0)"
	

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(46,181,255,1)"

	