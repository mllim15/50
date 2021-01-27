// first need to bring all panels into the javascript
// querySelector allows us to select anything like a p or class/id etc
/* querySelectorAll allows us to select all of a certain element
 and puts it into an array */
const panels = document.querySelectorAll('.panel')

// loop through the panels 
panels.forEach((panel) => {
    // add a class of active to whichever panel is clicked on
    panel.addEventListener('click', () => {
        // remove the active class from the panels that weren't clicked
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}