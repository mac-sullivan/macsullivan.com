///// General Functions ///////
jQuery(document).ready(function($) {
    // Code here will be executed on document ready. Use $ as normal.
    $("html").addClass("js").removeClass("no-js");

    // Code for accordions
    $hdr = "h2"; // set heading level to look out for
    $acc_id = 1; // global id counter

    /* The setup function that runs when the page has loaded */

    // Firstly, look for all headers of the right level within an accordion container
    $(".accordion-container")
        .find($hdr)
        .each(function() {
            // Store current ID value
            $this_id = $acc_id;
            // Get the current contents of the header
            $this_text = $(this).text();

            // Get the set of elements between this header and the next header, or the end of
            // the accordion container
            var $set = $(this).nextUntil($hdr);
        });

    // Now set up the event listeners
    // Look for all buttons that are inside a correct level heading inside the accordion container
    $(".accordion-container")
        .find($hdr)
        .find("button")
        .on("click", function(e) {
            var $thisId = $(this).attr("data-id");
            if ($(this).attr("aria-expanded") == "true") {
                hideAccordion($(this));
                $(this).focus();
            } else {
                showAccordion($(this));
            }
        });

    function showAccordion(obj) {
        // Being passed a button
        var $thisId = $(obj).attr("data-id");
        var $panel = $("#accordion-panel-" + $thisId);
        console.log("In showAccordion - " + $thisId);

        $($panel).removeClass("hidden");
        $(obj).attr("aria-expanded", "true");
        // $($panel).focus();
        $($panel).addClass("animate-top");
    }

    function hideAccordion(obj) {
        // Being passed a button
        var $thisId = $(obj).attr("data-id");
        var $panel = $("#accordion-panel-" + $thisId);
        console.log("In hideAccordion - " + $thisId);
        $($panel).addClass("hidden");
        $(obj).attr("aria-expanded", "false");
        // $(obj).focus();
        $($panel).removeClass("animate-top");
    }
    $.preventDefault();
});