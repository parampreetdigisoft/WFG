(function ($) {
  "use strict";
  var editor;
  $("#example").DataTable({
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "pdf", "print"],
    responsive: true,
  });

  $("#FirmSearch").DataTable({
    responsive: true,
    searching: false,
    lengthChange: false,
  });

  $("#ManageInvoice").DataTable({
    responsive: true,
    searching: false,
    lengthChange: false,
  });
})(jQuery);
