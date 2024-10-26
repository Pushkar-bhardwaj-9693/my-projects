let price = [250 , 645 , 300 , 900 , 50];

idx = 0;

for(let dis of price) {
    console.log(`value at index ${idx} = ${dis}`);
    let offer = dis / 10;
    price[idx] = price[idx] - offer;
    console.log(`value ofter offer is ${price[idx]}`)
    idx++
}