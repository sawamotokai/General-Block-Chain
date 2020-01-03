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
		this.chain.push(block);

		return JSON.stringify(block);
	}
}

const blockChain = new BlockChain();
console.log(blockChain.create_block(2, 'fa3113f'));
