import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ERC20PresetMinterPauser } from "../typechain/ERC20PresetMinterPauser";
import { skipUnlessTest } from "../utils/network";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	await deploy("TestERC20", {
		from: deployer,
		contract: "ERC20PresetMinterPauser",
		log: true,
		args: ["TestERC20", "TestERC20"],
		skipIfAlreadyDeployed: true,
	});

	await (
		await (
			(await ethers.getContract("TestERC20")) as ERC20PresetMinterPauser
		).mint(deployer, ethers.utils.parseEther("1000000"))
	).wait();
};

export default func;

func.tags = ["TestERC20"];
