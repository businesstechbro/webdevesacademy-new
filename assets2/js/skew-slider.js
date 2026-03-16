// Skew Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const sliderWrap = document.querySelector('.skew-slider-wrap');
  const slides = document.querySelectorAll('.skew-slider-item');
  const prevBtn = document.querySelector('.skew-slider-prev');
  const nextBtn = document.querySelector('.skew-slider-next');
  const slideCounter = document.querySelector('.slides-numbers');
  
  if (!sliderWrap || !slides.length || !prevBtn || !nextBtn) {
    console.log('Slider elements not found');
    return;
  }
  
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  const animationDuration = 1500; // ms - increased for slower animation
  const autoplayInterval = 5000; // ms - time between auto slides (5 seconds)
  let isAnimating = false;
  let autoplayTimer = null;
  
  function startAutoplay() {
    // Clear existing timer if any
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
    
    // Set up automatic sliding
    autoplayTimer = setInterval(() => {
      goToNextSlide();
    }, autoplayInterval);
  }
  
  function resetAutoplay() {
    // Reset timer on user interaction
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
    startAutoplay();
  }
  
  function updateSlide(index, direction = 'next') {
    if (isAnimating) return;
    
    isAnimating = true;
    const prevIndex = currentSlideIndex;
    const currentSlide = slides[prevIndex];
    const nextSlide = slides[index];
    
    // Current slide - slides up, zooms out (scales down) and fades out
    currentSlide.style.transform = 'translateY(-100%) scale(0.7)';
    currentSlide.style.opacity = '0';
    currentSlide.style.transition = `all ${animationDuration}ms ease-in-out`;
    
    // Next slide - zoom in effect (scales from 0.7 to 1)
    nextSlide.classList.add('slide--current');
    nextSlide.style.transform = 'scale(0.7)';
    nextSlide.style.opacity = '0';
    nextSlide.style.transition = `all ${animationDuration}ms ease-in-out`;
    
    // Trigger the zoom in animation
    setTimeout(() => {
      nextSlide.style.transform = 'scale(1)';
      nextSlide.style.opacity = '1';
    }, 50);
    
    // Remove animation after completion
    setTimeout(() => {
      currentSlide.classList.remove('slide--current');
      currentSlide.style.transition = 'none';
      currentSlide.style.transform = 'translateY(0) scale(1)';
      nextSlide.style.transition = 'none';
      isAnimating = false;
    }, animationDuration);
    
    // Update the counter
    if (slideCounter) {
      const activeCounter = slideCounter.querySelector('.text-1');
      if (activeCounter) activeCounter.textContent = index + 1;
    }
    
    currentSlideIndex = index;
  }
  
  function goToNextSlide() {
    let nextIndex = currentSlideIndex + 1;
    if (nextIndex >= totalSlides) {
      nextIndex = 0;
    }
    updateSlide(nextIndex, 'next');
  }
  
  function goToPrevSlide() {
    let prevIndex = currentSlideIndex - 1;
    if (prevIndex < 0) {
      prevIndex = totalSlides - 1;
    }
    updateSlide(prevIndex, 'prev');
  }
  
  // Add click event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      goToNextSlide();
      resetAutoplay();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      goToPrevSlide();
      resetAutoplay();
    });
  }
  
  // Initialize with counter
  if (slideCounter) {
    const totalCounter = slideCounter.querySelector('.text-3');
    if (totalCounter) totalCounter.textContent = totalSlides;
  }
  
  // Start autoplay
  startAutoplay();
});
