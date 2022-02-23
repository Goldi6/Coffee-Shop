$(function() {
    $("#search-reservations-form").submit((e) => {
        e.preventDefault();
        element = $(
            "<form class='searchForm' id='conf-form' onsubmit='event.preventDefault();approveCode();'><input placeholder='Code' id='codeInput' onkeypress='onlyNum(event)' type='text' maxlength='10' minlength='3' ><input type='submit' value='Confirm'></form>"
        );
        element.insertAfter($("#search-reservations-form"));

        $("#codeInput").inputFilter(function(value) {
            return /^\d*$/.test(value); // Allow digits only, using a RegExp
        });

        function approveCode() {}
    });
});