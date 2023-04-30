const invertImages = () => {
    const leftImage = document.getElementById('left-image');
    const rightImage = document.getElementById('right-image');
    
    // Store the src of the left image in a variable
    const leftImageSrc = leftImage.src;
    
    // Swap the src of the left and right images
    leftImage.src = rightImage.src;
    rightImage.src = leftImageSrc;
  };
  