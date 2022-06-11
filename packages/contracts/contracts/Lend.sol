// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @title Lend
/// @notice User can come and mortgage his NFT
contract Lend {
	mapping(IERC721 => bool) public allowedToken;
	mapping(IERC721 => uint256) public tokenPrice;
}
