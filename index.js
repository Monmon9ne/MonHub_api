const express = require("express");
const app = express();

app.use(express.json()); // ⚠️ BẮT BUỘC

app.post("/", (req, res) => {
	const { jobId, pets } = req.body;

	if (!jobId || !pets) {
		return res.status(400).json({ ok:false });
	}

	console.log("JOB:", jobId);
	console.log("PETS:", pets);

	res.json({ ok:true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log("MAKING THIS THING FOR THE BOT SO I CAN MAKE A AJ MENU", PORT);
});
