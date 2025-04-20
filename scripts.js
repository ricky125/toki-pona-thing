/* get toki pona data */
w3.getHttpObject("data/tokipona.json", displaydata);

/* display toki pona data */
function displaydata(jdata) {
	w3.displayObject("id01", jdata );
}