(function($, undefined) {

  /*
   *  .toggler() can be called in one of two ways:
   *  1. on a set of elements directly with
   *     $(selector).toggler(options);
   *  2. on container element(s) from which to delegate with:
   *     $(containerSelector).toggler(selector, options)
   */
  $.fn.toggler = function(selector, options) {

    function go (event) {
      $(event.target).targetElement().toggle();
      return options && options.go_to_target;
    };

    if (typeof selector !== 'string') {
      options = selector || {};
      selector = false;
    }

    if (selector) return this.delegate(selector, 'click', go);
    else return this.click(go);
  };

})(jQuery);