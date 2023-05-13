function setupListeners() {
    const imgElements = document.querySelectorAll('img');

    imgElements.forEach((img) => {
        img.addEventListener('mouseenter', highlightImage, false);
        img.addEventListener('mouseleave', unhighlightImage, false);
    });
}

function highlightImage(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim');
    }
    displayProductInfo(event.target.id);
}

function unhighlightImage(event) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }

    const priceElement = document.getElementById('color-price');
    priceElement.textContent = '';

    const colorElement = document.getElementById('color-name');
    colorElement.textContent = '';

    event.preventDefault();
}

function displayProductInfo(productID) {
    let productPrice;
    let productColor;

    switch (productID) {
        case 'pn1':
            productPrice = '$19.99';
            productColor = 'Lime Green';
            break;
        case 'pn2':
            productPrice = '$12.99';
            productColor = 'Medium Brown';
            break;
        case 'pn3':
            productPrice = '$11.99';
            productColor = 'Royal Blue';
            break;
        case 'pn4':
            productPrice = '$14.99';
            productColor = 'Bright Red';
            break;
        case 'pn5':
            productPrice = '$9.99';
            productColor = 'Solid White';
            break;
        case 'pn6':
            productPrice = '$15.99';
            productColor = 'Solid Black';
            break;
        case 'pn7':
            productPrice = '$8.99';
            productColor = 'Medium Blue';
            break;
        case 'pn8':
            productPrice = '$16.99';
            productColor = 'Light Purple';
            break;
        case 'pn9':
            productPrice = '$17.99';
            productColor = 'Bright Yellow';
            break;
        default:
            productPrice = '';
            productColor = '';
    }

    updateDisplayedPrice(productColor, productPrice);
}

function updateDisplayedPrice(productColor, productPrice) {
    const priceElement = document.getElementById('color-price');
    priceElement.textContent = productPrice;

    const colorElement = document.getElementById('color-name');
    colorElement.textContent = productColor;
}

setupListeners();
