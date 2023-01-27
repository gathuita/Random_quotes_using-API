const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6eaf066913msha22fa17711b4cd5p1f7e6djsn1204b7692503',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '----' + response.originator.name + '----';
    })
	.catch(err => console.error(err));