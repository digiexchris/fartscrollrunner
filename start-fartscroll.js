//
//

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


var xhr = new XMLHttpRequest(),
    doc = document;
xhr.overrideMimeType("application/javascript");
xhr.responseType = 'blob';
xhr.open('GET', 'https://raw.githubusercontent.com/theonion/fartscroll.js/master/fartscroll.js', true);
xhr.onload = function () {

    var script = doc.createElement('script'),
        src = URL.createObjectURL(xhr.response);

    script.src = src;
    doc.body.appendChild(script);

    //fartscroll(50);
};
xhr.send();

(function() {

    sleep(3000).then(() => {
        //do stuff
        fartscroll(50);
    })


})();