var div=MyFramework.Get.byId("asd");
var p=MyFramework.Get.byTag("p")[0];
var btn=MyFramework.Get.byClass("qwerty")[0];
var table=MyFramework.create("table");
MyFramework.append(div,table)
var div1=MyFramework.create("div");
MyFramework.prepend(div,div1)
MyFramework.remove(p);
var f=function(){
	alert("Hi");
}

MyFramework.Event.add(btn,"click",f);
//MyFramework.Event.remove(btn,"click",f);
//MyFramework.Event.dispatch(btn,"click")