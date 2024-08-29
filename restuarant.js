// JavaScript for toggling the 'Learn More' section in the About Us section
document.getElementById('btn1').addEventListener('click', function() {
    // Toggle the visibility of the 'Learn More' section
    const aboutColumn = document.querySelector('#about .about_column:nth-child(2)');
    if (aboutColumn.style.display === 'none' || aboutColumn.style.display === '') {
        aboutColumn.style.display = 'block';
    } else {
        aboutColumn.style.display = 'none';
    }
});

// JavaScript for 'Order Now' button in the header
document.querySelector('.btn').addEventListener('click', function() {
    // Scroll to the Order section smoothly
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
});

// JavaScript for basic form validation
document.querySelector('.btn2').addEventListener('click', function(event) {
    const name = document.querySelector('.inp_box[type="text"]').value;
    const email = document.querySelector('.inp_box[type="email"]').value;
    const address = document.querySelector('.text_area').value;

    if (name === '' || email === '' || address === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Your order has been placed!');
    }
});
