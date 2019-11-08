$(function(){ //shorthand for doc ready iife
  
  $('#userSignInput').on('keyup', function(e) {
     
    var inputLength = $(this).val().length;
    $('#tiles').text(inputLength);
    updatePrice(inputLength);
   
  })
  
  $('#userFontInput').on('click', function(e) {
  
  $('table').append($(this).prop(':checked'));
    var inputFont = $(this).is(':checked');
    
    updatePrice($('#userSignInput').val().length, inputFont)
                      
  })
  
  $('#confirmOrder').on('click', function(e) {
    event.preventDefault();
    //console.log('is my link firing2?');
    
    var previewMsg = $('userSignInput').val();
    
    $('previewScreen').append(previewMsg);  
    $('#previewScreen').animate({ 'right': '0px' }, 250);
    
  
  $('#userColorInput').on('click', function(e) {
  
  $('table').append($(this).prop(':checked'));
    var inputColor = $(this).is(':checked');
    
    updatePrice($('#useSignInput').val().length, inputColor)
   
  })
  
   })

})
  
function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  
  if(fontUpgrade) { costPerTile = 6; }
  else { costPerTile = 5; }
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength !=0) { shipping = 7; }
  else { costPerTile = 0; }
  
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
}