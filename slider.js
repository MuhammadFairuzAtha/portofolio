
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = 0; // ganti sesuai tinggi navbar kamu
        const offsetTop = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

