const prettifyNumber = (number, decimals, suffix = '', prefix = '') => {
	try{
		suffix === 'null'? suffix = '' : suffix = suffix;
		prefix === 'null'? prefix = '' : prefix = prefix;

		const fixedNumber = number.toFixed(decimals);

		const parts = fixedNumber.toString().split(".");
		const numberPart = parts[0];
		const decimalPart = parts[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return prefix + numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "") + suffix;
	}
	catch(e){
        if(!number){
            return prefix + "0" + suffix;
        };
		return prefix + number + suffix;
	};
};

module.exports = {
    prettifyNumber
}