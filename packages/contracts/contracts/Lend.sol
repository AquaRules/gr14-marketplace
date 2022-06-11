// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./AccessControl.sol";

/// @title Lend
/// @notice User can come and mortgage his NFT
contract Lend is AccessControl {
	struct TokenData {
		uint256 price;
		uint256 duration;
		uint256 roi;
	}

	/// @dev token price
	mapping(IERC721 => TokenData) public tokenPrice;

	/// @dev if a token is allowed to be staked
	mapping(IERC721 => bool) public allowedToken;

	struct MortgageData {
		uint256 dateOfMortgage;
	}

	/// @dev user to token to tokenId to mortgage data;
	mapping(address => mapping(IERC721 => mapping(uint256 => MortgageData))) _mortgageData;

	uint256 public decimals;

	function initialize() external initializer {
		decimals = 18;
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
	/// @param tokenData mortgage price
	function setTokenPrice(IERC721 _token, TokenData memory tokenData)
		external
		onlyAdmin
	{
		tokenPrice[_token] = tokenData;
		emit SetTokenPrice(_token, tokenData);
	}

	function getInterest(
		uint256 p,
		uint256 r,
		uint256 t
	) public view returns (uint256) {
		return (decimals * (p * r * t)) / 100;
	}

	event SetAllowedToken(IERC721 indexed _token, bool enabled);
	event SetTokenPrice(IERC721 indexed _token, TokenData price);
}
