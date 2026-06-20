document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const title = document.querySelector('.img_font1');
    const desc = document.querySelector('.img_font2');

    if (!banner || !title || !desc) {
        console.error('元素未找到');
        return;
    }

    const baseUrl = 'https://raw.githubusercontent.com/ArousX/travel-website/main/img/';
    const slides = [
        { img: 'url("' + baseUrl + '图1.jpg")', title: '山水如画', desc: '探索葵潭的自然之美' },
        { img: 'url("' + baseUrl + '图2.jpg")', title: '古韵悠长', desc: '感受千年的文化底蕴' },
        { img: 'url("' + baseUrl + '图3.webp")', title: '味蕾盛宴', desc: '品味地道的葵潭味道' }
    ];

    let current = 0;

    setInterval(() => {
        current = (current + 1) % slides.length;
        banner.style.backgroundImage = slides[current].img;
        title.textContent = slides[current].title;
        desc.textContent = slides[current].desc;
    }, 3000);
});
