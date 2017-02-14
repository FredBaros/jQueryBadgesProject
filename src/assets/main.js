$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/FredericoB.json',
    dataType: 'jsonp',
    success: function(data) {
      // handle response
      populateWithCourses(data.courses.completed)
    }
  });
  function populateWithCourses(courses){
    var $badges = $('#badges');
    courses.forEach(function(course){
      $div = $('<div />',{
        'class':'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src:course.badge
      }).appendTo($div);

      $('<a />',{
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);
    });
  }

});
