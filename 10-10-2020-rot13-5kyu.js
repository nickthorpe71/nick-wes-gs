function rot13(message) {
  let cipherText = '';

  for (const c of message)
    if (c >= 'a' && c <= 'z')
      cipherText += encode(c, 97);
    else if (c >= 'A' && c <= 'Z')
      cipherText += encode(c, 65);
    else
      cipherText += c;

  return cipherText;
}

function encode(c, n) {
  return String.fromCharCode((c.charCodeAt(0) + 13 - n) % 26 + n);
}


console.log(rot13('A message from Caesar!'));