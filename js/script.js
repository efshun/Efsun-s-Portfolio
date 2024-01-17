isUsed = false;
myMoveReverse();
function downEvent(page)
{
    
    if(isUsed)
    {
        return;
    }
    setTimeout(() => window.location.href = page, 300)
    isUsed = true;
    myMove();
}


function myMove() {
    let id = null;
    const elem = document.getElementById("blackscreen");
    let alpha = 0;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
        alpha += 0.05;
        elem.style.backgroundColor = "rgba(0,0,0,"+ alpha+")";
      
    }
  }

  function myMoveReverse() {
    let id = null;
    const elem = document.getElementById("blackscreen");
    let alpha = 1;
    clearInterval(id);
    id = setInterval(frame, 15);
    function frame() {
      if (alpha <= 0) {
        clearInterval(id);
      } else {
        alpha -= 0.05;
        elem.style.backgroundColor = "rgba(0,0,0,"+ alpha+")";
      }
    }
  }
