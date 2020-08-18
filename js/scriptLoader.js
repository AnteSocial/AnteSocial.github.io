// scriptLoader.js v1 - AnteSocial
// loads scripts onto page

css=document.createElement("link")

//Load CSS File
css.rel="stylesheet"
css.type="text/css"
css.href="css/style.css"
document.head.appendChild(css)

//Helpers
function c(x){
	return document.createElement(x)
}
function a(x){
	document.body.appendChild(x)
}
function a2(x,y){
	x.appendChild(y)
}
function g(x){
	return document.getElementById(x)
}
function u(x,y){
	x.innerHTML=y
}
function uH(){
	if(player.upgrades.five){
		u(g("serotonin"),"you have "+player.serotonin.toFixed(1)+" serotonin (+"+(player.friends.memories/2).toFixed(1)+"/sec)")
	} else {
		u(g("serotonin"),"you have "+player.serotonin.toFixed(1)+" serotonin")
	}
	u(g("happiness"),"you have "+player.happiness.toFixed(1)+" happiness")
	u(g("friend"),"you have "+player.friends.friends+" friends")
	u(g("memories"), "you have "+player.friends.memories.toFixed(1)+" memories")
	u(g("addfriend"),"+1 friend: "+player.friends.friendsCost+" happiness")
	if(player.upgrades.one<5){u(g("upgrade1"), "serotonin gain -> x1.3: "+player.upgrades.oneCost+" happiness ["+player.upgrades.one+"/5]")} else {u(g("upgrade1"), "double serotonin gain: MAX ["+player.upgrades.one+"/5]")}
}
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

//Load JS Files
script = c("script")
script.src="js/main.js"
a(script)

script = c("script")
script.src="js/html.js"
a(script)

script = c("script")
script.src="js/update.js"
a(script)

script = c("script")
script.src="js/save.js"
a(script)