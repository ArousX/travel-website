document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const title = document.querySelector('.img_font1');
    const desc = document.querySelector('.img_font2');

    if (!banner || !title || !desc) {
        console.error('元素未找到');
        return;
    }

    const slides = [
        { img: 'url("img/图1.jpg")', title: '山水如画', desc: '探索葵潭的自然之美' },
        { img: 'url("img/图2.jpg")', title: '古韵悠长', desc: '感受千年的文化底蕴' },
        { img: 'url("img/图3.webp")', title: '味蕾盛宴', desc: '品味地道的葵潭味道' }
    ];

    // 预加载图片
    let loadedCount = 0;
    slides.forEach((slide) => {
        const img = new Image();
        const url = slide.img.replace('url("', '').replace('")', '');
        img.src = url;
        img.onload = function() {
            loadedCount++;
            console.log('图片加载完成: ' + url + ' (' + loadedCount + '/' + slides.length + ')');
        };
        img.onerror = function() {
            console.error('图片加载失败: ' + url);
        };
    });

    let current = 0;

    function changeSlide() {
        current = (current + 1) % slides.length;
        banner.style.backgroundImage = slides[current].img;
        title.textContent = slides[current].title;
        desc.textContent = slides[current].desc;
    }

    // 等待所有图片加载完成后再开始轮播
    function startCarousel() {
        if (loadedCount >= slides.length) {
            console.log('所有图片加载完成，开始轮播');
            setInterval(changeSlide, 3000);
        } else {
            console.log('等待图片加载... (' + loadedCount + '/' + slides.length + ')');
            setTimeout(startCarousel, 500);
        }
    }

    // 延迟1秒后开始检查
    setTimeout(startCarousel, 1000);
});
