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
		const { deployer, TestERC20, PrimarySale } = await setupFixture();
		await deployer.TestERC20.approve(
			deployer.PrimarySale.address,
			ethers.constants.MaxUint256
		);
		await deployer.PrimarySale.purchase(TestERC20.address, 2);

		await deployer.NFT.setApprovalForAll(PrimarySale.address, true);

		await PrimarySale.createSale({
			tokenId: "1",
			owner: deployer.address,
			price: "1",
			untill: Math.floor(Date.now() / 1000) + 30 * 3600,
			currency: TestERC20.address,
		});
	});
});
