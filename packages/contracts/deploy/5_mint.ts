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
	if (true) {
		console.log("approval");
		await (
			await Token.approve(
				PrimarySale.address,
				ethers.constants.MaxUint256
			)
		).wait();

		console.log("minting");
		await (await PrimarySale.purchase(Token.address, 10)).wait();
	}
};

export default func;

func.tags = ["Mint"];
