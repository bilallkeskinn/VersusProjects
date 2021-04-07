"use strict";

new Counter('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function step(now) {
      $(this).text(Math.ceil(now));
    }
  });
});