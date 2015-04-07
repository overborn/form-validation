jQuery(function($){
    $('[data-toggle="tooltip"]').tooltip({
      placement : 'right'
    });
    fields = [
              'credit_card_number',
              'credit_card_expiry',
              'credit_card_cvc',
              ]

    $.each( fields, function (index, value) {
        $('input.'+value).formance('format_'+value);

        $('input.'+value).on('keyup change blur', function (value) {
            return function (event) {
                $this = $(this);
                if ($this.formance('validate_'+value)) {
                    $this.parent()
                        .removeClass('has-success has-error')
                        .addClass('has-success');
                } else {
                    $this.parent()
                        .removeClass('has-success has-error')
                        .addClass('has-error');       
                    $this.tooltip();
                }
            }
        }(value));
    });

    $('input.owner_email').on('keyup change blur', function (value) {
        if ($(this).formance('validate_email')){
          $(this).parent()
              .removeClass('has-success has-error')
              .addClass('has-success');
        } else {
          $(this).parent()
              .removeClass('has-success has-error')
              .addClass('has-error');
          $(this).tooltip();  
        }
    });

});
