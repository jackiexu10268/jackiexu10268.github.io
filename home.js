var x = 0;
var images = new Array("https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/12771466_1121731441179466_3197209519782249570_o.jpg",
"https://scontent-lax3-1.xx.fbcdn.net/t31.0-8/13235563_1177548852264391_7879465638090732843_o.jpg",);
var i = setInterval(auto, 3000);

function auto()
  {
    x++;
    if (x == images.length)
       x=0;
    document.getElementById('bigImage').src=images[x];
  }
