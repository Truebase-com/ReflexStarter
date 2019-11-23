
module.exports = {
	port: 8000,
	files: [
		"./build/front/**/*.*"
	],
	server: { "baseDir": "./build/front" },
	open: false,
	callbacks: {
		ready: (error, bs) =>
		{
			bs.addMiddleware("*", (req, res) =>
			{
				if (req.url.startsWith("/node_modules/") ||
					req.url.startsWith("/static/"))
				{
					const fs = require("fs");
					const path = require("path");
					const text = fs.readFileSync(path.join(process.cwd(), req.url)).toString();
					res.write(text);
					console.log(text);
					res.end();
				}
			});
		}
	}
}
