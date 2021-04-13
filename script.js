$(document).ready(function () {
    $("#submit_button").click(function () {
        let course = $("#course").val();
        let points = $("#points").val();
        let score = $("#score").val();
        let total = $("#total").val();

        $("#dataInput").append(`

    <tr>
    <td>${course}</td>
    <td>${points}</td>
    <td>${score}</td>
    <td>${total}</td>
    </tr>
    `);
    });

$("#calculate").on("click", function () {
    var scores = [];
    $(parseFloat(".score")).each(function () {
        if($(this).val() == "" ) {
            alert("Please complete the required field");
            return false;
        }
        scores.push($(this).val());

    });
    
   
    var sum = 0;
    var summation = [];
    $(parseFloat(".total")).each(function () {
        summation.push($(this).val());
        for (i = 0; i < summation.length; i++) {
            sum += total[i];
        }
    });
    var ptSum = 0;
    var creditHrs = [];
    $(parseFloat(".points")).each(function () {
        creditHrs.push($(this).val());
        for (i = 0; i < creditHrs.length; i++) {
            ptSum += points[i];
        }
    });

    var avg = sum/(scores.length * 100) * ptSum;
    var cgpa = avg * 5;

    $("#result").html(
        "Your cgpa is" + cgpa
    );
})
    

});

// function getTotal() {
//     var getT = points * scores

// }