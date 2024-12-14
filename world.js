// start = "closedeyes";
// start = "landingspot";
// start = "inventory"
start = "gate"
// start = "cats"
// start = "historian"

views = {
	gate: {
		image: "gateclosed.png",
		regions: [
			{x: 4000, y: 4000, w: 4000, h: 4000, cursor: "north", actions: [
				goto("gate2", false)
			]}
		],
		actions: [
			text("When you hover over images, you can interact with them."),
			text("Click the door to open.", {append:true}),
			answers({
				"A": "Or if you know how epiphany works, click here to skip straight to the portals."
			}),
			cond(() => getAnswer()=="A", goto("cats"))
		]
	},

	gate2: {
		image: "gateopen.png",
		regions: [
			{x: 4000, y: 4000, w: 4000, h: 4000, cursor: "north", actions: [
				goto("historian")
			]}
		],
		actions: [
			text("Looks like the Professor's here. Let's go in.")
		]
	},

	historian: {
		image: 'historian.jpg',
		// rightWidth: 500,
		leftWidth: 551,
		actions: [text("He looks deep in thought. Can you get his attention?")],
		regions: [
			{x:1500, y:2150, w:320, h:620, cursor:"bubble", actions:
				[
					text("Grumble...", {attr:"class='historian'"}),
				]},

			{x:320, y:1300, w:200, h:200, cursor:"speaker", actions:
				[
					audio("audio/XC936224 - Carrion Crow - Corvus corone edit.wav"),
					text("CAW! CAW!"),
					wait(2000),
					text("Ehmmm...       You're here because...? ", {append:true, attr:"class='historian'; style='display:block; margin-top: 10px';"}),

					answers({
						"A": "I want to learn about the Epiphany. I heard you are the only historian in this and neighboring solar systems to research its ancient mysteries."
					}),
					text("And what have you heard about the Epiphany?", {attr:"class='historian';"}),
					answers({
						"A": "It was a deep winter festival where friends made art together, turning their experiences into gifts.",
						"B": "It was an ephemeral art collective who enticed the divine to sing through its members.",
						"C": "It was an investigation into wild generosity, to intuit how to inhabit the long view."
					}),
					cond(() => getAnswer()=="A", text("Deep winter festival? Correct. See the example on the right.", {attr:"class='historian';"})),
					cond(() => getAnswer()=="B", text("Ephemeral art collective? Correct. See the example on the right.", {attr:"class='historian';"})),
					cond(() => getAnswer()=="C", text("Wild generosity? Correct. See the example on the right.", {attr:"class='historian';"})),
					rightClear(),
					rightImage("https://www.mit.edu/~mcusi/epiphany/past/2024/papillon_front_small.png"),
					answers({
						"A": "Okay, I see.",
					}),

					text("And look at the back there's poems and stuff.", {attr:"class='historian';"}),
					rightClear(),
					rightImage("https://www.mit.edu/~mcusi/epiphany/past/2024/papillon_back_trimmed.png"),
					answers({
						"A": "That's cool.",
					}),
					text("Now, go see the other people. They're on the door to the right.", {attr:"class='historian';"})
				]
			},
			
			{x:1300, y:1200, w:300, h:300, cursor:"speaker", actions: [
				audio("audio/XC934498 - Barn Swallow - Hirundo rustica edit.wav"),
				text("Swallowwww")
			]},

			{x:750, y:3200, w:300, h:300, cursor:"speaker", actions: [
				audio("audio/XC950738 - Grey Partridge - Perdix perdix edit.wav"),
				text("Quaillll")
			]},
			{x:1500, y:3150, w:600, h:400, cursor:"speaker", actions: [
				audio("audio/XC952178 - Indian Peafowl - Pavo cristatus edit.wav"),
				text("Peaaacockkk")
			]},

			{x:2100, y:3300, w:250, h:150, cursor:"speaker", actions: [
				audio("audio/708457__aprilmbatha__audio_taps-on-metal-bowl_owi edit copy 2.wav"),
				text("Bowwwwlllll")
			]},


			{x:2200, y:2200, w:200, h:200, cursor:"speaker", actions: [
				audio("audio/458902__eardeer__lion-roars-2 edit copy.wav"),
				text("Roarrrrr!")
			]},

			{x:700, y:2500, w:150, h:150, cursor:"speaker", actions: [
				audio("audio/732520__lukey1028__young-cat-meow.mp3"),
				text("Meow!")
			]},

			

			
			// {x:400, y:2100, w:300, h:700, cursor:"north", actions: [goto("Au-Bonheur")]},
			// {x:1250, y:3200, w:2500, h:350, cursor:"south", actions: [goto("gate2")]},

			{x:2200, y:1800, w:300, h:500, cursor:"north", actions: [goto("cats")]},
			// {x:790, y:306, w:58, h:28, cursor:"bubble", actions: [set("eye", "brown"), goto("landingspot")]},
			// {x:790, y:380, w:57, h:26, cursor:"bubble", actions: [set("eye", "hazel"), goto("landingspot")]},
			// {x:790, y:451, w:58, h:26, cursor:"bubble", actions: [set("eye", "green"), goto("landingspot")]},
			// {x:790, y:526, w:57, h:28, cursor:"bubble", actions: [set("eye", "grey"), goto("landingspot")]}
		]
	},

	
	cats: {
		image: "cats.jpg",
		// rightWidth: 500,
		leftWidth: 1192,
		actions: [
			text("Stopping here, wanderer?", {attr:"class='weaver'"}),
			text("Welcome.", {attr:"class='cat1'", append:true}),
			text("Have you come far?", {append:true, attr:"class='cat2'", append:true}),
			
			answers({
				"A": "There's my star in the night sky... I've come to learn about the Epiphany. Why did you take the professor's cards?",
				"B": "I followed that star here. La Befana sent me to find you, but I had to stop off at the professor's first..."
			}),

			cond(() => getAnswer()=="B", text("Wonderful, is she well?", {attr:"class='dancer'"})),
			cond(() => getAnswer()=="B", 
				text("Since our dear ones are scattered over many galaxies, I've woven portals into the interweb. These make it possible to join from other solar systems.", {attr:"class='weaver'", append:true})
			),

			cond(() => getAnswer()=="A", text("Hehehe", {attr:"class='cat1'"})),
			cond(() => getAnswer()=="A", text("Hahahah", {attr:"class='dancer'", append:true})),
			cond(() => getAnswer()=="A", text("heh...", {attr:"class='cat2'", append:true})),
			cond(() => getAnswer()=="A", text("Please, join us for Epiphany. You will understand after you've been all mixed up.", {attr:"class='dancer'", append:true})),
			cond(() => getAnswer()=="A", answers({
				"A": "How do I join?"
			})),

			cond(() => getAnswer()=="A", 
				text("Since our dear ones are scattered over many galaxies, I've woven portals into the interweb. These make it possible to join from other solar systems.", {attr:"class='weaver'", append:false})
			),
			// text("But, as the professor must've told you, there are many steps to our divination... there is a portal for each one.", {attr:"class='dancer'", append:true}),

			rightHtml(
				"<b>PROPOSE IMAGES</b> - asynchronous<br/>" +
				"<ul>" +
					"<li><b>What?</b> We pool together images that might become characters.</li>" +
					"<li><b>How?</b> You can use this form or just drag images into this Google Drive.</li>" +
					"<li><b>When?</b> Do this by XXX.</li>" +
				"</ul>"
			),

			rightHtml(
				"<b>CHOOSE IMAGES</b> - synchronous<br/>" +
				"<ul>" +
					"<li><b>What?</b> We vote in rounds until we're left with a few images.</li>" +
					"<li><b>How?</b> We'll meet here to place tiles as our votes.</li>" +
					"<li><b>When?</b> XXX</li>" +
				"</ul>"
			),

			rightHtml(
				"<b>SEED POEMS</b> - asynchronous<br/>" +
				"<ul>" +
					"<li><b>What?</b> Add some ideas for each card, to inspire the next portal.</li>" +
					"<li><b>How?</b> We'll have some forms ready to use.</li>" +
					"<li><b>When?</b> not available yet</li>" +
				"</ul>"
			),

			rightHtml(
				"<b>WRITE POEMS</b> - synchronous<br/>" +
				"<ul>" +
					"<li><b>What?</b> Iterative rounds of writing until the poem is done. Each round is short & sweet.</li>" +
					"<li><b>How?</b> For each card, we'll meet [tbd] and write in a joint google doc.</li>" +
					"<li><b>When?</b> not available yet</li>" +
				"</ul>"
			),

			rightHtml(
				"<b>MAKE CARDS</b> - in person<br/>" +
				"<ul>" +
					"<li><b>What?</b> Make collages based off the poems and images</li>" +
					"<li><b>How?</b> Hanging out!</li>" +
					"<li><b>When?</b> tbd</li>" +
				"</ul>"
			)
		],

		regions: [
			{x: 2500, y: 2000, w: 400, h: 800, cursor: "north", actions: [goto("historian")]}
		],
	},



	inventory: {
		image: 'https://selency.imgix.net/4756d09b-4f0a-4b2d-b903-33971be605d6/large-distressed-turkish-rug-285x200-cm-tribal-wool-vintage-pink-red-beige_original.png?bg=0FFF&fit=fill&auto=format%2Ccompress&w=600&h=600&meta_format=product_og',
		regions: []
	},

	closedeyes: {
		image: 'closedeyes.png',
		regions: [
			{x:790, y:306, w:58, h:28, cursor:"bubble", actions: [set("eye", "brown"), goto("landingspot")]},
			{x:790, y:380, w:57, h:26, cursor:"bubble", actions: [set("eye", "hazel"), goto("landingspot")]},
			{x:790, y:451, w:58, h:26, cursor:"bubble", actions: [set("eye", "green"), goto("landingspot")]},
			{x:790, y:526, w:57, h:28, cursor:"bubble", actions: [set("eye", "grey"), goto("landingspot")]}
		]
	},

	earthhome: {
		image: 'earthhome.png', 
		regions: [
			{x:86, y:420, w:137, h:117, cursor:"eye", actions: [text("How did this tree get so tiny?")]},
			{x:72, y:737, w:149, h:122, cursor:"eye", actions: [text("Ouch!           Oops...")]},
			{x:99, y:579, w:112, h:167, cursor:"eye", actions: [text("Mmmmmmmm...        it smells so sweet.")]},
			{x:456, y:562, w:222, h:250, cursor:"eye", actions: [text("Please... ... take a reminder of home.")]},
			{x:771, y:335, w:255, h:363, cursor:"north", actions: [goto("closedeyes")]},
			{x:271, y:735, w:500, h:163, cursor:"south", actions: [goto("landingspot")]},
			{
				x: 671, y: 635, w: 100, h: 100, item: "frog",
				image: "https://i1.wp.com/www.markscherz.com/wp-content/uploads/Boophis-nauticus_Mayotte_DSC1724_FGZC4968maybe.png?w=587&h=375",
				action: text("A frog!")

			}
		]
	},


	landingspot: {
		image: 'landingspot.png',
		regions: [
			{x: 519, y: 426, w:63, h:149, cursor: "north", actions: [goto("Au-Bonheur")]},
			//{x: 397, y: 732, w:554, h:77, cursor: "south", actions: [goto('earthhome')]},
			{x: 355, y: 334, w:138, h:106, cursor: "eye", actions: [goto("painting")]},
		]	
	},
	
	painting: {
		image: "http://archive.thedali.org/MWEBimages/Collection%20Images/OILS_images%20saved%20for%20Web/2000.5_Arch-Rem_web.jpg",
		regions: [
			{cursor: "south", actions: [goto("landingspot")]}
		]
	},

	"La-Despedida": {
		image:'Cat.211-La-Despedida-1958-1.png',
		regions: [
			{x: 363, y: 713, w: 54, h: 705, cursor: 'north', actions: [goto('Tres-Destinos')]},
			{x: 601, y: 570, w: 73, h: 644, cursor: 'south', actions: [goto('Planta-Insumisa')]},
			{x: 791, y: 535, w: 41, h: 405, cursor: 'east', actions: [goto('La-Llamada')]},
			{x: 148, y: 599, w: 41, h: 476, cursor: 'north', actions: [text("The pathway is too narrow to move past")]},
			{x: 90, y: 587, w: 34, h: 482, cursor: 'west', actions: [goto('Mujer-Saliendo')]},
			{x: 155, y: 1237, w: 310, h: 142, cursor: 'southwest', actions: [goto('Au-Bonheur')]},
			{x: 596, y: 954, w: 62, h: 88, cursor: 'bubble', actions: [text("you look like you're from far away")]},
			{x: 700, y: 440, w: 106, h: 158, cursor: 'eye', actions: [text('Jo')]},
			{x: 700, y: 553, w: 106, h: 79, cursor: 'eye', actions: [text('Burning')]},
		]
	},

	"Mujer-Saliendo": {
		image:'Cat.292-Mujer-Saliendo-Del-Psicoanalista-1960-1.jpg',
		regions: [
			{x: 175, y: 897, w: 112, h: 723, cursor: 'west', actions: [goto("Ingravidez")]},
			{x: 844, y: 928, w: 98, h: 662, cursor: 'south', actions: [goto('La-Despedida')]},
			{x: 468, y: 629, w: 224, h: 186, cursor: 'bubble', actions: [text("who are you?")]},
		]
	},

	"Au-Bonheur": {
		image:'Cat.148-Au-Bonheur-des-Dames-1956-2.jpg',
		regions: [
			{x: 1239, y: 1304, w: 177, h: 938, cursor: 'bubble', actions: [text("she looks like she's in a rush")]},
			{x: 823, y: 1904, w: 656, h: 192, cursor: 'south', actions: [goto('landingspot')]},
			{x: 286, y: 1470, w: 170, h: 857, cursor: 'bubble', actions: [text("she's going somewhere fast!")]},
			{x: 1012, y: 835, w: 93, h: 330, cursor: 'north', actions: [goto('La-Despedida')]},
		]
	},

	"Tres-Destinos": {
		image:'Cat.146-Tres-Destinos-1956-1536x1290.jpg',
		regions: [
			{x: 586, y: 1236, w: 140, h: 107, cursor: 'south', actions: [goto('La-Despedida')]},
			{x: 1072, y: 1236, w: 100, h: 107, cursor: 'south', actions: [goto('La-Despedida')]},
			{x: 368, y: 829, w: 169, h: 310, cursor: 'bubble', actions: [text("they dont seem to hear you")]},
			{x: 833, y: 574, w: 131, h: 299, cursor: 'bubble', actions: [text("he is singing")]},
			{x: 1292, y: 814, w: 143, h: 339, cursor: 'bubble', actions: [text("a bit far away to hear")]},
			{x: 1047, y: 831, w: 50, h: 235, cursor: 'north', action:goto("Tower-Release")},
			{x: 526, y: 713, w: 79, h: 277, cursor: 'north', action:goto("Bordando")}
		]
	},

	"Planta-Insumisa": {
		image:'Cat.311-Planta-Insumisa-1961-1-square.png',
		regions: [
			{x: 578, y: 420, w: 227, h: 203, cursor: 'bubble', actions: [text("ah, i seldom have visitors. let alone one from another planet. tell me about the plant life there. ours have almost entirely left us.")]},
			{x: 828, y: 1094, w: 203, h: 194, cursor: 'northeast', actions: [goto('La-Despedida')]},
		]
	},

	"La-Llamada": {
		image:'Cat.329-La-Llamada-1961-1.png',
		regions: [
			{x: 232, y: 1292, w: 465, h: 131, cursor: 'southwest', actions: [goto('La-Despedida')]},
			{x: 853, y: 815, w: 105, h: 674, cursor: 'east', actions: [goto('Ruptura')]},
			{x: 854, y: 756, w: 66, h: 557, cursor: 'bubble', actions: [text('You may want to find a companion before passing through...')]},
			{x: 232, y: 1292, w: 465, h: 131, cursor: 'southwest', actions: [goto('La-Despedida')]},
			{x: 325, y:990, w:185, h:207, cursor: 'bubble', actions: [text("He doesn't seem to talk much")]},
			{x: 721, y:1193, w:378, h:262, cursor: 'bubble', actions: [text('Excuse me')]},
			{x: 475, y:443, w:114, h:153, cursor: 'bubble', actions: [text("The corridor of the sleeping sentinels... you've never seen such a thing on your planet?")]},
			{x: 852, y:77, w:57, h:202, cursor: 'eye', actions: [text('Jugglers')]},
		]
	},

	"Ingravidez": {
		image:'Cat.359-Fenomeno-De-Ingravidez-1963-1.jpg',
		regions:[
			{x: 876, y: 702, w: 108, h: 1235, cursor: 'east', actions: [goto("Mujer-Saliendo")]},
			{x: 341, y: 527, w: 155, h: 155, cursor:'bubble', actions: [text("Shhh... I'm concentrating!")]}
		]
	},

	"Tower-Release": {
		image:'TowerRelease-Varo.jpg',
		regions:[
			{x: 753, y: 816, w: 45, h: 358, cursor: 'south', actions: [goto("Tres-Destinos")]},
			{x: 796, y: 707, w: 41, h: 141, cursor:'south', actions: [goto("Tres-Destinos")]},
		]
	},

	"Bordando": {
		image:'Cat.304-Bordando-El-manto-1960-1.jpg',
		regions:[
			{x: 545, y: 579, w: 161, h: 68, cursor: 'south', actions: [goto("Tres-Destinos")]},
		]
	},

	"Ruptura": {
		image:"Ruptura.jpg",
		regions:[
			{x: 465, y: 791, w: 135, h: 263, cursor: 'north', actions: [goto("BlueRoom")]},
			{x: 352, y: 1079, w: 131, h: 504, cursor: 'bubble', actions: [text("This is the house of the six keepers of spirit: vision, discernment, gratitude, celebration, tenderness, and birth. We used to be seven but we've forgotten my name.")]},
			{x: 465, y: 1451, w: 930, h: 99, cursor: 'south', actions: [goto("La-Llamada")]}
		]
	},

	"BlueRoom": {
		image:"BlueRoomVaro.jpeg",
		regions:[
			{x: 666, y: 301, w: 90, h: 366, cursor: 'east', actions: [goto("Ruptura")]},
			{x: 542, y: 605, w: 515, h: 71, cursor: 'south', actions: [goto("CatPins")]},
			{x: 38, y: 387, w: 76, h: 460, cursor: 'west', actions: [goto("GrandfatherClocks")]},
			{x: 342, y: 322, w: 62, h: 130, cursor: 'bubble', actions: [text("Humming softly...")]},
		]
	},

	"CatPins": {
		image:"CatPinsVaro.jpg",
		regions:[
			{x: 171, y: 389, w: 147, h: 390, cursor: 'northwest', actions: [goto("BlueRoom")]},
		]
	},

	"GrandfatherClocks": {
		image:"GrandfatherClocksVaro.jpg",
		regions:[
			{x: 502, y: 832, w: 683, h: 73, cursor: 'south', actions: [goto("BlueRoom")]},
		]
	}

};
