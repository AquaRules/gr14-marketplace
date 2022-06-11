// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract AccessControl is OwnableUpgradeable {
	mapping(address => bool) admins;

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
