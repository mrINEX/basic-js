class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool;
    }

    encrypt(message, key) {
        if(message === undefined || key === undefined) {
            throw 'error';
        }
        // console.log('enc:',message,'key:', key);
        let answer = '';
        for(let i = 0, j = 0; i < message.length; i += 1, j += 1) {
            if(/[A-Za-z]/.test(message[i])) { // is letter
                if(message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) { // is UPPERCASE
                    if (key[j % key.length].charCodeAt() >= 65 && key[j % key.length].charCodeAt() <= 90) {
                        let res = ( message[i].charCodeAt()-65 + key[j % key.length].charCodeAt() - 65) % 26;
                        answer += String.fromCharCode(res + 65);
                    }
                    if (key[j % key.length].charCodeAt() >= 97 && key[j % key.length].charCodeAt() <= 122) {
                        let res = ( message[i].charCodeAt()-65 + key[j % key.length].charCodeAt() - 97) % 26;
                        answer += String.fromCharCode(res + 65);
                    }
                }
                if(message[i].charCodeAt() >= 97 && message[i].charCodeAt() <= 122) { // is lowercase
                    if (key[j % key.length].charCodeAt() >= 65 && key[j  % key.length].charCodeAt() <= 90) {
                        let res = ( message[i].charCodeAt()-97 + key[j % key.length].charCodeAt() - 65) % 26;
                        answer += String.fromCharCode(res + 97);
                    }
                    if (key[j % key.length].charCodeAt() >= 97 && key[j % key.length].charCodeAt() <= 122) {
                        let res = ( message[i].charCodeAt()-97 + key[j % key.length].charCodeAt() - 97) % 26;
                        answer += String.fromCharCode(res + 97);
                    }
                }
            } else {
                answer += message[i];
                j -= 1;
            }
        }
        if(this.bool === undefined) {
            return answer.toUpperCase();
        } else {
            return answer.toUpperCase().split('').reverse().join('');
        }
        
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage === undefined || key === undefined) {
            throw 'error';
        }
        // console.log('dec:',encryptedMessage,'key:', key);
        let answer = '';
        for(let i = 0, j = 0; i < encryptedMessage.length; i += 1, j += 1) {
            if( /[A-Za-z]/.test(encryptedMessage[i])) {
                if(encryptedMessage[i].charCodeAt() >= 65 && encryptedMessage[i].charCodeAt() <= 90) {
                    if (key[j % key.length].charCodeAt() >= 65 && key[j % key.length].charCodeAt() <= 90) {
                        // let res = ( encryptedMessage[i].charCodeAt()-65 + key[j % key.length].charCodeAt() - 65) % 26;
                        let res = ( (encryptedMessage[i].charCodeAt()-65) - (key[j % key.length].charCodeAt() - 65) % 26 );
                      	if(res < 0) {
                        	res = eval(`26 ${res}`);
                        }
                        answer += String.fromCharCode(res + 65);
                    }
                    if (key[j % key.length].charCodeAt() >= 97 && key[j % key.length].charCodeAt() <= 122) {
                        // let res = ( encryptedMessage[i].charCodeAt()-65 + key[j % key.length].charCodeAt() - 97) % 26;
                        let res = ( (encryptedMessage[i].charCodeAt()-65) - (key[j % key.length].charCodeAt() - 97) % 26 );
                      	if(res < 0) {
                        	res = eval(`26 ${res}`);
                        }
                        answer += String.fromCharCode(res + 65);
                    }
                    // let res = (encryptedMessage[i].charCodeAt()-65 + key[j % key.length].charCodeAt()-65) % 26;
                    // answer += String.fromCharCode(res + 65);
                }
                if(encryptedMessage[i].charCodeAt() >= 97 && encryptedMessage[i].charCodeAt() <= 122) {
                    if (key[j % key.length].charCodeAt() >= 65 && key[j  % key.length].charCodeAt() <= 90) {
                        // let res = ( encryptedMessage[i].charCodeAt()-97 + key[j % key.length].charCodeAt() - 65) % 26;
                        let res = ( (encryptedMessage[i].charCodeAt()-97) - (key[j % key.length].charCodeAt() - 65) % 26 );
                      	if(res < 0) {
                        	res = eval(`26 ${res}`);
                        }
                        answer += String.fromCharCode(res + 97);
                    }
                    if (key[j % key.length].charCodeAt() >= 97 && key[j % key.length].charCodeAt() <= 122) {
                        // let res = ( encryptedMessage[i].charCodeAt()-97 + key[j % key.length].charCodeAt() - 97) % 26;
                        let res = ( (encryptedMessage[i].charCodeAt()-97) - (key[j % key.length].charCodeAt() - 97) % 26 );
                      	if(res < 0) {
                        	res = eval(`26 ${res}`);
                        }
                        answer += String.fromCharCode(res + 97);
                    }
                }
            } else {
                answer += encryptedMessage[i];
                j -= 1;
            }
        }
        if(this.bool === undefined) {
            return answer.toUpperCase();
        } else {
            return answer.toUpperCase().split('').reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;
