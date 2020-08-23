foo = function() {
	$(".text").html("Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).")
}

text = function(value) { return function() {
	$(".text").html(value)
}}

goto = function(key) { return function() {
	view = views[key]

	
	$("<img/>").attr("src", view['image']).attr("class", "image")
    .on('load', function() {
        var w = this.width; var h = this.height;

        $(".inner").empty()
        $(".inner").append(this)
        $(".text").empty()
        if('text' in view) {
        	$(".text").text(view['text'])
        }
        

        view['regions'].forEach(function(region) {
			a = $("<a></a>")
			if('cursor' in region){
				a.attr("class", region['cursor']);
			}
			if('left' in region) {
				a.css("left", (region['left']/w)*100 + "%");
				a.css("top", (region['top']/h)*100 + "%");
				a.css("width", (region['width']/w)*100 + "%");
				a.css("height", (region['height']/h)*100 + "%");	
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
	});
	
}}

$(document).ready( function() {
	goto(start)()
})