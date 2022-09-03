function getPasswordChecker(newPassword) {
    const password = newPassword;
    return (yourPassword) => {
        if (yourPassword === password) {
            return true;
        }
        
        return false;
    }
}

const checkPassword = getPasswordChecker('fd12r');
const checkPassword2 = getPasswordChecker('check');

console.log(getPasswordChecker('check'));
console.log(checkPassword('1111'));
console.log(checkPassword('fd12r'));
console.log(checkPassword2('1111'));
console.log(checkPassword2('fd12r'));
console.log(checkPassword2('check'));
console.log(checkPassword('check'));