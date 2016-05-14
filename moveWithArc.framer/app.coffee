arcMovement = require "arcMovement"
{Pointer} = require 'Pointer'

backgroundA = new BackgroundLayer
	backgroundColor: "rgba(46,181,255,1)"

layerA = new Layer
		borderRadius: 100
		width: 50
		height: 50
		backgroundColor: "white"


layerA.center()

area = new Layer
	width: Screen.width
	height: Screen.height
	backgroundColor: "null"		
	
area.on Events.Click, (event, layer) ->
	pos = Pointer.screen event, layer
	
	#layerobject, startPointX, startPointY, endPointX, endPointY
	arcMovement.moveWithArc layerA, layerA.x, layerA.y, pos.x, pos.y