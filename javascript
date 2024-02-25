// 16進数の文字列をASCII文字列に変換する関数
function hexToAscii(hexString) {
    var hexArray = hexString.split(' ');
    var asciiString = '';

    for (var i = 0; i < hexArray.length; i++) {
        var decimalValue = parseInt(hexArray[i], 16);
        asciiString += String.fromCharCode(decimalValue);
    }

    return asciiString;
}

// ASCII文字列を取得
var result = hexToAscii(value);
return result;
