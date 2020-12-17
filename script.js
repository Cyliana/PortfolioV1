let burger = document.getElementById("burger");
let burger2 = document.getElementById("burger2");
let menunav2 = document.getElementById("menunav2");
let menunav = document.getElementById("menunav")

function click()
{
    if(window.getComputedStyle(menunav2).display != "none")
    {
        menunav2.style.display = "none";
        menunav.style.display = "block";
    }
    else
    {
        menunav2.style.display = "block";
        menunav.style.display = "none";
    }
};

burger.onclick = click;
burger2.onclick = click;