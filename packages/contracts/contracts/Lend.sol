// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

import "./AccessControl.sol";

/// @title Lend
/// @notice User can come and mortgage his NFT
contract Lend is AccessControl, ReentrancyGuardUpgradeable {
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

		_mortgageData[_msgSender()][_token][tokenId] = MortgageData({
			dateOfMortgage: block.timestamp,
			priceAtMortgage: tokenData[_token].price
		});

		currency.transferFrom(
			address(this),
			_msgSender(),
			tokenData[_token].price
		);
	}

	// function getInterest(
	// 	uint256 p,
	// 	uint256 r,
	// 	uint256 t
	// ) public view returns (uint256) {
	// 	return (decimals * ((p * r * t))) / 100;
	// }

	event SetAllowedToken(IERC721 indexed _token, bool enabled);
	event SetTokenData(IERC721 indexed _token, TokenData price);
}
