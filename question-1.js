// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};
let total=0
// เริ่มเขียนโค้ดตรงนี้
inventory.apple = { price: 35, quantity: 200};
inventory.orange = { price: 20, quantity: 300};
for ( let fruit in inventory) {
  total += inventory[fruit].price*inventory[fruit].quantity
}
console.log(`Total inventory value: ${total} baht`)



