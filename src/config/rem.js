(function(doc, win) {
    var docEl = doc.documentElement,
        maxW = 768,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth <= maxW) {
                docEl.style.fontSize = clientWidth / 7.5 + 'px';
            } else {
                docEl.style.fontSize = maxW / 7.5 + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);