document.addEventListener('DOMContentLoaded', function() {
    // Фільтрація товарів
    const genreFilter = document.getElementById('genre-filter');
    const platformFilter = document.getElementById('platform-filter');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
        const selectedGenre = genreFilter.value;
        const selectedPlatform = platformFilter.value;

        productCards.forEach(card => {
            const cardGenre = card.dataset.genre;
            const cardPlatform = card.dataset.platform;

            const genreMatch = selectedGenre === 'all' || cardGenre === selectedGenre;
            const platformMatch = selectedPlatform === 'all' || cardPlatform === selectedPlatform;

            if (genreMatch && platformMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (genreFilter && platformFilter) {
        genreFilter.addEventListener('change', filterProducts);
        platformFilter.addEventListener('change', filterProducts);
    }

    // Додавання до кошика
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            alert(`Товар з ID ${productId} додано до кошика!`);
        });
    });

    // Видалення з кошика
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            if (confirm('Ви впевнені, що хочете видалити цей товар з кошика?')) {
                this.closest('.cart-item').remove();
                updateCartSummary();
            }
        });
    });

    // Оновлення підсумку кошика
    function updateCartSummary() {
        // Тут можна додати логіку для перерахунку загальної суми
    }

    // Кнопка оформлення замовлення
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Дякуємо за замовлення! Наш менеджер зв\'яжеться з вами найближчим часом.');
        });
    }
});