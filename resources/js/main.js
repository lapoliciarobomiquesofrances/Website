var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(async function() {
    if (isMobile.any()) {
        $("#site").prepend('<img class="showcase" style="object-fit:cover; object-position:60%; height: 100vh; width: 100vw" alt="MatHax" title="Background" src="resources/images/background.png">');
        $('.loader-container').fadeOut();
    } else {
        $("#site").prepend('<video class="showcase" id="video" autoplay muted loop><source src="resources/videos/showcase.mp4" type="video/mp4"></video>');
        $("#video").bind('loadeddata', function(e) {
            $('.loader-container').fadeOut();
        });
    }
});
