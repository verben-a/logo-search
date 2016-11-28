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

        var scholarships = $('.scholarship');
        var loans = $('.loan');

        if (this.id == 'scholarship') {

            for (var i = 0; i < loans.length; i++) {
                $(loans[i]).attr('src', $(loans[i]).data('non-color'));
            }
            // $(class, or id, or element tag or selected element)
            for (var i = 0; i < scholarships.length; i++) {
                $(scholarships[i]).attr('src', $(scholarships[i]).data('color'));
            }
        } else if (this.id == 'loan') {
            for (var i = 0; i < loans.length; i++) {
                $(loans[i]).attr('src', $(loans[i]).data('color'));
            }

            for (var i = 0; i < scholarships.length; i++) {
                $(scholarships[i]).attr('src', $(scholarships[i]).data('non-color'));
            }
        }
    });

    // education
    $('#levels-of-education p').on('click', function(e) {
        e.preventDefault();
        // get value of the paragraph text.
        $('.search-form2').val($(this).text());
        $('#levels-of-education').hide();

        var kidergartens = $('.kindergarten');
        var highschools = $('.high-school');

    if (this.id == 'kindergarten') {

            for (var i = 0; i < highschools.length; i++) {
                $(highschools[i]).attr('src', $(highschools[i]).data('non-color'));
            }
            // $(class, or id, or element tag or selected element)
            for (var i = 0; i < kidergartens.length; i++) {
                $(kidergartens[i]).attr('src', $(kidergartens[i]).data('color'));
            }
        } else if (this.id == 'high-school') {
            for (var i = 0; i < highschools.length; i++) {
                $(highschools[i]).attr('src', $(highschools[i]).data('color'));
            }

            for (var i = 0; i < kidergartens.length; i++) {
                $(kidergartens[i]).attr('src', $(kidergartens[i]).data('non-color'));
            }
        }

    });
});

