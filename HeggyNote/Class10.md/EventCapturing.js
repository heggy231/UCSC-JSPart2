capturing phase (top to bottom)

window.addEventListenter('click', function () {
  alert('document');
}, true);


capturing - start from least specific one to most specific onemptied
********* vivek code ***********

<!DOCTYPE html>
<html>
<head>
    <title>Event Bubbling Example</title>
    <script type="text/javascript">
    
        window.onload = function(){
            
            document.documentElement.addEventListener('click', function () {
                alert("HTML");
            }, false);

            document.body.addEventListener('click', function () {
                alert("BODY");
            }, false);

            window.addEventListener('click', function () {
                alert("Window");
            }, false);

            document.addEventListener('click', function () {
                alert("document");
            }, false);

            document.getElementById('myDiv').addEventListener('click', function () {
                alert("DIV");
            }, false);

        }
    

    </script>
</head>
<body>
    <div id="myDiv">Click Me</div>

    
</body>
</html>