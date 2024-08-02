document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const searchIcon = document.getElementById('searchicon');
    const iconX = document.getElementById('iconX');
    const toggleMenu = document.querySelector('.toggle-menu');
    const navbar = document.querySelector('.navbar');
    const cansel = document.getElementById('cansel');

    iconX.style.display = 'none';
    cansel.style.display ="none";


    searchIcon.addEventListener('click', () => {
        searchBtn.style.display = 'block';
        searchIcon.style.display = 'none';
        iconX.style.display = 'block';
    });

    iconX.addEventListener('click', () => {
        searchBtn.style.display = 'none';
        searchIcon.style.display = 'block';
        iconX.style.display = 'none';
    });

    toggleMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        // cansel.style.display = 'inline';
        // toggleMenu.style.display = 'none';
    });

    const navItems = document.querySelectorAll('.navbar ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    const cardsContainer = document.querySelector('.cards');
   const cards = document.querySelectorAll('.card');
   const cardStyle = getComputedStyle(cards[0]);
   const cardWidth = cards[0].offsetWidth + parseInt(cardStyle.marginRight) + parseInt(cardStyle.marginLeft);
   const gap = 60; // تحديد الفجوة يدويًا حسب ما هو موجود في CSS
   let currentIndex = 0;

   function showCards(index) {
       const offset = -index * (cardWidth + gap);
       cardsContainer.style.transform = `translateX(${offset}px)`;
   }

   document.getElementById('next').addEventListener('click', () => {
       if (currentIndex < cards.length - 3) {
           currentIndex++;
           showCards(currentIndex);
       }
   });

   document.getElementById('prev').addEventListener('click', () => {
       if (currentIndex > 0) {
           currentIndex--;
           showCards(currentIndex);
       }
   });

   // Show the first set of cards by default
   showCards(currentIndex);







   const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        const rootElement = document.documentElement;

        function handleScroll() {
            // إظهار الزر عند التمرير لجزء معين من الصفحة (مثلاً 200 بيكسل)
            if (rootElement.scrollTop > 200) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        function scrollToTop() {
            // إعادة التمرير لأعلى الصفحة
            rootElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        scrollToTopBtn.addEventListener('click', scrollToTop);
        document.addEventListener('scroll', handleScroll);
});
