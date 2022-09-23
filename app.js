var loadtext=document.querySelector('#text');
var btn= document.querySelector('#load');


function hideText()
{
    var text= document.getElementById('text');
    if(text.style.display==='none')
    {
        text.style.display="block";
    }
    else{
        text.style.display="none";
    }
}

btn.addEventListener('click',hideText);