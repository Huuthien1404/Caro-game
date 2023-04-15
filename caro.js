function handleClickCell(){
    var listCell = document.querySelectorAll(".cell");
    if (event.currentTarget.style.backgroundColor=="") {  
        event.currentTarget.style.backgroundColor="rgb(0,255,0)";
        for(var i=0;i<listCell.length;i++){
            if (listCell[i]!=event.currentTarget) listCell[i].style.backgroundColor="";
        }
    }
    else if (event.currentTarget.style.backgroundColor=="rgb(0, 255, 0)") {
        var countX=0, countO=0;
        for(var i=0;i<listCell.length;i++) {
            if (listCell[i].innerHTML=="X") countX++;
            else if (listCell[i].innerHTML=="O") countO++;
        }
        if (countX == 0 && countO == 0) {
            event.currentTarget.style.backgroundColor="";
            event.currentTarget.style.color="red";
            event.currentTarget.innerHTML="O";
            event.currentTarget.style.pointerEvents="none";
        }
        else if (countO > countX) {
            event.currentTarget.style.backgroundColor="";
            event.currentTarget.style.color="blue";
            event.currentTarget.innerHTML="X";
            event.currentTarget.style.pointerEvents="none";
            var curRow = event.currentTarget.parentElement;
            var listRow = document.querySelectorAll(".container__rowCell");
            var posCurByRow;
            for(var i=0;i<listRow.length;i++){
                if (listRow[i]==curRow) {
                    posCurByRow = i;
                    break;
                }
            }
            var posCurByCol;
            var listCurCol = curRow.querySelectorAll(".cell");
            for(var i=0;i<listCurCol.length;i++) {
                if (listCurCol[i]==event.currentTarget) {
                    posCurByCol=i;
                    break;
                }
            }
            //check horizontal
            var countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+3]!=undefined&&listCurCol[posCurByCol+3].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+4]!=undefined&&listCurCol[posCurByCol+4].innerHTML=="X") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+3]!=undefined&&listCurCol[posCurByCol+3].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="X") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="X") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-3]!=undefined&&listCurCol[posCurByCol-3].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="X") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol-4]!=undefined&&listCurCol[posCurByCol-4].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-3]!=undefined&&listCurCol[posCurByCol-3].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="X") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="X") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            //check vertical
            var countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="X") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            //check main diagonal
            var countXMainDiagonal = 0;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol+4].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="X") countXMainDiagonal++;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol-4].innerHTML=="X") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            //check not main diagonal
            var countXNotMainDiagonal = 0;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol-4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol-4].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="X") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="X") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="X") countXNotMainDiagonal++;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol+4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol+4].innerHTML=="X") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("X win");
                    window.location.reload();
                },250)();
            }
        }
        else if (countX > countO || countO == countX) {
            event.currentTarget.style.backgroundColor="";
            event.currentTarget.style.color="red";
            event.currentTarget.innerHTML="O";
            event.currentTarget.style.pointerEvents="none";
            var curRow = event.currentTarget.parentElement;
            var listRow = document.querySelectorAll(".container__rowCell");
            var posCurByRow;
            for(var i=0;i<listRow.length;i++){
                if (listRow[i]==curRow) {
                    posCurByRow = i;
                    break;
                }
            }
            var posCurByCol;
            var listCurCol = curRow.querySelectorAll(".cell");
            for(var i=0;i<listCurCol.length;i++) {
                if (listCurCol[i]==event.currentTarget) {
                    posCurByCol=i;
                    break;
                }
            }
            //check horizontal
            var countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+3]!=undefined&&listCurCol[posCurByCol+3].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+4]!=undefined&&listCurCol[posCurByCol+4].innerHTML=="O") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+3]!=undefined&&listCurCol[posCurByCol+3].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="O") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol+2]!=undefined&&listCurCol[posCurByCol+2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="O") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol+1]!=undefined&&listCurCol[posCurByCol+1].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-3]!=undefined&&listCurCol[posCurByCol-3].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="O") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXHorizontal = 0;
            if (listCurCol[posCurByCol-4]!=undefined&&listCurCol[posCurByCol-4].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-3]!=undefined&&listCurCol[posCurByCol-3].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-2]!=undefined&&listCurCol[posCurByCol-2].innerHTML=="O") countXHorizontal++;
            if (listCurCol[posCurByCol-1]!=undefined&&listCurCol[posCurByCol-1].innerHTML=="O") countXHorizontal++;
            if (countXHorizontal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            //check vertical
            var countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXVertical = 0;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol].innerHTML=="O") countXVertical++;
            if (countXVertical==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            //check main diagonal
            var countXMainDiagonal = 0;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol+4].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="O") countXMainDiagonal++;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol-4].innerHTML=="O") countXMainDiagonal++;
            if (countXMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            //check not main diagonal
            var countXNotMainDiagonal = 0;
            if (listRow[posCurByRow+4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol-4]!=undefined&&listRow[posCurByRow+4].querySelectorAll(".cell")[posCurByCol-4].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3]!=undefined&&listRow[posCurByRow+3].querySelectorAll(".cell")[posCurByCol-3].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2]!=undefined&&listRow[posCurByRow+2].querySelectorAll(".cell")[posCurByCol-2].innerHTML=="O") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow+1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1]!=undefined&&listRow[posCurByRow+1].querySelectorAll(".cell")[posCurByCol-1].innerHTML=="O") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
            countXNotMainDiagonal = 0;
            if (listRow[posCurByRow-1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1]!=undefined&&listRow[posCurByRow-1].querySelectorAll(".cell")[posCurByCol+1].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2]!=undefined&&listRow[posCurByRow-2].querySelectorAll(".cell")[posCurByCol+2].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3]!=undefined&&listRow[posCurByRow-3].querySelectorAll(".cell")[posCurByCol+3].innerHTML=="O") countXNotMainDiagonal++;
            if (listRow[posCurByRow-4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol+4]!=undefined&&listRow[posCurByRow-4].querySelectorAll(".cell")[posCurByCol+4].innerHTML=="O") countXNotMainDiagonal++;
            if (countXNotMainDiagonal==4){
                setTimeout(()=>{
                    alert("O win");
                    window.location.reload();
                },250)();
            }
        }
    }
}