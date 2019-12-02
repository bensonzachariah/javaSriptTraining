$('#LstColor').change(()=>{
    var colorSelected = $('#LstColor').val();
    console.log(colorSelected);
   
     if(colorSelected != 'Select the color of the SKU' )
    {
            
        $('#TblColor').append('<tr><td><input type="button" id="myButton" value=" X  "></td><td>'+ colorSelected +'</td><td><input id="Description" type="text"></td></tr>');        
        $('#LstColor').val('Select the color of the SKU');

        $(document).on("click", "#myButton", function(event) {
            // confirm("Do you want to delete?");
            $(this).closest('tr').remove();  
            
               
        });
        var Description =$('#Description').val();
        console.log(Description);
    }
 });






