options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
      };
    magicMouse(options);
    $(document).ready(function () {
      $('.iconNavbar').click(function () {
        $('span').toggleClass('active')
      })
    })