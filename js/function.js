;(function($, window){


    'use strict';




function createField() {

var numberCol = $('#col').val();
var numberRow = $('#row').val();
var tr, td; 
var i, j;
console.log(numberRow);

var table = document.createElement('table');
 

for( i=0; i<numberRow; i++) {
 tr = table.appendChild(document.createElement('tbody'))
                .appendChild(document.createElement('tr'));
                console.log(tr);
                
                for(j=0; j<numberCol; j++) {
                    td = tr.appendChild(document.createElement('td'));
                    console.log(td);
                }
}
}




$('#number').on('click', createField );

})(jQuery, window);