// html.js v1 - AnteSocial
// creates html elements

container=c("div")
container.id="container"
a(container)

title=c("title")
title.innerHTML="Ante's Incremental"
a2(document.head,title)

text=c("pre")
text.innerHTML="Ante's Incremental"
text.id="title"
a2(container,text)

text=c("pre")
text.innerHTML="you have 0 serotonin"
text.id="serotonin"
a2(container,text)

text=c("pre")
text.innerHTML="you have 0 happiness"
text.id="happiness"
text.style.display="none"
a2(container,text)

text=c("button")
text.innerHTML="click to gain serotonin"
text.onclick=function(){increment()}
a2(container,text)

a2(container,c("br"))

text=c("button")
text.innerHTML="convert 10 serotonin -> 1 happiness"
text.onclick=function(){convert()}
a2(container,text)

