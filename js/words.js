function foundMaxWord() {
    var textAll = document.querySelector('.form__input').value;
    var textArray = textAll.split(' ');
    textArray.sort(function (a, b) {
        return b.length - a.length;
    });

    var textArrayThreeWords = textArray.slice(0, 3);
    alert('Три самых длинных слова:  ' + textArrayThreeWords.join(' ; '));
}

document.querySelector('.form__button').addEventListener('click',foundMaxWord,false);


