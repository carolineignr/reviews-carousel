document.addEventListener('DOMContentLoaded', () => {
    const reviewContainer = document.querySelector('.reviewContainer');

    let panels = [...reviewContainer.getElementsByClassName('panel')];

    const firstPanel = panels[0];
    firstPanel.classList.add('panelActive');

    const nonActivePanels = panels.filter(panel => {
        let panelClasses = panel.classList;
        panelClasses = [...panelClasses];

        return !panelClasses.includes('panelActive')
    });

    nonActivePanels.forEach((panel) => {
        panel.style.transform = 'translateX(100%)';
    })

    const control = reviewContainer.querySelector('.control');
    const spans = [...control.children]

    const firstSpan = spans[0];
    firstSpan.classList.add('controlActive');

    spans.forEach(span => {
        span.addEventListener('click', () => {
            const activeSpan = control.querySelector('.controlActive');

            span.classList.add('controlActive');

            const clickedSpanIndex = spans.indexOf(span);
            const currentSpanIndex = spans.indexOf(activeSpan);

            console.log(clickedSpanIndex)
            console.log(currentSpanIndex)

            if (clickedSpanIndex > currentSpanIndex) {
                var nonActivePosition = '-100%';
            }
            
            if (clickedSpanIndex < currentSpanIndex) {
                var nonActivePosition = '100%';
            }

            panels[currentSpanIndex].classList.remove('panelActive');
            panels[currentSpanIndex].style.transform = `translateX(${nonActivePosition})`;
            
            panels[clickedSpanIndex].classList.add('panelActive');

            activeSpan.classList.remove('controlActive');
        })
    })
})