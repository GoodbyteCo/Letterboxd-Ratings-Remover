var jack_but = document.createElement("BUTTON");
jack_but.appendChild(document.createTextNode("Show Reviews"));
jack_but.id = "jack-but";
jack_but.onclick = function () 
{
    var section = document.getElementById("popular-reviews");
    if(section.style.display == "block")
    {
        section.style.display = "none";
        jack_but.innerHTML = "Show Reviews";
    }
    else
    {
        section.style.display = "block";
        jack_but.innerHTML = "Hide Reviews";
    }
};
document.getElementsByClassName("film-recent-reviews")[0].appendChild(jack_but);