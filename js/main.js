   var images = ['../img/berliner.jpg', '../img/coffeebeans.jpg', '../img/coffeebeans2.jpg', '../img/coffeehand.jpg', '../img/lovecoffee2.jpg', ];

    var randomImage = Math.floor(Math.random() * 5)

     $(document).ready(function() {
      $("#containerpic").css("background-image", "url('" + images[randomImage] + "')");
    })

