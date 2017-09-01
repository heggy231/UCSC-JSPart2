/**
 * Coded by desire of Ajax
 */
function getRequest() {
  var request;
    if(window.XMLHttpRequest){
        request  = new XMLHttpRequest();
    }else{
        request = new ActiveXObject();
    }
   return request;
}
function synchXHR() {
    let xhr = getRequest();
    xhr.open('GET', 'data.txt', false);
    xhr.send();
    if(xhr.status === 200){
        console.log(xhr.responseText);
        document.getElementById('output1').innerHTML = "<h4>" + xhr.responseText + "</h4>";
    }
}
function asynchXHRLoadText() {
    let xhr = getRequest();
    xhr.open('GET', 'data.txt');
    xhr.onreadystatechange =  function () {
        console.log(xhr.readyState);
        if((xhr.readyState === 4) && (xhr.status === 200)){
            document.getElementById('output2').innerHTML = "<h4>" + xhr.responseText + "</h4>";
        }
    };
    xhr.send();
}


/*<speakers>
<speaker>
    <name>Barot Bellingham</name>
    <shortname>Barot_Bellingham</shortname>
    <reknown>Royal Academy of Painting and Sculpture</reknown>
    <bio>Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different</bio>
</speaker>
<speaker>
    <name>Jonathan G. Ferrar II</name>
    <shortname>Jonathan_Ferrar</shortname>
    <reknown>Artist to Watch in 2012</reknown>
    <bio>The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations</bio>
    </speaker>
</speakers>
*/

function asynchLoadXML() {
    let request = getRequest();
    request.open('GET', 'myXml.xml');
    request.onreadystatechange =  function () {
        console.log(request.readyState);
        if((request.readyState === 4) && (request.status === 200)){
            let output = "<ol>";
            let items = request.responseXML.getElementsByTagName('name');
            for(let i = 0; i < items.length ; i++){
                output += "<li>" + items[i].firstChild.data + "</li>";
            }
            output += "</ol>";
            document.getElementById('output3').innerHTML = output;

        }
    };
    request.send();
}

function asyncLoadJSON() {
    let request = getRequest();
    request.open('GET', 'data.json');
    request.onreadystatechange =  function () {
        if((request.readyState === 4) && (request.status === 200)){
            let items = JSON.parse(request.responseText);
            let output = "<ol>";
            items.forEach(function (obj, index) {
                output += "<li>" + obj['name'] + "</li>";
            });
            output += "</ol>";
            document.getElementById('output4').innerHTML = output;

        }
    };
    request.send();
}

function asyncLoadJSONAndImages() {
    let request = getRequest();
    request.open('GET', 'data.json');
    request.onreadystatechange =  function () {
        if((request.readyState === 4) && (request.status === 200)){
            let items = JSON.parse(request.responseText);
            let output = "<ol>";
            items.forEach(function (obj, index) {
                output += "<li>";
                output +="<h2>" + obj['name'] + "</h2>";
                output += "<img src = 'images/" + obj['shortname'] + "_tn.jpg' />";

                output +="<p>" + obj['bio'] + "</p>";
                output += "</li>";
            });
            output += "</ol>";
            document.getElementById('output5').innerHTML = output;

        }
    };
    request.send();

}