Why

PPT_Tutorial_05_BOM

DOM slide 26

The browser location can be changed in a number of ways using the location object.
Assign() method. //location.assign(“http://www.gmail.com”);
location.href or window.location can be set to a URL 
window.location = http://www.wrox.com; 
 location.href = “http: www.wrox.com”;


Properties of the location

PROPERTY NAME
       EXAMPLE
DESCRIPTION
host 
“www.wrox.com:80”
The name of the server and port number if present.
Hostname
“www.wrox.com”
The name of the server without the port number.
href
“http://www.wrox

.com”
The full URL of the currently loaded page. The

toString() method of location returns this value.
pathname
“/WileyCDA/”
The directory and/or filename of the URL.
port
“8080”
The port of the request if specified in the URL. If

a URL does not contain a port, then this property returns an empty string.
protocol
“http:”
The protocol used by the page. Typically “http:”

or “https:”.
search
“?q=javascript”
The query string of the URL. It returns a string beginning with a question mark.

# window.navigator
-- userAgent
window

# how many browser support user location?
- how many brower support the geo-Location?
can I use?

class example Animation Using TimeOut

class example of geoLocation.html

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation#Getting_the_current_position

# Getting the current position
To obtain the user's current location, you can call the getCurrentPosition() method. This initiates an asynchronous request to detect the user's position, and queries the positioning hardware to get up-to-date information. When the position is determined, the defined callback function is executed. You can optionally provide a second callback function to be executed if an error occurs. A third, optional, parameter is an options object where you can set the maximum age of the position returned, the time to wait for a request, and if you want high accuracy for the position.

Note: By default, getCurrentPosition() tries to answer as fast as possible with a low accuracy result. It is useful if you need a quick answer regardless of the accuracy. Devices with a GPS, for example, can take a minute or more to get a GPS fix, so less accurate data (IP location or wifi) may be returned to getCurrentPosition().
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
The above example will cause the do_something() function to execute when the location is obtained.

# Watching the current position
- https://developers.google.com/maps/

- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation#Getting_the_current_position

Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014
https://www.youtube.com/watch?v=8aGhZQkoFbQ

next class, DOM read ahead 
Dive more into
2 id same page what happens
corner cases

Final: 
bankrate.com

JSON AJAX 
Creat simple obj click button you show

2 lenders pop up display