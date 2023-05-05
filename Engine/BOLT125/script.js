function showSidebar() {
    var x = document.getElementById('sidebar')
    if(x.className == "sidebar"){
       x.className += " show";
    } else{
       x.className = "sidebar";
    }
 }

 $(document).ready(function() {
   $('form').submit(function(event) {
     event.preventDefault();
     var searchTerm = $('#searchInput').val().toLowerCase();
     $.ajax({
       type: "GET",
       url: "BOLT125.CSV",
       dataType: "text",
       success: function(data) {
         var output = '';
         var rows = data.split(/\r?\n|\r/);
         var headers = rows[0].split(',');
         var searchInputCol = headers.indexOf('0'); // Replace 'Input Column Name' with the name of your search input column
         var searchOutputCols = ['4']; // Replace 'Output Column Name' with the name of your search output column
         var searchOutputCols2 = ['5'];
         var searchOutputCols3 = ['6'];
         for (var i = 1; i < rows.length; i++) {
           var cols = rows[i].split(',');
           if (cols[searchInputCol].toLowerCase().indexOf(searchTerm) != -1) {
             output = cols[searchOutputCols]  // Replace with whatever output format you want
             cols[searchOutputCols2],
             cols[searchOutputCols3];
             break;
           }
         }
         $('#searchResults').html(cols[searchOutputCols]);
         $('#searchResults1').html(cols[searchOutputCols2]);
         $('#searchResults2').html(cols[searchOutputCols3]);
       }
     });
   });
 });
