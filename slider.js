let arrImages = [{
    src: "asset/bob.jpg",
    title: "Боб-тейл"
  }, 
  {
    src: "asset/frbul.jpg",
    title: "Французский будьдог"
  }, 
  {
    src: "asset/jeck.jpg",
    title: "Джек-Рассел Терьер"
  }, 
  {
    src: "asset/labr.jpg",
    title: "Лабрадор"
  }, 
  {
    src: "asset/shar.jpg",
    title: "Шарпей"
  }
]

 function addImages (arrImages) {
    arrImages.forEach((src, index) => {
        for (let index = 0; index < arrImages.length; index++) {
            setTimeout(function() {  
                for (let key in src) {
                    if (key != "title") {
                        let srcKey = document.getElementById('img');
                        srcKey.insertAdjacentHTML ('afterbegin', `<img src = ${src[key]} width="799px" height="499px" id ="add-img">`);
                    } 
                    if (key != "src") {
                        let titleKey = document.getElementById('slider-images-title');
                        titleKey.insertAdjacentHTML ('afterbegin', `<span id ="add-title">${src[key]}</span> `);
                    }
                }
            }, 2000 * (index + 1));
        }
    });
    document.querySelector('#butl').addEventListener('click', addImages => {
     return arrImages[index++]
    });
    document.querySelector('#butr').addEventListener('click', addImages => {
      return arrImages[index--]
     });
    document.querySelector('.dot').addEventListener('click', addImages => {
      return arrImages[index++]
     });
   
}
 addImages()

 
