import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy, execute } = deployments;

	const { deployer } = await getNamedAccounts();
	const DefaultProxyAdmin = await ethers.getContract("DefaultProxyAdmin");
	const NFT = await ethers.getContract("NFTProxy");
	const Currency = await ethers.getContract("TestERC20");

	const PrimarySale = await deploy("PrimarySale", {
		from: deployer,
		log: true,
		proxy: {
			proxyContract: "OptimizedTransparentProxy",
			execute: {
				init: {
					methodName: "initialize",
					args: [
						NFT.address,
						[Currency.address],
						[ethers.utils.parseEther("10000")],
					],
				},
			},
		},
		skipIfAlreadyDeployed: true,
	});

	await execute(
		"NFTProxy",
		{ from: deployer, log: true },
		"setAdmin",
		PrimarySale.address,
		true
	);
};

export default func;
func.dependencies = ["NFTProxy", "TestERC20"];
func.tags = ["PrimarySale"];
