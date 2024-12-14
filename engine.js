localStorage.clear()

clear_text = function () {
    $(".text").empty()
    if(typeof text_anim !== 'undefined') {
    	clearTimeout(text_anim);
    	delete text_anim;
    }
}

cond = function(pred, action) { return function(onComplete=function(){}) {
	if(pred()) {
		action(onComplete)
	} else {
		onComplete()
	}
}}

text = function(value, {append=false, attr=""}={}) { return function(onComplete=function(){}) {
	if(!append) {
		clear_text()
	}
	// Creat a new element
	var a = $("<span " + attr + "></span>");
	$(".text").append(a);
	console.log(attr)
	console.log(a)

    function typewriter(iteration) {
        if (iteration == value.length) {
			setTimeout(onComplete, 500)
			// onComplete()
		} else {
	        text_anim = setTimeout(function() {
	            a.text(value.slice(0, iteration+1));
	            typewriter(iteration+1);
	        }, 35);
	    }
    }
    
    typewriter(0);
}}

audio = function(src) { return function(onComplete=function(){}) {
	var a = new Audio(src)
	a.play()
	onComplete()
	// a.onended = onComplete
	// a.play()
}}

answers = function(dict) { return function(onComplete=function(){}) {
	for (var key in dict) {
		if (dict.hasOwnProperty(key)) {
			(function(key) {
				var a = $("<div class='ans'></div>").attr("class", "answer").text("> " + dict[key])

				a.click(function() {
					console.log("clicked" + key)
					localStorage.setItem("answer", key)
					onComplete();
				})
	
				a.css("opacity", 0)
				$('.text').append(a)
	
				// setTimeout(function() {
					a.animate({'opacity': 1}, 400, "swing")
				// }, 200)
			})(key);
		}
	}
}}
getAnswer = () => localStorage.getItem("answer")

rightClear = function() { return function(onComplete=function(){}) {

	f = function() {
		$(".right").empty()
		onComplete()
	}

	// If it's not empty, fade out
	if($(".right").children().length > 0) {
		$(".right").children().animate({'opacity': 0}, 300, "swing", f)
	} else {
		f()
	}
}}

rightImage = function(image) { return function(onComplete=function(){}) {
	var a = $("<img/>").attr("src", image).attr("width", "100%")
	a.css("opacity", 0)
	$(".right").append(a)
	a.animate({'opacity': 1}, 800, "swing", function() {
		setTimeout(onComplete, 500)
	})
}}

rightText = function(text) { return function(onComplete=function(){}) {
	var a = $("<div class='rightText'></div>").text(text)
	a.css("opacity", 0)
	$(".right").append(a)
	a.animate({'opacity': 1}, 800, "swing", function() {
		setTimeout(onComplete, 500)
	})
}}

rightHtml = function(html) { return function(onComplete=function(){}) {
	var a = $("<div class='rightText'></div>").html(html)
	a.css("opacity", 0)
	$(".right").append(a)
	a.animate({'opacity': 1}, 800, "swing", function() {
		setTimeout(onComplete, 500)
	})
}}

set = function(key, value) { return function() {
	localStorage.setItem(key, value)
}}

wait = function(time) { return function(onComplete=function(){}) {
	setTimeout(onComplete, time)
}}

doActions = function(actions) {
	actions[0](onComplete=function(){
		if(actions.length > 1) {
			// setTimeout(function() {
				doActions(actions.slice(1))
			// }, 500)
		}
	})
}


goto = function(key, fade=true) { return function() {
	localStorage.setItem("previousView", localStorage.getItem("currentView"))
	localStorage.setItem("currentView", key)

	view = views[key]

	new_img = $("<img/>").attr("src", (view['image'].startsWith("http") ? "" : "img/places/") + view['image']).attr("class", "image")
    new_img.on('load', function() {
        var w = this.width; var h = this.height;

		$(".right").animate({'opacity': 0}, 200, "swing")

		f = function() {
			$(".inner").empty()
			$(".right").empty()
			
	        $(".inner").append(new_img)
	        $(".inner").animate({'opacity': 1}, fade ? 800 : 0, "swing")
			// $(".right").css("width", 'rightWidth' in view ? view['rightWidth'] + "px" : "0")
			$(".left").css("width", 'leftWidth' in view ? view['leftWidth'] + "px" : "")
			$(".right").animate({'opacity': 1}, 200, "swing")
	        clear_text()
	        // if('text' in view) {
	        // 	$(".text").text(view['text'])
	        // }
        
			if('actions' in view) {
				// Wait 500ms
				setTimeout(function() {
					doActions(view['actions'])
				}, 1000)
			}

			view['regions'].forEach(function (region) {
				if('item' in region && localStorage.getItem(region['item'])) {
					return
				}

				a = $("<a></a>")
				if('cursor' in region){
					if(region['cursor']=='eye') {
						a.attr("class", "eye-" + localStorage.getItem("eye"));
					} else {
						a.attr("class", region['cursor']);	
					}
				}
				if('x' in region) {
					a.css("left", (region['x']-region['w']/2)/w*100 + "%");
					a.css("top", (region['y']-region['h']/2)/h*100 + "%");
					a.css("width", (region['w']/w)*100 + "%");
					a.css("height", (region['h']/h)*100 + "%");	
				} else {
					a.css("left", 0);
					a.css("top", 0);
					a.css("width", "100%");
					a.css("height", "100%");
				}
				if ('image' in region) {
					a.css("background-image", 'url(' + region['image'] + ')')
					a.css("background-repeat", "no-repeat")
					a.css("background-size", "contain")
				}
				// if('action' in region) {
				// 	a.click(region['action']);
				// }
				if('actions' in region) {
					a.click(function(){doActions(region['actions'])})
				}
				if ('item' in region) {
					a.click(function(){$(a).hide()})
					a.click(set(region['item'], true))
				}
				$(".inner").append(a);
			})
		}

		if(fade) {
			$(".inner").animate({'opacity': 0}, fade ? 400 : 0, "swing", f)
		} else {
			f()
		}
        
	});
	
}}

$(document).ready(function() {
	goto(start)()
	$(".inventory-icon").click(function () {
		if (localStorage.getItem("currentView") == "inventory") {
			goto(localStorage.getItem("previousView"))()
		} else {
			goto("inventory")()
		}
	})
})