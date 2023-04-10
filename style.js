// Function to open the menu
const openMenu = () => {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('aside').classList.add('active');
  };
  
  // Function to close the menu
  const closeMenu = () => {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('aside').classList.remove('active');
  };
  
  // Event listener for the menu button
  document.getElementById('menubtn').addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });
  
  // Event listener for the close button and the backdrop
  document.querySelector('aside button.close').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });
  
  document.querySelector('.backdrop').addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });
  
  // document.lastScrollPosition = 0;
  // document. lastCentered = 0;
  // document. onWayTo = null;
  
  // function scrollToSection(destIndex) {
  //   const sections = [...document.querySelectorAll('section')];
  //   const destSection = sections[destIndex];
  //   if (destSection) {
  //     onWayTo = destIndex;
  //     window.scrollTo({ top: destSection.offsetTop });
  //   }
  // }
  
  // document.addEventListener( type: 'scroll', listener: () => {
  //   const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  //   const sections = [...document.querySelectorAll('selectors: 'section')];
  
  //   if (document.onWayTo === null) {
  //     const destIndex = direction === 'up' ? documnet.lastCentered - 1 : document.lastCentered + 1;
  //     if (destIndex >= 0 && destIndex < sections.length) {
  //       console.log({ destIndex, direction });
  //       document.onWayTo =destIndex;
  //       window.scroll( x: 0, sections[deskIndex].offsetTop);
  //     }
  //   }
  
  //   sections.forEach((section, index: number) => {
  //     if (window.pageYOffset === section.offsetTop) {
  //       document.lastCentered=index;
  //       section.className='active';
  //       if (document.onWayTo === index) {
  //         document.onWayTo = null;
  //       }
  //     }
  //     else{
  //       section.className='';
  //     }
  //   });
  
  //   lastScrollPosition = window.pageYOffset;
  // });
  