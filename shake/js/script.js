// Js Media Query start

function myFunction(x) {
    if (x.matches) {
        // If media query matches
        var desktopElem = document.getElementById("desktopElem");
        desktopElem.addEventListener("click", showAlert);

        function showAlert() {
            alert("You just clicked");
        }
    } else {
        // If media query not match then shake working for (mobile only).
        // for safari if shake not working start
        const id = setTimeout(
            () =>
            alert(
                "Enable device orientation in Settings > Safari > Motion & Orientation Access."
            ),
            500
        );
        window.addEventListener("deviceorientation", (event) => {
            clearTimeout(id);
        });
        // for safari if shake not working end

        window.onload = function() {
            //create a new instance of shake.js.
            var myShakeEvent = new Shake({
                threshold: 5,
            });

            // start listening to device motion
            myShakeEvent.start();

            // register a shake event
            window.addEventListener("shake", shakeEventDidOccur, false);

            //shake event callback
            function shakeEventDidOccur() {
                //put your own code here etc.
                alert("You shaked your Mobile");
            }
        };
    }
}
// for desktop end

var x = window.matchMedia("(min-width: 576px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
// Js Media Query end