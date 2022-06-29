import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ERC20PresetMinterPauser } from "../typechain/ERC20PresetMinterPauser";
import { skipUnlessTest } from "../utils/network";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	await deploy("LendImpl", {
		from: deployer,
		contract: "Lend",
		log: true,
		skipIfAlreadyDeployed: true,
	});
};

export default func;

func.tags = ["LendImpl"];

func.skip = skipUnlessTest;
