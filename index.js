

onload = () => {
  // Allow the initial "not-loaded" pause so animations start together
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);

    // After the flower animation has played, go to the main page
    // Adjust the timeout if you tweak animation timing in CSS
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 10000); // 10 seconds for the flower animation
  }, 1000);
};
