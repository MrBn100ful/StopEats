
function getElementsByText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
  }

const pricelimit = async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(4000);
    const price = document.querySelector('.ca.eg.eh.ah.da').innerText;
    console.log(price);
    const priceclear = price.replace(/[^0-9]/g, '');
    console.log(priceclear);
    const priceint = parseInt(priceclear * 0.01);
    console.log(priceint);
    if (priceint > 20) {
        alert('Le prix est supérieur à 20€');
        document.documentElement.innerHTML = '';
    }
    
};


(function() {
    pricelimit();
})();