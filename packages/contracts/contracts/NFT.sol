// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "./AccessControlContract.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "./INFT.sol";

contract NFT is ERC721Upgradeable, AccessControlContract, INFT {
	uint256 _counter = 0;

	function initialize(string memory __name, string memory __symbol)
		external
		initializer
	{
		__ERC721_init(__name, __symbol);
		__Ownable_init();
	}

	function increment() internal returns (uint256 tokenId) {
		_counter += 1;
		tokenId = _counter;
	}

	function mint(address to)
		external
		override
		onlyAdmin
		returns (uint256 tokenId)
	{
		tokenId = increment();
		_mint(to, tokenId);
	}
}
