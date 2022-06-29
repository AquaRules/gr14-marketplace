// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract AccessControlContract is OwnableUpgradeable {
	mapping(address => bool) public admins;

	event SetAdmin(address admin, bool enabled);

	function setAdmin(address admin, bool enabled) external onlyOwner {
		admins[admin] = enabled;
		emit SetAdmin(admin, enabled);
	}

	modifier onlyAdmin() {
		require(admins[_msgSender()], "Not admin");
		_;
	}
}
