import { DeployFunction } from "hardhat-deploy/dist/types";

const func: DeployFunction = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;

	const { deployer } = await getNamedAccounts();
	await deploy("DefaultProxyAdmin", {
		from: deployer,
		contract: "ProxyAdmin",
		log: true,
		skipIfAlreadyDeployed: true,
	});
};

export default func;

func.tags = ["DefaultProxyAdmin"];
