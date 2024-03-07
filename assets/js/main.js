const roles = [
    "Java Development",
    "Ui & Ux Design",
    "Android Development",
    "Salesforce Development"
  ];
  
  let index = 0;
  
  function updateHeading() {
    document.getElementById("role").textContent = " " + roles[index];
    index = (index + 1) % roles.length;
    setTimeout(updateHeading, 2000); // Call updateHeading again after 2 seconds
  }
  
  updateHeading(); // Initial call to start the sequence
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1300, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });