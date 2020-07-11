const axios = require('axios')
const fs = require('fs');
const dir = './quotes';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

async function fetchQuotes() {
	let response = await axios.get("https://gist.githubusercontent.com/akshaykhale1992/4888a65fab2dc8a413d83ceed45ec4e7/raw/d3a88be4623a01bc3f240beeed41c48297e7a7f8/quotes.json")
	response.data.map((value, index) => {
		let quoteFile = `./quotes/${index + 1}.json`
		if (!fs.existsSync(quoteFile)){
			fs.writeFile(quoteFile, JSON.stringify(value, null, 1), function (err,value) {
				if (err) {
					return console.log(err);
				}
				console.log(value);
			});
		}
		
	})
}

fetchQuotes()
