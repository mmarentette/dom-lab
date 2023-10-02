// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// 2.3
topMenuEl.classList.add('flex-around');

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

// 4.0
const subMenuEl = document.getElementById('sub-menu');
// console.log(subMenuEl);
// 4.1
subMenuEl.style.height = '100%';
// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// 4.3
subMenuEl.classList.add('flex-around');
// 4.4
subMenuEl.style.position = 'absolute';
// 4.5
subMenuEl.style.top = '0';

// 5.0
// Completed above - see Menu data structure on line 1
// 5.1
const topMenuLinks = document.querySelectorAll('#top-menu a');
// console.log(topMenuLinks);
let showingSubMenu = false;
// console.log(showingSubMenu);
// 5.2
topMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    const link = e.target;
    if (link.tagName !== 'A') return;
    // console.log(link.textContent);
    // 5.3
    if (link.classList.contains('active')) { // Note that the includes method will not work on classList; must use contains method
        link.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    };
    // 5.4
    topMenuLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    // 5.5
    link.classList.add('active');
    // 5.6 *** NEED HELP WITH THIS QUESTION - why didn't link.hasOwnProperty('subLinks') work? ***
    const linkData = menuLinks.find(function(linkObj) {
        return linkObj.text === link.textContent;
    }); 
    showingSubMenu = 'subLinks' in linkData;
    // 5.7
    if (showingSubMenu) {
        buildSubMenu(linkData.subLinks); // Why do we need to use linkData here instead of link to make this work?
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = '0';
        mainEl.innerHTML = '<h1>about</h1>';
    };
});
// 5.8
function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(subLink) {
        const subLinkEl = document.createElement('a');
        subLinkEl.setAttribute('href', subLink.href);
        subLinkEl.textContent = subLink.text;
        subMenuEl.appendChild(subLinkEl);
    });
}

// 6.0
subMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    const link = e.target;
    if (link.tagName !== 'A') return;
    // console.log(link.textContent);
    // 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    // 6.2
    topMenuLinks.forEach(function(link) {
        link.classList.remove('active');
    })
    // 6.3
    mainEl.innerHTML = `<h1>${link.text}</h1>`;
})