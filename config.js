//const IcoContractABI = require('../build/contracts/IcoContract.json').abi;
//const CGNToken = require('../build/contracts/CGNToken.json').abi;
//const IcoPhaseABI = require('../build/contracts/icoPhase.json').abi;
//const IcoBonusAPI = require('../build/contracts/Bonus.json').abi;
module.exports={
	connection:{
		host:"localhost",
		user:"root",
		password:"5Vw6@FKEElv*",
		database:"cgncoin"
	},
	web3Provider:{
		local:"http://localhost:8545",
		testNet:"https://ropsten.infura.io/1fRpT5XjlePDzwsm3mkR"
	},
	keyRandom:{
		key: "8RVLfPNoTkuoBwShCYeRkmefdjTthCNdXdWOsJq7Y8tfEhsYv41wDmpIx3BdBZFxMiQMxH3Pmojrj6BbJ64pcyYTEv8EB0rNJdu"
	}
	/*,
	smartcontract:{
		tokenContract: {
			address: "0x87618aec639812f0cc9aa3db24f4419a18f1b087",
			abi: CGNToken,
			owner: {
				address: "0xfac7CBC40bB3A101983c506Ca8e0D706fcD649fC",
				privateKey: "33b67cfa834e4181747123abd651a6ace613d44d3320c6ea020deb562d1df7d1"
			}
		},
		icoContract: {
			address: "0x57eb96b4458920a019d473b345f53f8c70144576",
			abi: IcoContractABI,
			owner: {
				address: "0xfac7CBC40bB3A101983c506Ca8e0D706fcD649fC",
				privateKey: "33b67cfa834e4181747123abd651a6ace613d44d3320c6ea020deb562d1df7d1"
			}
		},
		icoPhase: {
			address: "0xd5b6ab2b668212377b48952c4b940ecc3402dc25",
			abi: IcoPhaseABI,
			owner: {
				address: "0xfac7CBC40bB3A101983c506Ca8e0D706fcD649fC",
				privateKey: "33b67cfa834e4181747123abd651a6ace613d44d3320c6ea020deb562d1df7d1"
			}
		},
		icoBonus:{
			address:"0x2d29b1bd5903ec3559abb75234adae67e088032b",
			abi: IcoBonusAPI,
			owner: {
				address: "0xfac7CBC40bB3A101983c506Ca8e0D706fcD649fC",
				privateKey: "33b67cfa834e4181747123abd651a6ace613d44d3320c6ea020deb562d1df7d1"
			}
		}
	}*/
}
