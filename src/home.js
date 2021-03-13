function loadHome() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    
    const header = document.createElement('h1');
    header.textContent = "Bella Vita";

    main.appendChild(header);
}


export default loadHome;