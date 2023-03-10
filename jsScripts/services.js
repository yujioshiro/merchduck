let toggleDescription = (section, arrow) => {
    let collapsibleSection = document.getElementById(section);
    let arrowToChange = document.getElementById(arrow);

    let clonedArrow = arrowToChange.cloneNode(true);

    let allCollapsibleSections = document.getElementsByClassName('description-text');
    let allCollapsibleArrows = document.getElementsByClassName('arrow-down');

    for (index in allCollapsibleSections) {
        if (allCollapsibleSections.item(index).style.maxHeight){
            allCollapsibleSections.item(index).style.maxHeight = null;

        }
    }

    if (allCollapsibleArrows.length > 0) {
        let arrowToCollapse = allCollapsibleArrows.item(0);
        let arrowClone = arrowToCollapse.cloneNode(true);
        arrowClone.className = 'arrow-right-with-animation';
        arrowToCollapse.parentNode.replaceChild(arrowClone, arrowToCollapse);
    }

    if (collapsibleSection.style.maxHeight){
        clonedArrow.className = 'arrow-right-with-animation';
        arrowToChange.parentNode.replaceChild(clonedArrow, arrowToChange);

        collapsibleSection.style.maxHeight = null;

    } else {
        clonedArrow.className = 'arrow-down';
        arrowToChange.parentNode.replaceChild(clonedArrow, arrowToChange);

        collapsibleSection.style.maxHeight = collapsibleSection.scrollHeight + "px";
    } 
}


window.onload = () => {
    setTimeout(() => {
        toggleDescription('screen-printing-description', 'screen-printing-arrow')
    }, 700);
}