var MyFramework = {
	append: function(el1, el2){
		el1.appendChild(el2);
	},
	prepend: function(el1, el2){
		el1.insertBefore(el2, el1.firstChild)
	},
	remove: function(el){
		el.remove();
	},
	create: function(el){
		return document.createElement(el);
	},

	Get: {
		byId: function(el){
			return document.getElementById(el);
		},
		byClass: function(el){
			return document.getElementsByClassName(el);
		},
		byTag: function(el){
			return document.getElementsByTagName(el);
		},
		bySelector: function(el){
			return document.querySelector(el);
		},
		bySelectorAll: function(el){
			return document.querySelectorAll(el);
		}
	},

	Event: {
		add: function(el, event, func){
				if(typeof el.attachEvent == "function"){
					el.attachEvent('on' + event, func);
				}
				else{
					el.addEventListener(event, func);
				}
			},
		remove: function(el, event, func){
					if(typeof el.attachEvent == "function"){
						el.detachEvent('on' + event, func);
					}
					else{
						el.removeEventListener(event, func);
					}
				},
		dispatch: function(el, ev){
					var event = document.createEvent("Event");
					event.initEvent(ev);
					el.dispatchEvent(event);
				}
	},
	width: function(e){
		return e.clientWidth;
	},
	height: function(e){
		return e.clientHeight;
	},
	pageTop: function(e){
		return e.getBoundingClientRect().top;
	},
	pageLeft: function(e){
		return el.getBoundingClientRect().left;
	},
	css: function(e, property, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[property];
		}
		if(arguments.length == 3){
			e.style[property] = value;
		}
	},
	ajax: function(m, p, f){
 		var xhr = new XMLHttpRequest();
 		xhr.open(m, p, true);
 		xhr.onload = f;
 		xhr.send();
 	}
}

	

	
