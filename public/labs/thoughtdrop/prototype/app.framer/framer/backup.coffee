# This imports all the layers for "ht" into htLayers2
ht = Framer.Importer.load "imported/ht"

# show hidden frames
ht['detailBottom'].visible = true
ht['detailImage'].visible = true
ht['detailBack'].visible = true
ht['detailArrow'].visible = true
ht['detailLogo'].visible = true

# hide frames
ht['detailBottom'].opacity = 0
ht['detailImage'].opacity = 0
ht['detailBack'].opacity = 0
ht['detailArrow'].opacity = 0
ht['detailLogo'].opacity = 0

# add detail state to each layer
ht['homeTop'].states.add
	detail: { y: -500, opacity: .5 } 
ht['homeBottom'].states.add
	detail: { y: 1500, opacity: .5 }
ht['textRoosevelt'].states.add
	detail: { y: 996 }
 
ht['homeSearchIcon'].states.add
	detail: { opacity: 0 }
ht['homeProfileIcon'].states.add
	detail: { opacity: 0 } 
 
ht['homeTitle'].states.add 
	detail: { x: 0, opacity: 0 } 
 
ht['detailBottom'].states.add
	detail: { opacity: 1 }
ht['detailImage'].states.add
	detail: { opacity: 1 } 
ht['detailBack'].states.add
	detail: { opacity: 1, x: 40 }
ht['detailArrow'].states.add
	detail: { opacity: 1 } 
ht['detailLogo'].states.add
	detail: { opacity: 1, x: 340 } 
 
# click top section for detail view 
ht['homeTop'].on Events.Click, -> 
	ht['homeTop'].states.switch("detail")
	ht['homeBottom'].states.switch("detail")
	ht['textRoosevelt'].states.switch("detail")
	ht['homeProfileIcon'].states.switch("detail")
	ht['homeSearchIcon'].states.switch("detail")
	ht['homeTitle'].states.switch("detail")
	ht['detailBottom'].states.switch("detail")
	ht['detailBack'].states.switch("detail")
	ht['detailArrow'].states.switch("detail")
	ht['detailImage'].states.switch("detail")
	ht['detailLogo'].states.switch("detail")
	
# add animation options
ht['homeTop'].states.animationOptions =
	time: 0.6
ht['homeBottom'].states.animationOptions =
	time: 0.6 
 
ht['textRoosevelt'].states.animationOptions =
	curve: "spring(100,10,0)"
ht['homeSearchIcon'].states.animationOptions =
	time: 0.5
ht['homeProfileIcon'].states.animationOptions =
	time: 0.5
ht['homeTitle'].states.animationOptions =
	time: 0.5
 
ht['detailLogo'].states.animationOptions =
	curve: "linear"
	time: 0.4
ht['detailBack'].states.animationOptions =
	curve: "linear"
	time: 0.4
ht['detailImage'].states.animationOptions =
	time: 1
	
# click back for default view 
ht['detailBack'].on Events.Click, ->
	ht['homeTop'].states.next()
	ht['homeBottom'].states.next()
	ht['textRoosevelt'].states.next()
	ht['homeProfileIcon'].states.next()
	ht['homeSearchIcon'].states.next()
	ht['homeTitle'].states.next()
	ht['detailBottom'].states.next()
	ht['detailBack'].states.next()
	ht['detailArrow'].states.next()
	ht['detailImage'].states.next()
	ht['detailLogo'].states.next()