/**
 * ------------------------------------
 * noQuery
 * 
 * These are basic utilities that allow
 * for cross-browser support, replacing
 * the need to use jQuery.
 * ------------------------------------
 */
var noQuery = (function(){
    
    /**
     * ---------
     * HAS CLASS
     * 
     * Does the target element have the target class?
     * @param  {object}  el        The target element.
     * @param  {string}  className The target class.
     * @return {Boolean}           If the el has the class, output 'true'. Otherwise 'false'.
     * ---------
     */
    function _hasClass(el, className){
        if (el.classList) {
            var result = el.classList.contains(className);
        } else {
            var result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
        return result;
    }

    /**
     * ---------
     * ADD CLASS
     * 
     * Add a class to the target element.
     * @param {object} el        The target element.
     * @param {string} className The target class.
     * ---------
     */
    function _addClass(el, className){
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }

    /**
     * ------------
     * REMOVE CLASS
     * 
     * Remove a class from the target element.
     * @param  {object} el        The target element.
     * @param  {string} className The target class.
     * ------------
     */
    function _removeClass(el, className){
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    /**
     * --------------
     * PUBLIC METHODS
     * 
     * Expose all our
     * nice functions
     * to the public.
     * --------------
     */
    var publicAPI = {
        hasClass: _hasClass,
        addClass: _addClass,
        removeClass: _removeClass
    };
    return publicAPI;
})();