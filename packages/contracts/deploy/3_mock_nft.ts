import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	await deploy("NFTImpl", {
		from: deployer,
		contract: "NFT",
		log: true,
	});
};

export default func;
func.dependencies = [];
func.tags = ["NFTImpl"];
