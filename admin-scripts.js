function testAlert() {
    try{

        window.crypto.subtle.generateKey(
            {
              name: "RSA-OAEP",
              modulusLength: 4096,
              publicExponent: new Uint8Array([1, 0, 1]),
              hash: "SHA-256"
            },
            true,
            ["encrypt", "decrypt"]
          ).then(key => {
              window.crypto.subtle.exportKey('jwk', key.privateKey).then(privateKey=>{

                  document.getElementById('edit-jwt-secret').value = privateKey.d
            })
          });

    }catch(err) {
        alert(err);
    }
}
