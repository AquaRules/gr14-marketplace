// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "./AccessControlContract.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "./INFT.sol";

contract PrimarySale is AccessControlContract, ReentrancyGuardUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;
	mapping(IERC20Upgradeable => uint256) public currencies;

	event SetCurrency(IERC20Upgradeable currency, uint256 price);

	IERC721 public token;

	function setCurrency(IERC20Upgradeable currency, uint256 price)
		external
		onlyAdmin
	{
		currencies[currency] = price;
		emit SetCurrency(currency, price);
	}

	function initialize(
		IERC721 token_,
		IERC20Upgradeable[] memory _currencies,
		uint256[] memory _prices
	) external initializer {
		token = token_;
		__Ownable_init();

		require(_currencies.length == _prices.length, "Length");
		for (uint256 index = 0; index < _currencies.length; index++) {
			currencies[_currencies[index]] = _prices[index];
		}
	}

	function createSale(IERC20Upgradeable currency, uint256 numberOfTokens)
		external
		nonReentrant
		returns (uint256[] memory tokenIds)
	{
		require(currencies[currency] != 0, "Invalid currency");
		currency.safeTransferFrom(
			_msgSender(),
			address(this),
			currencies[currency]
		);
		tokenIds = new uint256[](numberOfTokens);
		for (uint256 index = 0; index < numberOfTokens; index++) {
			tokenIds[index] = INFT(address(token)).mint(_msgSender());
		}
	}
}
