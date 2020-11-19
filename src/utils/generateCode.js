function generateCode(length, type) {
    var result           = '';
    const numeric        = '0123456789';
    const alfaNumeric    = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var characters       = type === 'numeric' ? numeric: alfaNumeric;
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 module.exports = generateCode;
