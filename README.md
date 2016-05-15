# moveWithArc-FramerJS-module

Module is alowing you to do 3 things 
1. Place an object on elipse 

```
arcMovement.placeOnElipse layerA, 300, 300, 90, 100, 100
```

u run your function with this attributes - layer object, center X of circle, circle Y of center , angle, radiusX, radiusY


2. Move object from one point to other point on screen along the arc, according to current motion guidelines by google
https://www.google.com/design/spec/motion/material-motion.html


```
arcMovement.moveWithArc layerA, 100, 200, 900, 900
```

function attributes layerobject, startPointX, startPointY, endPointX, endPointY



3. You can get x.y position of the object on circle taking its radius

```
circleCoord=arcMovement.circlePoint 500, 500, 360/90, 100, 100
print circleCoord.x, circleCoord.y

```
function attributes -  center X of circle, circle Y of center , angle, radiusX, radiusY


framer examples:

![moving along the arc](https://github.com/mamezito/moveWithArc-FramerJS-module/blob/master/images/arcMovement.gif)
http://share.framerjs.com/7nj9fvk5nybq/

![placing object on elipse](https://github.com/mamezito/moveWithArc-FramerJS-module/blob/master/images/circle1.png)
http://share.framerjs.com/s1x57kfq10za/

![placing object on elipse](https://github.com/mamezito/moveWithArc-FramerJS-module/blob/master/images/circle2.gif)
http://share.framerjs.com/fb47veij7eh1/

![use x.y coordinates from function to put object on circle with animation](https://github.com/mamezito/moveWithArc-FramerJS-module/blob/master/images/circlePoints.gif)
http://share.framerjs.com/h8mo713t66wp/
