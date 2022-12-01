const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="./Images/vekano logo.png" class="logo" alt="">
        <div class="footer-ul-container">

        </div>
    </div>
    <p class="footer-title">About company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repelleum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - hoorlamiedhey@gmail.com</p>
    <p class="info">telephone - +234 703 679 2432</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    <p class="footer-credit">Veekano, Best online store</p>
    `;
}

createFooter();