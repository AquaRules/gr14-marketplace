import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();

	const DefaultProxy = await ethers.getContract("DefaultProxyAdmin");

	const PrimarySaleV3 = await deploy("PrimarySaleV4", {
		from: deployer,
		log: true,
		contract: "PrimarySale",
		skipIfAlreadyDeployed: true,
	});

	const PrimarySaleProxy = await ethers.getContract("PrimarySale");
	if (
		(await DefaultProxy.getProxyImplementation(
			PrimarySaleProxy.address
		)) !== PrimarySaleProxy.address
	) {
		console.log("Updating");
		await (
			await DefaultProxy.upgrade(
				PrimarySaleProxy.address,
				PrimarySaleV3.address
			)
		).wait();
	}
};

export default func;
func.dependencies = ["PrimarySale"];
func.tags = ["PrimarySaleV2"];
