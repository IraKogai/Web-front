// таби
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click',  () => {
        //скрываем вкладки
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        //отобразиьть содержимое текущей вкладки
        const tabId = btn.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');

        //робимо активной текущ вкладку
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});