const activeClass = 'ativo';

function initTabMenu() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add(activeClass);

    if(tabMenu.length && tabContent.length) {
        function activeTab(index){
            tabContent.forEach((item) => {
                item.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        };
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    };
};
initTabMenu();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if(accordionList.length) {

        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        };
        
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    };
};

initAccordion();

function initScrollSuave() {

    const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]')
    
    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    
        section.scrollIntoView({
            behavior: "smooth",
            block: 'start',
        });
    };
    
    linksInterno.forEach((item) => {
        item.addEventListener('click', scrollSection);
    });
};

initScrollSuave();

function initAnimationScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add(activeClass);
                } else {
                    section.classList.remove(activeClass);
                };
            });
        };
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
    };
};

initAnimationScroll();