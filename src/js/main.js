var apod = {
    // Application Constructor
    init: function() {

        var url = "https://api.nasa.gov/planetary/apod?api_key=OxuefVhPLvZLiYQc9K7MMo5ZNqPOMvas4yGZqlUf";

        $.ajax({
            url: url
        }).done(function(result){
          console.log(result);
        }).fail(function(result){
          console.log(result);
        });
    },
};

apod.init();
