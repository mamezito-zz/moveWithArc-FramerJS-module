# moveWithArc-FramerJS-module

Module is alowing you to do 2 things 
1. Place an object on elipse 

'''
arcMovement.placeOnElipse layerA, 300, 300, 90, 100, 100
'''

u run your function with this attributes - layer object, center X of circle, circle Y of center , angle, radiusX, radiusY


2. Move object from one point to other point on screen along the arc, according to current motion guidelines by google
[https://www.google.com/design/spec/motion/material-motion.html]


'''arcMovement.moveWithArc layerA, layerA.x, layerA.y, pos.x, pos.y'''

function attributes layerobject, startPointX, startPointY, endPointX, endPointY


framer examples:

http://share.framerjs.com/7nj9fvk5nybq/

http://share.framerjs.com/s1x57kfq10za/

http://share.framerjs.com/fb47veij7eh1/
