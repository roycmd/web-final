    var button = document.querySelector("#filter-button");
    var story = document.getElementById("verhaal");
    var leeslijst = document.querySelector(".leeslijst")

    //Functies

    function showFilter() {
        var filter = document.getElementById("filter").classList.toggle("filter");
        //        if (filter.style.display === "none") {
        //            filter.style.display = "block";
        //        } else {
        //            console.log("Button works")
        //            filter.style.display = "none";
        //        }
    }

    function shadowOver() {
        this.style.boxShadow = "0 0.4em 1.2em 0 rgba(0, 0, 0, 0.20)";
    }

    function shadowOut() {
        this.style.boxShadow = "0 0 0 0";
    }

    //Alle event listeners

    leeslijst.addEventListener("click", replaceImage);
    button.addEventListener("click", showFilter);
    story.addEventListener("mouseover", shadowOver);
    story.addEventListener("mouseout", shadowOut);

 // bronnen:
    //Bron 1: Duckett, J. Javascript & JQuery.
