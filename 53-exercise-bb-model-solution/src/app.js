define([

    '$',
    'views/SampleView'

], function($, SampleView){

    return {
        start: function() {
            var sampleView = new SampleView({ data: { text: "Hello here"} });
            sampleView.render();

            sampleView.on("view:clicked", function() {
                alert("View clicked!");
            });

            $("body").append(sampleView.el);
        }
    }

});
