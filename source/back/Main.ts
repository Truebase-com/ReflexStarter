
/** 
 * This is the main entry point of the backend.
 */
function main()
{
	const className = ss(
		ss.color("red")
	);
	
	Fs.writeFile(
		"build/front/style.css",
		ss.emit(),
		() => {});
	
	const html = ml.html(
		ml.link({ rel: "stylesheet", type: "text/css", href: "style.css" }),
		ml.div(
			className,
			on("click", () => alert("hello")),
			ml`content`
		),
		ml.script({ src: "node_modules/reflex-core/reflex-core.js" }),
		ml.script({ src: "node_modules/reflex-ml/reflex-ml.js" }),
		ml.script({ src: "node_modules/reflex-ss/reflex-ss.js" }),
		ml.script({ src: "front.js" })
	);
	
	ml.emit(
		html,
		{ htmlOutPath: "build/front" }
	);
	
	console.log("Written.");
}
