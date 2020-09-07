(function ($) {
    "use strict";
var editor;
 $('#example').DataTable({
    dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ],
     responsive: true
 });

    $('#FirmSearch').DataTable({
        responsive: true,
        bFilter: false
    });

    $('#ManageInvoice').DataTable({
        responsive: true,
        bFilter: false
    });
 
  

})(jQuery);
