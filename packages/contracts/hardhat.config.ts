import * as dotenv from "dotenv";

import "hardhat-deploy";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import { readFileSync } from "fs";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

const accounts = () => {
	const priv = readFileSync(process.env.PRIVATE_KEY as string, "utf8")
		.toString()
		.trim();

	return [priv];
};
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
	solidity: {
		compilers: [
			{
				version: "0.8.6",
			},
		],
	},
	networks: {
		rinkeby: {
			url: process.env.RINKEBY_URL || "",
			chainId: 4,
			gasPrice: 3_500_000_000,
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
		},
		kovan: {
			url: process.env.KOVAN_URL || "",
			chainId: 42,
			gasPrice: 2_800_000_000,
			accounts: process.env.PRIVATE_KEY !== undefined ? accounts() : [],
		},
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS !== undefined,
		currency: "USD",
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
		upgradeAdmin: {
			default: 1,
		},
	},
	mocha: {
		require: ["ts-node/register", "hardhat/register"],
	},
};

export default config;
