$(function() {
  $('pre').mouseenter(function(){
        var $this = $(this);
        if (!$this.data('expand')) {
                    $this.data('expand', true);
                    $this.animate({fontSize: '1.4em'});
        }
        $this.val("").focus();
}).mouseleave(function(){
        var $this = $(this);
        $this.data('expand', false);
        $this.animate({fontSize: '1em'});
    });
});
