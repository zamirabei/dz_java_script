document.addEventListener("DOMContentLoaded", async () => {
    const cardContainer = document.querySelector('.card-container');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                    <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-shading-dragon-pattern-hand-painted-300-pixel-map-png-image_348475.jpg" alt="Placeholder Image">
                  <div class="card-content">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>
                `;

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});