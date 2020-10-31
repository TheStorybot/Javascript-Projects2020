var spooky = new XMLHttpRequest(); // defines the variable as a request


spooky.open('GET', 'content2.html');   //prepare the open ajax, telling it what it is to do with the information and where it is to draw from


spooky.onreadystatechange = function() {  //  define the ajax callback method, stating that it only preform this when it is at ready state 4
    if (spooky.readyState = 4) {
        document.getElementById('content').innerHTML = spooky.responseText;
    }
}

function getSpooky() {   // send the ajax request for data, at the same time concealing the button that was used to call the method
    spooky.send();
    document.getElementById('btn_content').style.display = 'none';
}