function sumDisplay(summary)
{
  var myNav = document.getElementById("sum_menu");

  if (myNav.style.visibility === "hidden")
  {
    myNav.style.visibility = "visible";
    myNav.style.left = "0";
    summary.innerHTML = "Summary"
  }
  else
  {
    myNav.style.visibility = "hidden";
    myNav.style.left = "-35em";
    summary.innerHTML = "Summary..."
  }
}
function viewMore(mybtn)
{
  var myarticle = mybtn.parentElement;
  var mypar = myarticle.querySelector("p")
  var dots = myarticle.querySelector("p #dots");
  var moreText = myarticle.querySelector("p #more");

  if (dots.style.display === "none")
  {
    dots.style.display = "inline";
    mybtn.innerHTML = "View more";
    moreText.style.display = "none";
  }
  else 
  {
    dots.style.display = "none";
    mybtn.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}
