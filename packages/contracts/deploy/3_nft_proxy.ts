import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { NFT } from "../typechain";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	const DefaultProxyAdmin = await ethers.getContract("DefaultProxyAdmin");
	const NFT = (await ethers.getContract("NFTImpl")) as NFT;

	await deploy("NFTProxy", {
		from: deployer,
		contract: "TransparentUpgradeableProxy",
		log: true,
		args: [
			NFT.address,
			DefaultProxyAdmin.address,
			NFT.interface.encodeFunctionData("initialize", ["Name", "Symbol"]),
		],
	});
};

export default func;
func.dependencies = [];
func.tags = ["NFTImpl"];
