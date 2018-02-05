function simple_parse_text(data){
	// Parses a string into an XML document
	var xml_doc = $.parseXML(data),
	// Turns XML document into jQuery object that can be
	// traversed and manipulated.
			$xml = $(xml_doc),
			$descriptions = $xml.find("description").slice(1);
			//Slice method is used to truncate matched elements to a subset, [1:].
	return $descriptions.text();
}
function complex_parse_text(data){
	// Parses a string into an XML document
	var xml_doc = $.parseXML(data),
	// Turns XML document into jQuery object that can be
	// traversed and manipulated.
			$xml = $(xml_doc),
			$descriptions = $xml.find("description").slice(1);
			//Slice method is used to truncate matched elements to a subset, [1:].
	// To turn jquery object into string, use prop to
	// get the value of a property for the first element in the set of
	// matched elements
	// $descriptions.prop('outerHTML')
	var relevant = new Object();// Object to manipulate
	/*
		Turn XML Dom Nodes into string, and turning the string into an
		array of DOM nodes.
	*/
	var $description_html = $.parseHTML($descriptions.text());
	// Search XML DOM using jquery.find(selector) or
	// $(selector, DOM)
	var $titles = $("a", $description_html)
	var html_string = "";
	//html_string+="<div class='news_container'>";
	html_string += "<div class='news_container'>";
	html_string += "<table>";
	for(var i = 0; i < $titles.length; i++){
		html_string += "<tr><td>";
		html_string += $titles[i].outerHTML;
		html_string+= "</td></tr>";
	}
	html_string += "</table>";
	html_string += "</div>";
	return html_string;
}
