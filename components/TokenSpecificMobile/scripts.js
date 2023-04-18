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

const numberAbbreviations = (num) => {
	if (isNaN(num)) {
		return num;
	}
	const abbreviations = {
		K: 1000,
		M: 1000000,
		B: 1000000000,
		T: 1000000000000,
	};
	const absNum = Math.abs(num);
	for (const abbreviation in abbreviations) {
		if (absNum / 1000 <= abbreviations[abbreviation]) {
			const abbreviatedNum = Math.round((num / abbreviations[abbreviation]) * 100) / 100;
			return abbreviatedNum.toString() + abbreviation;
		}
	}
	return num.toString();
}

module.exports = {
    prettifyNumber,
	numberAbbreviations
}