(function($){

  $.fn.toggler = function() {
    var
      selector, options,
      toggler = function(event) {
        $(event.target).targetElement().toggle();
        return options && options.go_to_target;
      }
    ;
    if (typeof arguments[0] === 'string') {
      selector = arguments[0];
      options = arguments[1];
      return this.delegate(selector, 'click', toggler);
    } else {
      options = arguments[0] || {}
      return this.click(toggler);
    }
  };

})(jQuery);