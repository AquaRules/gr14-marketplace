// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "./AccessControlContract.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/structs/EnumerableMapUpgradeable.sol";
import "./INFT.sol";

contract PrimarySale is AccessControlContract, ReentrancyGuardUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;
	using EnumerableSetUpgradeable for EnumerableSetUpgradeable.UintSet;
	mapping(IERC20Upgradeable => uint256) public currencies;

	struct CreatedSale {
		uint256 tokenId;
		address owner;
		uint256 price;
		uint256 untill;
		IERC20Upgradeable currency;
	}

	mapping(address => EnumerableSetUpgradeable.UintSet) _createdSales;

	mapping(uint256 => CreatedSale) public saleMapping;

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

	function purchase(IERC20Upgradeable currency, uint256 numberOfTokens)
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

	function createSale(CreatedSale memory _createdSale) external {
		require(_createdSale.untill > block.timestamp, "Invalid time");
		require(currencies[_createdSale.currency] != 0, "Invalid currency");
		require(
			token.ownerOf(_createdSale.tokenId) == _msgSender(),
			"Not owner"
		);
		require(
			token.isApprovedForAll(_msgSender(), address(this)),
			"Sale created"
		);
		_createdSales[_msgSender()].add(_createdSale.tokenId);
		saleMapping[_createdSale.tokenId] = _createdSale;

		emit CreatePrimarySale(_createdSale);
	}

	event CreatePrimarySale(CreatedSale c);

	function makeSale(uint256 tokenId) external {
		CreatedSale memory _sale = saleMapping[tokenId];
		require(block.timestamp < _sale.untill, "Sale finished.");

		token.transferFrom(_sale.owner, address(this), _sale.tokenId);

		IERC20Upgradeable(_sale.currency).transferFrom(
			_msgSender(),
			_sale.owner,
			_sale.price
		);

		token.transferFrom(address(this), _sale.owner, _sale.tokenId);
		delete saleMapping[tokenId];
		_createdSales[_sale.owner].remove(_sale.tokenId);
	}

	function getCreatedSales(address user)
		external
		view
		returns (uint256[] memory)
	{
		return _createdSales[user].values();
	}
}
