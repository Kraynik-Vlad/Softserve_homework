let objWindow = window.open('','', 'width=300, height=300');

setTimeout(function(){
    objWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function(){
    objWindow.moveTo(200,200);
}, 2000);

setTimeout(function(){
    objWindow.close();
}, 2000);