const scroller = document.querySelector(".container");
scroller.addEventListener("scroll", (event) => {
    const position = scroller.scrollTop;
    document.querySelectorAll('section').forEach(function(section) {
    let target = section.offsetTop - 100;
    let id = section.getAttribute('id');
    if (position >= target) {
        document.querySelectorAll('#navigation > ul > li > a').forEach(function(a) {
          a.classList.remove('active');
        });
        document.querySelector('#navigation > ul > li > a[href="#' + id + '"]').classList.add('active');
      }
    });
  });
