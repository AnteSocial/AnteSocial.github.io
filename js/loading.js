function render(){
	g("serotonin").innerText="serotonin: "+player.chems.serotonin.toFixed(1)+" (+"+player.chems.sGainBase*player.chems.sGainMult+"/s)"
	g("dopamine").innerText="dopamine: "+player.chems.dopamine.toFixed(1)+" (+"+player.chems.dGain+"/c)"
	g("happiness").innerText="happiness: "+player.chems.happiness.toFixed(1)+" (+"+player.chems.hGain+"/c)"
}

function update(){
	if(player.options.tooltips==false){
		g("tooltipOption").checked=true
	}
	if(player.options.animations==false){
		g("animationsOption").checked=true
	}
	if(player.automation.auto1){
		g("auto1row").style.display="none"
	}
	if(player.automation.auto2){
		g("auto2row").style.display="none"
	}
	g("upgrade1bought").innerText=player.upgrades.one.level+"/5"
	g("upgrade1price").innerText=Math.ceil(player.upgrades.one.price)+" dopamine"
	g("upgrade2bought").innerText=player.upgrades.two.level+"/5"
	g("upgrade2price").innerText=Math.ceil(player.upgrades.two.price)+" happiness"
	g("upgrade3bought").innerText=player.upgrades.three.level+"/5"
	g("upgrade3price").innerText=Math.ceil(player.upgrades.three.price)+" serotonin"
	if(player.upgrades.one.level==5){
		g("upgrade1row").style.display="none"
	}
	if(player.upgrades.two.level==5){
		g("upgrade2row").style.display="none"
	}
	if(player.upgrades.three.level==5){
		g("upgrade3row").style.display="none"
	}
}

g("save").onclick=function(){
	localStorage.setItem("save",btoa(JSON.stringify(player)))
	this.innerText="saved!"
	window.setTimeout(function(){g("save").innerText="save"},1000)
}
function save(){
	localStorage.setItem("save",btoa(JSON.stringify(player)))
}
window.setInterval(save,15000)
g("reset").onclick=function(){
	if(confirm("Are you sure?")){
		localStorage.clear()
		window.location.reload()
	}
}
window.onload=function(){
	if(localStorage.getItem("save")!==null){
		player=JSON.parse(atob(localStorage.getItem("save")))
	} else {
		save()
	}
	render()
	update()

	if(player.automation.auto1){
		window.setInterval(automation,500)
	}

	g("html").style.display="block"
}

function automation(){
	if(player.automation.auto1){
		g("gainDopamine").click()
	} 
	if(player.automation.auto2){
		setTimeout(function(){
			g("gainDopamine").click()
		}, 250)
	}
}
function options(x){
	if(x){
		g("main").style.display="none"
		g("options").style.display="block"
	} else {
		g("main").style.display="block"
		g("options").style.display="none"
	}
}
options(false)