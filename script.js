const quote_text = document.getElementById('quote_text');
const quote_by = document.getElementById('quote_by');
const get_quote = document.getElementById('get-quote');

get_quote.addEventListener('click', generateQuote);

generateQuote();

async function generateQuote() {
	const quoteRes = await fetch('https://api.quotable.io/random', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const quoteJson = await quoteRes.json();
    console.log(quoteJson);

    quote_text.innerHTML = quoteJson.content;
    quote_by.innerHTML = '"' + quoteJson.author + '"';
}