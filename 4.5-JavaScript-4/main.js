function receipt() {
    const arrayReceipt = [{
        'Lavash': {
            info: 'Big Cheese',
            price: 15000
        }, 'Hot-dog': {
            info: 'mini',
            price: 8500
        }, 'Cola': {
            info: '1.5 L',
            price: 9000
        }
    }, {
        'Milk': {
            info: '1 L',
            price: 8500
        },
        'Sugar': {
            info: '1 kg',
            price: 7000
        }
    }, {
        'Cola': {
            info: '1 L',
            price: 6500
        },
        'Fanta': {
            info: '1.5 L',
            price: 9000
        },
        'Lipton': {
            info: '1.2 L',
            price: 5000
        },
        'Nestle': {
            info: '10 L',
            price: 8500
        }
    }]

    const count = Math.floor(Math.random() * arrayReceipt.length)
    return arrayReceipt[count]
}
   let objecrt = receipt()
   let prodectName = 'Вы заказали: ';
   let dostavka = 9000

for (const name in objecrt) {
    prodectName += `${name} `
    for (const infoPrice in objecrt[name]) {
        if (infoPrice == 'info') {
            prodectName += `${objecrt[name][infoPrice]}, `
        } else if (infoPrice == 'price') {
            dostavka += objecrt[name][infoPrice]
        }
    }
}

console.log(`${prodectName} | Общая стоимость ${dostavka} сум с доставкой (9000)`);


