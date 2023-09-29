// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// 1.0
const mainEl = document.querySelector('main');
// console.log(mainEl);
// 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
// 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// 1.3
mainEl.classList.add('flex-ctr'); // Could also use className (but following hint from TI)

// 2.0
const topMenuEl = document.getElementById('top-menu');
// console.log(topMenuEl);
// 2.1
topMenuEl.style.height = '100%';
// console.log(topMenuEl.style.height);
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// 2.3
topMenuEl.classList.add('flex-around');
// console.log(topMenuEl.classList);

// 3.0
// Completed above - see Menu data structure on line 1
// 3.1
menuLinks.forEach(function(menuLink) {
    const menuLinkEl = document.createElement('a');
    menuLinkEl.setAttribute('href', menuLink.href);
    menuLinkEl.innerText = menuLink.text;
    topMenuEl.appendChild(menuLinkEl);
    // console.log(menuLinkEl);
})

