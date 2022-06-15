// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./AccessControlContract.sol";

/// @title Lend
/// @notice User can come and mortgage his NFT
contract Lend is AccessControlContract, ReentrancyGuardUpgradeable {
	uint256 rateOfInterest = 10;
	struct TokenData {
		uint256 price;
		uint256 duration;
		uint256 roi;
	}

	struct MortgageData {
		uint256 dateOfMortgage;
		uint256 priceAtMortgage;
	}

	/// @dev token price
	mapping(IERC721 => TokenData) public tokenData;

	/// @dev if a token is allowed to be staked
	mapping(IERC721 => bool) public allowedToken;

	IERC20 public currency;

	/// @dev user to token to tokenId to mortgage data;
	mapping(address => mapping(IERC721 => mapping(uint256 => MortgageData))) _mortgageData;

	uint256 public decimals;

	function initialize(IERC20 _currency) external initializer {
		decimals = 18;
		currency = _currency;
	}

	/// @dev Allows admin to set tokens that can be mortgaged
	/// @param _token nft token address
	/// @param enabled if the token can be mortgaged
	function setAllowedToken(IERC721 _token, bool enabled) external onlyAdmin {
		allowedToken[_token] = enabled;
		emit SetAllowedToken(_token, enabled);
	}

	/// @dev Allows admin to token token data
	/// @param _token nft token address
	/// @param _tokenData mortgage price
	function setTokenData(IERC721 _token, TokenData memory _tokenData)
		external
		onlyAdmin
	{
		tokenData[_token] = _tokenData;
		emit SetTokenData(_token, _tokenData);
	}

	/// @dev allows user to mortgage
	/// @param _token nft token address
	/// @param tokenId nft tokenId to mortgage
	function mortgage(IERC721 _token, uint256 tokenId) external nonReentrant {
		require(allowedToken[_token], "Token not allowed");
		_token.transferFrom(_msgSender(), address(this), tokenId);
		uint256 principal = tokenData[_token].price;
		_mortgageData[_msgSender()][_token][tokenId] = MortgageData({
			dateOfMortgage: block.timestamp,
			priceAtMortgage: principal
		});

		currency.transferFrom(address(this), _msgSender(), principal);
		emit Mortgage(_token, tokenId, principal, _msgSender());
	}

	function payback(IERC721 _token, uint256 tokenId) external nonReentrant {
		require(allowedToken[_token], "Token not allowed");

		MortgageData memory mortgageData = _mortgageData[_msgSender()][_token][
			tokenId
		];

		uint256 amount = mortgageData.priceAtMortgage +
			((mortgageData.priceAtMortgage *
				(block.timestamp - mortgageData.dateOfMortgage) *
				10 *
				100) / 10000);

		currency.transferFrom(
			_msgSender(),
			address(this),
			tokenData[_token].price + amount
		);

		_token.transferFrom(address(this), _msgSender(), tokenId);
		emit Payback(_token, tokenId, amount, _msgSender());
	}

	event SetAllowedToken(IERC721 indexed _token, bool enabled);
	event SetTokenData(IERC721 indexed _token, TokenData price);
	event Mortgage(
		IERC721 _token,
		uint256 tokenId,
		uint256 principal,
		address indexed user
	);
	event Payback(
		IERC721 _token,
		uint256 tokenId,
		uint256 amount,
		address indexed user
	);
}
