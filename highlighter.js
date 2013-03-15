function highlightSelection(){
    //Get selected stuff
    var selection;
    if(window.getSelection)
        selection = window.getSelection();
    else if (document.getSelection != "undefined")
        selection = document.getSelection();
    //Get selected content in a range object
    var range = selection.getRangeAt(0);
    if(range && !selection.isCollapsed){
        if(selection.anchorNode.parentNode == selection.focusNode.parentNode){
            var span = document.createElement('span');
            span.className = 'highlight-green';
            range.surroundContents(span);
        }
    }
}

function initialize(){
    window.addEventListener('click', highlightSelection, false);
}

/***************************************************************************/
initialize();
