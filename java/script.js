window.onscroll = () => {
	navbar.classList.remove("active")
}
document.addEventListener('contextmenu', event => event.preventDefault());
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.msUserSelect = 'none';
document.body.style.mozUserSelect = 'none';

document.body.addEventListener("selectstart", function(event) {
    event.preventDefault();
});
     document.onkeydown = function (e) {
          if (event.keyCode == 123) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
              return false;
          }
          if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
              return false;
          }
          if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
              return false;
          }
          if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
              return false;
          }
      }