$(`document`).ready(function() {
    $('.single-item').slick();
});
fetch('dist/catalog.json')
    .then(response => response.json())
    .then(json => {
        json.jeans.forEach((product) => {
            console.log(product);
            let itemBox = document.querySelector('.item_box')
            let divCard = document.createElement('div')
            let slider = document.createElement('div')
            let descr = document.createElement('div');
            descr.classList.add('descr')
            slider.classList.add('single-item')
            divCard.classList.add("item_box_card");
            itemBox.append(divCard);
            divCard.append(slider, descr)
            descr.innerHTML = `
            <p>${product.name}</p> 
            <p>Бренд: ${product.brand}</p>
            <p>Цвет: ${product.color}</p>
            <p>В наличии: ${product.quantity}</p>
            <p><span class="old_price">Старая цена: ${product.previousPrice}</span><span class="new_price">Новая цена: ${product.currentPrice}</span></p>
            <p>Параметры: ${product.parametrs[0]}</p>
        <p>Описание: ${product.description[0]}</p>
            `
            product.imageUrls.forEach((url) => {
                let img = document.createElement('img');
                img.src = url;
                slider.append(img);
            })
        });

    })