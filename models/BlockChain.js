const sha256 = require('js-sha256').sha256;

class BlockChain {
	constructor() {
		this.chain = [];
		this.create_block(1, '0');
	}

	create_block(proof, prev_hash) {
		let block = {
			index: this.chain.length + 1,
			timestamp: new Date().toISOString(),
			proof: proof,
			prev_hash: prev_hash
		};
		this.chain.push(JSON.stringify(block));
		return JSON.stringify(block);
	}

	get last_block() {
		return this.chain.slice(-1)[0];
	}

	findNonce(prev_nonce) {
		let nonce = 0;
		let isValidNonce = false;
		while (!isValidNonce) {
			let hash = sha256((Math.pow(nonce, 2) - Math.pow(prev_nonce, 2)).toString());
			if (hash.slice(0, 4) === '0000')
				isValidNonce = true; // mining successes if leading 4 digits are 0
			else nonce++;
		}
		return nonce;
	}
}

let BC = new BlockChain();
console.log(BC.findNonce(3));
