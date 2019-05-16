const header = $('#header'); // находим элемент
const windowHeight = $(window).height(); // узнаем высоту экрана (области просмотра)
const headerHeight = header.outerHeight(); // узнаем высоту шапки
const scrollTop = $('.scroll-top');

function onScroll(e) {
    let pos = $(window).scrollTop(); // определяем позицию скрола 

    if (pos > headerHeight + 100) { // если проскролели больше высоты шапки +100px
        header.css({
            'position': 'fixed',
            'top': - (headerHeight + 50),
            'background-color': '#000'
        });
    }
    if (pos > windowHeight) { // если проскролели больше высоты экрана
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });

        scrollTop.css({
            'display': 'block'
        });
    }

    if (pos < headerHeight + 100) { // если проскролели меньше высоты шапки
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });

        scrollTop.css({
            'display': 'none'
        });
    }
}

$(window).on('scroll', onScroll); // вешаем событие на скролл в окне

// Scroll to element
function scrollTo() {
    const scrollBtn = $('[data-scroll]'); // ищем все элементы у которого есть атрибут data-scroll

    function onScroll(e) {
        e.preventDefault(); // отменить стандартное действие
        
        const target = $(this).attr('data-scroll'); // получаем значение атрибута data-scroll 
        const dist = $(target).offset().top; // меряем растояние до блока
        $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); // анимируем скролл до нужного блока 
    }

    scrollBtn.on('click', onScroll); // отслеживаем событие клик на все элементы с атрибутом data-scroll
}

$(window).on('load', scrollTo);


