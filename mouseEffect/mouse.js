let pos = document.documentElement;
pos.addEventListener('mousemove',
(evt) =>
{
     pos.style.setProperty('--x',evt.clientX+'px');
     pos.style.setProperty('--y',evt.clientY+'px');
}
);
// doubts -> why this mousemove works but not the mouse hover property.
