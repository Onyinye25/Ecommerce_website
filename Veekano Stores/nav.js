const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="./Images/vekano logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="./Images/user-.png" alt=""></a>
                <a href="#"><img src="./Images/cart-.png" alt=""></a>
            </div>
        </div>
        </nav>
        <ul class="links-container">
    <li class="link-item"><a href="#" class="link">Male accessories</a></li>
    <li class="link-item"><a href="#" class="link">Female accessories</a></li>
    <li class="link-item"><a href="#" class="link">Skin care</a></li>
    <li class="link-item"><a href="#" class="link">Household Items</a></li>
        </ul>
    `;
}
