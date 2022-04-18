// Process contact form
$('#contact-form').submit(function(event) {
    event.preventDefault();
    $('#feedback').html('');
    setTimeout(function() {
        // Get data
      var data = {
        'entry.1117373063': $('#form-name').val(),
        'entry.655344875': $('#form-email').val(),
        'entry.1424998777': $('#form-message').val()
      };
  
      // Validate form
      var formSuccess = true;
      Object.keys(data).forEach(function(key, index) {
        if (!data[key]) {
          formSuccess = false;
          $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
        }
      });
  
      if (formSuccess) {
        // Send request
        $.ajax({
          url: 'https://docs.google.com/forms/d/e/1FAIpQLSfMRdX6TnFAOW2Yv8Fk-TIUuxAcb3sWqFZz4OPRtcd0Uxk8RQ/formResponse',
          type: 'POST',
          crossDomain: true,
          dataType: "xml",
          data: data,
          success: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on success');
            $('.form').addClass("none")
            $('#feedback').addClass("confirmed");
            $('#feedback').html('<label class="text-success">Message sent!</label>');
            window.setTimeout(function(){

              // Move to a new location or you can do something else
              window.location.href = "./index.html";
      
          }, 5000);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log('Enter on error');
            $('.form').addClass("none")
            $('#feedback').addClass("confirmed");
            $('#feedback').html('<label class="text-success">Message sent!</label>');
            window.setTimeout(function(){

              // Move to a new location or you can do something else
              window.location.href = "./index.html";
      
          }, 5000);
          }
        });
      }
    }, 300);
  });
/* 
  https://docs.google.com/forms/d/e/1FAIpQLSfMRdX6TnFAOW2Yv8Fk-TIUuxAcb3sWqFZz4OPRtcd0Uxk8RQ/viewform?
  
  usp=pp_url&entry.1117373063=name&entry.655344875=email&entry.1424998777=mess */