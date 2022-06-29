// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.6;

import "./AccessControlContract.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "./INFT.sol";

contract NFT is ERC721URIStorageUpgradeable, AccessControlContract, INFT {
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
		public
		override
		onlyAdmin
		returns (uint256 tokenId)
	{
		tokenId = increment();
		_mint(to, tokenId);
	}

	function mintWith(address to, string memory _tokenURI)
		external
		onlyAdmin
		returns (uint256 tokenId)
	{
		tokenId = mint(to);
		_setTokenURI(tokenId, _tokenURI);
	}

	function setTokenURIs(
		uint256[] memory _tokenIds,
		string[] memory _tokenURIs
	) external {
		require(_tokenIds.length == _tokenURIs.length, "Length mismatch");
		for (uint256 index = 0; index < _tokenURIs.length; index++) {
			_setTokenURI(_tokenIds[index], _tokenURIs[index]);
		}
	}
}
