function showScholarships() {
    $("#scholarships").toggle("show");
}

function showLevels() {
    $("#levels-of-education").toggle("show");
}


$(document).ready(function() {

    $('#scholarships p').on('click', function(e) {
        e.preventDefault();
        // get value of the paragraph text.
        $('.search-form1').val($(this).text());
        $('#scholarships').hide();
    });

    $('#levels-of-education p').on('click', function(e) {
        e.preventDefault();
        // get value of the paragraph text.
        $('.search-form2').val($(this).text());
        $('#levels-of-education').hide();
    });


    // search
    $('.search-button').on('click', function(e) {
        e.preventDefault();
        // rertieve the values in the inputs that are in the form
        var scholarship = $('.search-form1').val();
        var educationLevel = $('.search-form2').val();
        // console.log(scholarship, educationLevel);

        var loans = $('.loan');
        var scholarships = $('.scholarship');
        var all = $('.scholarship, .loan');

        if (scholarship == 'SCHOLARSHIP PROGRAM') {

            for (var i = 0; i < loans.length; i++) {
                $(loans[i]).attr('src', $(loans[i]).data('non-color'));
            }
            // $(class, or id, or element tag or selected element)
            for (var i = 0; i < scholarships.length; i++) {
                $(scholarships[i]).attr('src', $(scholarships[i]).data('color'));
            }
        } else if (scholarship == 'LOAN PROGRAM') {
            for (var i = 0; i < loans.length; i++) {
                $(loans[i]).attr('src', $(loans[i]).data('color'));
            }

            for (var i = 0; i < scholarships.length; i++) {
                $(scholarships[i]).attr('src', $(scholarships[i]).data('non-color'));
            }
        } else if (scholarship == 'SEARCH ALL') {
            for (var i = 0; i < all.length; i++) {
                $(all[i]).attr('src', $(all[i]).data('color'));
            }
        }

        var kidergartens = $('.kindergarten');
        var highschools = $('.high-school');
        var all = $('.kindergarten, .high-school');


        if (educationLevel == 'KINDERGARTEN') {


            for (var i = 0; i < highschools.length; i++) {
                $(highschools[i]).attr('src', $(highschools[i]).data('non-color'));
            }
            // $(class, or id, or element tag or selected element)
            for (var i = 0; i < kidergartens.length; i++) {
                $(kidergartens[i]).attr('src', $(kidergartens[i]).data('color'));
            }
        } else if (educationLevel == 'high-school') {
            for (var i = 0; i < highschools.length; i++) {
                $(highschools[i]).attr('src', $(highschools[i]).data('color'));
            }

            for (var i = 0; i < kidergartens.length; i++) {
                $(kidergartens[i]).attr('src', $(kidergartens[i]).data('non-color'));
            }
        } else if (educationLevel == 'SEARCH ALL') {
            for (var i = 0; i < all.length; i++) {
                $(all[i]).attr('src', $(all[i]).data('color'));
            }
        }
    });

   
});
