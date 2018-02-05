A simple chrome extension that uses AJAX to pull from Google New's Real Simple Syndication Feeds.


In Manifest.json:
  manifest_version must be included.
  name: refers to the name that is shown in the chrome://extensions page
  version: an arbitrary number that is used to keep track of successive updates.
  description: a string that describes the extension, shown in the chrome://extensions page.
  icons:{("16":"link", "48":"link", "128": "link") different icon sizes used in various areas. 25*25, 48^2, and 128^2 dimensions. One in app store, one in extensions page, one as the extensions icon}
  "homepage_url": The site that extension is associated with.
  "background":{
    "page": "The HTML page that will run in the background constantly, allowing you to maintain a certain state or perform regular actions for different parts of the extension. "
  }
  "permissions": [an array, tells chrome what special permissions you need access to. Chrome sandboxes extensions so they don't have access to all browsing activities unless requested. Allows the setting of exactly what permissions you need. Math patternings: ie. "http://news.google.com/*" Gives access to the URL and any variation viable with wildcard thereof.* ]
  "browser_action":{
    *refer to "https://developer.chrome.com/extensions/browserAction"*
    "User browser actions to put icons in the main Google Chrome toolbar. Use page_action if don't want icon to be always visible."
  }

In Scripts:
  Declaring async=true causes browser to load the javascript whilst doing other things. asnyc=false causes javascript to freeze and wait until the script finishes loading. Almost always async=true;



In  :
Idea behind organization:
  Add event listener to extension, allowing us to listen on the chrome.extension object for change in states or requests. When the user triggers the chrome.extension, the popup.html is loaded, and with it, fetch.js is also loaded. Upon the complete loading of the document, it calls fetch_feed() which sends a request to the chrome.extension via sendRequest. It also passes the function "display_stories()" as the callback function when it is done. When chrome.extension.onRequest.addListener(onRequest), it makes sure that the request.action is 'fetch_feed', and calls the respective function.
