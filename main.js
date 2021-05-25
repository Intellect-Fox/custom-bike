const buttons = document.querySelectorAll('.js-product-button');
const counterEl = document.getElementById('counter')
const amountEl = document.getElementById('amount')
const buttonActiveText = "Add to Basket";
const buttonDisabledText = 'Remove from Basket';
let currentBasket = [];

buttons.forEach(ButtonEl => {
  ButtonEl.addEventListener('click', event => {
    event.preventDefault();
    const el = event.currentTarget
    const {id, price} = el.dataset;
    if (el.classList.contains('disabled')) {
        el.textContent = buttonActiveText;
        currentBasket = currentBasket.filter((item) => {
          return item.id !== id;
        });
    } else {
      el.textContent = buttonDisabledText
      currentBasket.push({ id, price: +price})
    }
    let amount = 0;
    currentBasket.forEach(item => amount+=item.price);
    amountEl.textContent = `$${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    counterEl.textContent = currentBasket.length.toString()
      el.classList.toggle("disabled");
  });
});
