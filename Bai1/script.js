const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.indexOf('Meat') === -1) {
    shoppingCart.unshift('Meat')
}

if (shoppingCart.indexOf('Sugar') === -1) {
    shoppingCart.push('Sugar')
}

if (shoppingCart.indexOf('Honey') > -1) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); 
}

if (shoppingCart.indexOf('Tea') !== -1) {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'; 
}
console.log(shoppingCart)


function randomUserIp () {
    var ip = (Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
    return ip
}
console.log(randomUserIp())


function randomMacAddress() {
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress += 
        hexDigits.charAt(Math.round(Math.random() * 15)) + hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }
    return macAddress;
}
console.log(randomMacAddress())


