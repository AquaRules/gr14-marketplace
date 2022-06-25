import { ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ERC20, NFT, PrimarySale } from "../typechain";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;

	const Token = (await ethers.getContract("TestERC20")) as ERC20;
	const NFT = (await ethers.getContract("NFTProxy")) as NFT;
	const PrimarySale = (await ethers.getContract(
		"PrimarySale"
	)) as PrimarySale;
	let tx: ContractTransaction;
	if (true) {
		console.log("approval");
		tx = await Token.approve(
			PrimarySale.address,
			ethers.constants.MaxUint256
		);
		console.log(tx.hash);
		await tx.wait();

		console.log("minting");
		tx = await PrimarySale.purchase(Token.address, 10);
		console.log(tx.hash);
		await tx.wait();
	}
	if (true) {
		const uri =
			"https://raw.githubusercontent.com/SurroundingArt64/cdn/master/0000000000000000000000000000000000000000000000000000000000000001.json";
		console.log("setting");
		tx = await NFT.setTokenURIs(
			[...Array(10).keys()].map((elem) => elem + 11),
			new Array(10).fill(uri)
		);
		console.log(tx.hash);
		await tx.wait();
	}
};

export default func;

func.tags = ["Mint"];
