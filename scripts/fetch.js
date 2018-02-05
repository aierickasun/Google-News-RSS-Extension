function fetch_feed(){
  // Sends request to chrome.extension for the request_listener in
  // background.html's bg_fetch.js ...
  // The action is arbitrarily named, but chrome.extension is listening for it.
  chrome.extension.sendRequest(
    {
      'action': 'fetch_feed',
      'url' : document.getElementById("newsSelect").value
    },
    function(response) {
      display_stories(response);
    }
  );
}

//The CallBack Function...
function display_stories(data){
  //Simple Parse:
  var parsed_text = simple_parse_text(data);
  $("#popup").html(parsed_text);
}

// When Document is Ready...
$(function(){
  fetch_feed();
  document.getElementById('newsSelect').addEventListener('change',  fetch_feed);
});
