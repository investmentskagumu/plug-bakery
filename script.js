function sendOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let product = document.getElementById("product").value;
  let quantity = document.getElementById("quantity").value;
  let notes = document.getElementById("notes").value;

  let message =
    `Hello Plug Cake Shop,%0A` +
    `I would like to order:%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Product: ${product}%0A` +
    `Quantity: ${quantity}%0A` +
    `Notes: ${notes}`;

  window.open(`https://wa.me/254705841045?text=${message}`, "_blank");
}
