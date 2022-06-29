import {
	deployments,
	ethers,
	getNamedAccounts,
	getUnnamedAccounts,
} from "hardhat";
import { IERC20, Lend, NFT, PrimarySale } from "../typechain/";
import { setupUser, setupUsers } from "./utils";

const setupFixture = deployments.createFixture(async () => {
	await deployments.fixture([
		"NFTProxy",
		"LendProxy",
		"PrimarySale",
		"TestERC20",
	]);
	const { deployer: deployerAddress } = await getNamedAccounts();

	const userAddresses = await getUnnamedAccounts();

	const contracts = {
		NFT: (await ethers.getContract("NFTProxy")) as NFT,
		Lend: (await ethers.getContract("LendProxy")) as Lend,
		PrimarySale: (await ethers.getContract("PrimarySale")) as PrimarySale,
		TestERC20: (await ethers.getContract("TestERC20")) as IERC20,
	};
	const deployer = await setupUser(deployerAddress, contracts);
	const users = await setupUsers(userAddresses, contracts);

	return {
		deployer,
		users,
		...contracts,
	};
});

describe("run", () => {
	it("mint", async () => {
		const { deployer, TestERC20 } = await setupFixture();
		await deployer.TestERC20.approve(
			deployer.PrimarySale.address,
			ethers.constants.MaxUint256
		);
		await deployer.PrimarySale.purchase(TestERC20.address, 2);
	});
});
