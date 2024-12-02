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

text = function(value) { return function(onComplete=function(){}) {
    clear_text()
    function typewriter(iteration) {
        if (iteration == value.length) {
			onComplete()
		} else {
	        text_anim = setTimeout(function() {
	            $('.text').text(value.slice(0, iteration+1));
	            typewriter(iteration+1);
	        }, 35);
	    }
    }
    
    typewriter(0);
}}

answers = function(dict) { return function(onComplete=function(){}) {
	for (var key in dict) {
		if (dict.hasOwnProperty(key)) {
			(function(key) {
				var a = $("<div style='padding-top:0.5em; cursor: pointer; color: yellow;'></div>").attr("class", "answer").text("> " + dict[key])

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

rightImage = function(image) { return function(onComplete=function(){}) {

	var f = function() {
		var a = $(".right").append($("<img/>").attr("src", image).attr("width", "100%"))
		a.css("opacity", 0)
		a.animate({'opacity': 1}, 800, "swing", onComplete)
	}

	// If it's not empty, fade out
	if($(".right").children().length > 0) {
		$(".right").children().animate({'opacity': 0}, 300, "swing", function() {
			$(".right").empty()
			f()
		})
	} else {
		f()
	}
}}

set = function(key, value) { return function() {
	localStorage.setItem(key, value)
}}


doActions = function(actions) {
	actions[0](onComplete=function(){
		if(actions.length > 1) {
			doActions(actions.slice(1))
		}
	})
}


goto = function(key) { return function() {
	localStorage.setItem("previousView", localStorage.getItem("currentView"))
	localStorage.setItem("currentView", key)

	view = views[key]

	new_img = $("<img/>").attr("src", (view['image'].startsWith("http") ? "" : "img/places/") + view['image']).attr("class", "image")
    new_img.on('load', function() {
        var w = this.width; var h = this.height;

		$(".right").animate({'opacity': 0}, 200, "swing")
        $(".inner").animate({'opacity': 0}, 400, "swing", function() {
			$(".inner").empty()
			$(".right").empty()
			
	        $(".inner").append(new_img)
	        $(".inner").animate({'opacity': 1}, 800, "swing")
			$(".right").css("width", 'rightWidth' in view ? view['rightWidth'] + "px" : "0")
			$(".right").animate({'opacity': 1}, 200, "swing")
	        clear_text()
	        // if('text' in view) {
	        // 	$(".text").text(view['text'])
	        // }
        
			if('actions' in view) {doActions(view['actions'])}

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
		})
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