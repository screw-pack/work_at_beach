function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

var myNav = document.getElementById('sum_menu');
var summary = document.getElementById('summary');
summary.addEventListener('click', function(event) {
  if (myNav.className === 'hidden') {
    myNav.className = '';
    myNav.style.left = '0';
    summary.innerHTML = 'Summary <'
  } else {
    myNav.className = 'hidden';
    myNav.style.left = '-35em';
    summary.innerHTML = 'Summary >'
  }
})

var more = document.getElementsByClassName('more');
for (element of more) {
  element.addEventListener('click', function(event) {
    var myarticle = this.parentElement;
    var content = myarticle.querySelector('.content')
    if (isOverflown(content)) {
      content.style.maxHeight = '100%';
      this.innerHTML = 'View less';
    } else {
      content.style.maxHeight = '3em';
      this.innerHTML = 'View more';
    }
  })
}

var articles = document.getElementsByClassName('articles');
for (element of articles) {
  var newLink = document.createElement('a');
  var txt = element.id.charAt(0).toUpperCase() + element.id.slice(1);
  var newLinkText = document.createTextNode(txt);
  newLink.href = '#' + element.id;
  newLink.appendChild(newLinkText);
  myNav.appendChild(newLink);
}
