function init() {

    let form = document.getElementById("subscribeForm");

    form.onsubmit = function(event) {
        event.preventDefault();


        let input = document.getElementById("subscribeInput");
        input.value = "";

        alert("Thank you! You will be notified when the app releases.");

        return false;
    }
}