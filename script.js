const detailsButton = document.getElementById('detail-submit-btn').addEventListener('click', function(){
    const byerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = byerDetails.value;
    byerDetails.value = '';
})


const addProductBtn = document.getElementById('add-details-btn').addEventListener('click', function(){

    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');
    const itemQuantityInput = document.getElementById('item-quantity-input');
    const infoTable = document.getElementById('info-table');

    console.log(itemNameInput.value, itemPriceInput.value, itemQuantityInput.value)
})