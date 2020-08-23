console.log("Loading engine")

clear_text = function() {
    $(".text").empty()
    if(typeof text_anim !== 'undefined') {
    	clearTimeout(text_anim);
    	console.log("clearing text anim")
    	delete text_anim;
    }
}

text = function(value) { return function() {
    clear_text()
    function typewriter(iteration) {
        if (iteration != value.length) {
	        text_anim = setTimeout(function() {
	            $('.text').text(value.slice(0, iteration+1));
	            typewriter(iteration+1);
	        }, 35);
	    }
    }
    
    typewriter(0);
}}

goto = function(key) { return function() {
	view = views[key]

	new_img = $("<img/>").attr("src", (view['image'].startsWith("http://") ? "" : "img/places/") + view['image']).attr("class", "image")
    new_img.on('load', function() {
        var w = this.width; var h = this.height;

        $(".inner").animate({'opacity': 0}, 200, "swing", function() {
			$(".inner").empty()
	        $(".inner").append(new_img)
	        $(".inner").animate({'opacity': 1}, 200, "swing")
	        clear_text()
	        if('text' in view) {
	        	$(".text").text(view['text'])
	        }
        

	        view['regions'].forEach(function(region) {
				a = $("<a></a>")
				if('cursor' in region){
					a.attr("class", region['cursor']);
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
				if('action' in region) {
					a.click(region['action']);
				}

				$(".inner").append(a);
			})
		})
	});
	
}}

$(document).ready(function() {
	console.log("document ready")
	goto(start)()
})