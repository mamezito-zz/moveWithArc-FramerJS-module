#author Sergiy Voronov twitter.com/mamezito dribbble.com/mamezito
#done for Framer London framerlondon.com


exports.moveWithArc=(layer,  endPointX, endPointY, time)->

	layer.animate
		x:endPointX
		options:
			curve: Bezier.easeIn
			time: time
	layer.animate
		y:endPointY
		options:
			curve: Bezier.easeOut
			time: time


exports.placeOnElipse=(layer, centerX, centerY, angle, radiusX, radiusY)->
		layer.midX=centerX-Math.sin((angle+180)  * Math.PI / 180)*radiusX
		layer.midY=centerY-Math.cos((angle+180)  * Math.PI / 180)*radiusY
