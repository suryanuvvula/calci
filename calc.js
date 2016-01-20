
    function btn1(){
        document.form1.result.value  +="1";
    }
        function btn2(){
        document.form1.result.value  +="2";
    }
        function btn3(){
        document.form1.result.value  +="3";
    }
        function btn4(){
            document.form1.result.value += "4";
        }
        
        function btn5(){
            document.form1.result.value += "5";
        }
        
        function btn6(){
            document.form1.result.value += "6";
        }
        
        function btn7(){
            document.form1.result.value += "7";
        }
        
        function btn8(){
            document.form1.result.value += "8";
        }
        
        function btn9(){
            document.form1.result.value += "9";
        }
        
        function btn0(){
            document.form1.result.value += "0";
        }
        
        function dot(){
            document.form1.result.value += ".";
         } 
        function add(){
            document.form1.result.value += "+";
        }
        
        function minus(){
            document.form1.result.value += "-" ;
        }
        
        function mul(){
            document.form1.result.value += "*";
        }
        
        function clr(){
            document.form1.result.value = " ";
        }
        
        function equal(){
            var evaluate = eval(document.form1.result.value);
            document.form1.result.value = evaluate ; 
        }
        
        
    