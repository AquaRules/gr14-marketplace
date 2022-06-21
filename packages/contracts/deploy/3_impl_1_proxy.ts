import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { Lend } from "../typechain";
import { skipUnlessTest } from "../utils/network";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	const Lend = (await ethers.getContract("LendImpl")) as Lend;
	const DefaultProxyAdmin = await ethers.getContract("DefaultProxyAdmin");
	const TestERC20 = await ethers.getContract("TestERC20");

	await deploy("LendProxy", {
		from: deployer,
		contract: "TransparentUpgradeableProxy",
		log: true,
		skipIfAlreadyDeployed: true,
		args: [
			Lend.address,
			DefaultProxyAdmin.address,
			Lend.interface.encodeFunctionData("initialize", [
				TestERC20.address,
			]),
		],
	});
};

export default func;

func.tags = ["LendProxy"];
func.dependencies = ["LendImpl", "DefaultProxyAdmin"];
func.skip = skipUnlessTest;
