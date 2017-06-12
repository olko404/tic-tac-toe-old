;(function($, window){


    'use strict';

    function inRow(arr, num, x, y){
        for(var iy=0; iy<y; iy++){
            var r = 0;
            var last = 0;
            for(var ix=0; ix<x; ix++){
                if(arr[iy*x+ix]==last){r++;}else{r=1;}
                if(arr[iy*x+ix]!=0 && r==num) return arr[iy*x+ix];
                last=arr[iy*x+ix];
            }
        }
        return 0;
    }
    function inCol(arr, num, x, y){
        for(var ix=0; ix<x; ix++){
            var r = 0;
            var last = 0;
            for(var iy=0; iy<y; iy++){
                if(arr[iy*x+ix]==last){r++;}else{r=1;}
                if(arr[iy*x+ix]!=0 && r==num) return arr[iy*x+ix];
                last=arr[iy*x+ix];
            }
        }
        return 0;
    }
    function inDiag(arr, num, x, y){
        for(var offset=-x+num; offset<=y-num; offset++){
            var r = 0;
            var last = 0;
            for(var i=0; i<x, i+offset<y; i++){
                if(i+offset<0) continue;
                if(arr[(i+offset)*x+i]==last){r++;}else{r=1;}
                if(arr[(i+offset)*x+i]!=0 && r==num) return arr[(i+offset)*x+i];
                last=arr[(i+offset)*x+i];
            }
        }
        return 0;
    }
    function inBackDiag(arr, num, x, y){
        for(var offset=-x+num; offset<=y-num; offset++){
            var r = 0;
            var last = 0;
            for(var i=0; i<x, i+offset<y; i++){
                if(i+offset<0) continue;
                if(arr[(i+offset)*x+x-i-1]==last){r++;}else{r=1;}
                if(arr[(i+offset)*x+x-i-1]!=0 && r==num) return arr[(i+offset)*x+x-i-1];
                last=arr[(i+offset)*x+x-i-1];
            }
        }
        return 0;
    }

    function findRow(arr, num, x, y){
        return inRow(arr, num, x, y) ||
            inCol(arr, num, x, y) ||
            inDiag(arr, num, x, y) ||
            inBackDiag(arr, num, x, y)
    }

    $(document).ready(function(){
        var config = {
            x: 4,
            y: 3,
            inRow: 3
        };

        var arr = [];
        for(var i=0; i<config.y*config.x; i++) arr.push(0);
        var num = 0;
        var player = 1;
        var playerSym = ["", "X", "O"];
        $("td").each(function(){
            $(this).html("<button name='"+num+"but'>&nbsp</button>");
            num++;
        });
        $("button").click(function(){
            var but = $(this);
            var num = parseInt(but.attr('name'))
            if (arr[num]!=0) return false;
            $(this).html(playerSym[player]);
            arr[num]=player;
            player=player ^ 3;
            var p = findRow(arr, config.inRow, config.x, config.y);
            if(p) alert("Выиграл игрок "+p);
        })
    });

})(jQuery, window);