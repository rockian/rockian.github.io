$(function() {
    $("#send").click(function() {
        const userId = $("#useriId").val();
        $.get("https://jsonplaceholder.typicode.com/posts", { "data": { "userId": userId } })
            .done(function(result) {
                $.each(result, function(index, val) {
                    $("#result").append("<h2>No:" + val.id + " </h2>")
                    $("#result").append("<h5>Title: " + val.title + " </h5>")
                    $("#result").append("<p><b>post: </b>" + val.body + " </p>")
                })
            })
            .fail(function() {


            })

    })
});