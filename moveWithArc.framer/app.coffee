arcMovement = require 'arcMovement'
layerA = new Layer
		borderRadius: 100
		width: 50
		height: 50
		backgroundColor: "red"


layerA.center()

area = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "null"		
	
area.on Events.Click, (event, layer) ->	
	arcMovement.moveWithArc layerA,  event.pageX, event.pageY, 0.3