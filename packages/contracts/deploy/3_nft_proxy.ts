import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy("NFTProxy", {
		from: deployer,
		contract: "NFT",
		log: true,
		proxy: {
			proxyContract: "OptimizedTransparentProxy",
			execute: {
				init: {
					methodName: "initialize",
					args: ["Name", "Symbol"],
				},
			},
		},
	});
};

export default func;
func.dependencies = ["NFTImpl", "DefaultProxyAdmin"];
func.tags = ["NFTProxy"];
