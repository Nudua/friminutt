
/* "Read More"-button */
function toggleInfoReadMore(sender, box) {

    var x = document.getElementById(box);

    if (x.style.display === "none") {

        x.style.display = "block";

        sender.innerHTML = "Close";

    } else {

        x.style.display = "none";
        //x.text = "Read More";

        sender.innerHTML = "Read More";


    }

    console.log(sender.value);
}
