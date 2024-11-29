document.getElementById('alert_1').addEventListener('click', () => {
  Swal.fire({
    imageUrl: "./qr-usdt.jpg",
    confirmButtonText: "Отправил 100 USDT",
    html: `
      <div>
        <div class="crypto-address">
          <span><strong>TPvkDpDuXkxwzLW8YJ7Nxi8TinPe84MNSV</strong></span> <br />
              <button class="copy-button1" data-clipboard-text="TPvkDpDuXkxwzLW8YJ7Nxi8TinPe84MNSV">
              <i class="far fa-copy"> </i></button>
         </div>
      </div>
    `,
  });
});
new ClipboardJS('.copy-button1');

document.getElementById('alert_2').addEventListener('click', () => {
  Swal.fire({
    imageUrl: "./qr-bitcoin.jpg",
    confirmButtonText: "Отправил 1 BTC",
    html: `
      <div>
        <div class="crypto-address">
          <span><strong>bc1q4len7sv44fhtch8pq7wc2mrlj2edtk0q0pu9le</strong></span> <br />
              <button class="copy-button2" data-clipboard-text="bc1q4len7sv44fhtch8pq7wc2mrlj2edtk0q0pu9le">
              <i class="far fa-copy"> </i></button>
         </div>
      </div>
    `,
  });
});
new ClipboardJS('.copy-button2');

document.getElementById('alert_3').addEventListener('click', () => {
  Swal.fire({
    imageUrl: "./qr-ether.jpg",
    confirmButtonText: "Отправил 1 ETH",
    html: `
      <div>
        <div class="crypto-address">
          <span><strong>0x3a71d5379a4834154cd664e575571098d6dd861e</strong></span> <br />
              <button class="copy-button3" data-clipboard-text="0x3a71d5379a4834154cd664e575571098d6dd861e">
              <i class="far fa-copy"> </i></button>
         </div>
      </div>
    `,
  });
});
new ClipboardJS('.copy-button3');
