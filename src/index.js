module.exports = function toReadable(number) {
    let res = '';
    var nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var leng = number.length - 1;
    var str = number.toString().split('').reverse().join('');

    if (number == 0) { return 'zero'; }
    if (number < 10) { return nums[number]; }

    if (str[2] != undefined && (+str[1] == 0) && (+str[0] == 0)) {
        res = (nums[str[2]] + ' hundred');
        return res;
    } else
    if (+str[1] > 1) {
        res = nums[str[0]];
        if (+str[0] == 0) {
            res = tens[str[1]] + res;
        } else { res = tens[str[1]] + ' ' + res; }

    } else if (+str[1] == 1) { res = nums[str[1] + str[0]]; } else if (+str[1] == 0) { res = nums[str[0]]; }

    if (str[2]) {
        res = ((nums[str[2]] + ' hundred ') || '') + res;
    } else { return res; }

    return res;
};