// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./AccessControl.sol";

/// @title Lend
/// @notice User can come and mortgage his NFT
contract Lend is AccessControl {
	/// @dev if a token is allowed to be staked
	mapping(IERC721 => bool) public allowedToken;

	/// @dev token price
	mapping(IERC721 => uint256) public tokenPrice;

	/// @dev Allows admin to set tokens that can be mortgaged
	/// @param _token nft token address
	/// @param enabled if the token can be mortgaged
	function setAllowedToken(IERC721 _token, bool enabled) external onlyAdmin {
		allowedToken[_token] = enabled;
		emit SetAllowedToken(_token, enabled);
	}

	/// @dev Allows admin to token morgage price
	/// @param _token nft token address
	/// @param price mortgage price
	function setTokenPrice(IERC721 _token, uint256 price) external onlyAdmin {
		tokenPrice[_token] = price;
		emit SetTokenPrice(_token, price);
	}

	event SetAllowedToken(IERC721 indexed _token, bool enabled);
	event SetTokenPrice(IERC721 indexed _token, uint256 price);
}
