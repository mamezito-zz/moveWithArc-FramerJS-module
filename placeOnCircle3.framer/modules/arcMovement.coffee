#author Sergiy Voronov twitter.com/mamezito dribbble.com/mamezito
#done for Framer London framerlondon.com


exports.moveWithArc=(layer, startPointX, startPointY, endPointX, endPointY)->
	arc=(counter,layer, x1, y1, x2, y2)->
		layer.midX=startPointX-Math.sin((counter+180)  * Math.PI / 180)*(endPointX-startPointX)
		layer.midY=endPointY-Math.cos((counter+180)  * Math.PI / 180)*(startPointY-endPointY)

	proxy = new Layer
		width: 0
		height: 0
		backgroundColor: "null"

	proxy.states.add
		finish:
			x: 360

	proxy.states.next()

	proxy.on "change:x", ->
		arc proxy.x/4, layer, startPointX, startPointY, endPointX, endPointY

exports.placeOnElipse=(layer, centerX, centerY, angle, radiusX, radiusY)->
	layer.midX=centerX-Math.sin((angle+180)  * Math.PI / 180)*radiusX
	layer.midY=centerY-Math.cos((angle+180)  * Math.PI / 180)*radiusY

exports.circlePoint=(centerX, centerY, angle, radiusX, radiusY)->
		x=centerX-Math.sin((angle+180)  * Math.PI / 180)*radiusX
		y=centerY-Math.cos((angle+180)  * Math.PI / 180)*radiusY
		return x:x, y:y
