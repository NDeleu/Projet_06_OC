export function slidersNext(sectionName){

    const boutonNext = document.querySelector(`#${sectionName} div.articles img.btn-nav.left`);

    boutonNext.addEventListener("click", function (event) {

        var elOne = document.querySelector(`#${sectionName} div.articles div.slide.s1`);
        var elTwo = document.querySelector(`#${sectionName} div.articles div.slide.s2`);
        var elThree = document.querySelector(`#${sectionName} div.articles div.slide.s3`);
        var elFour = document.querySelector(`#${sectionName} div.articles div.slide.s4`);
        var elFive = document.querySelector(`#${sectionName} div.articles div.slide.s5`);
        var elSix = document.querySelector(`#${sectionName} div.articles div.slide.s6`);
        var elSeven = document.querySelector(`#${sectionName} div.articles div.slide.s7`);

        elOne.classList.remove("s1");
        elOne.classList.add("s2");

        elTwo.classList.remove("s2");
        elTwo.classList.add("s3");

        elThree.classList.remove("s3");
        elThree.classList.add("s4");

        elFour.classList.remove("s4");
        elFour.classList.add("s5");

        elFive.classList.remove("s5");
        elFive.classList.add("s6");

        elSix.classList.remove("s6");
        elSix.classList.add("s7");

        elSeven.classList.remove("s7");
        elSeven.classList.add("s1");
    });

}

export function slidersPrevious(sectionName){

    const boutonPrevious = document.querySelector(`#${sectionName} div.articles img.btn-nav.right`);

    boutonPrevious.addEventListener("click", function (event) {

        const elOne = document.querySelector(`#${sectionName} div.articles div.slide.s1`);
        const elTwo = document.querySelector(`#${sectionName} div.articles div.slide.s2`);
        const elThree = document.querySelector(`#${sectionName} div.articles div.slide.s3`);
        const elFour = document.querySelector(`#${sectionName} div.articles div.slide.s4`);
        const elFive = document.querySelector(`#${sectionName} div.articles div.slide.s5`);
        const elSix = document.querySelector(`#${sectionName} div.articles div.slide.s6`);
        const elSeven = document.querySelector(`#${sectionName} div.articles div.slide.s7`);

        elOne.classList.remove("s1");
        elOne.classList.add("s7");

        elTwo.classList.remove("s2");
        elTwo.classList.add("s1");

        elThree.classList.remove("s3");
        elThree.classList.add("s2");

        elFour.classList.remove("s4");
        elFour.classList.add("s3");

        elFive.classList.remove("s5");
        elFive.classList.add("s4");

        elSix.classList.remove("s6");
        elSix.classList.add("s5");

        elSeven.classList.remove("s7");
        elSeven.classList.add("s6");

    });

}