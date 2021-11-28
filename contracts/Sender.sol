pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Sender {
    ERC20 token;
    address owner;

    constructor(address _token, address _owner) {
        token = ERC20(_token);
        owner = _owner;
    }

    function transfer(address to, uint256 amount) public {
        require(token.balanceOf(owner) >= amount, "Denied. Amount is to high.");
        token.transferFrom(owner, to, amount);
    }

    // REJECT any incoming ether
	fallback() external payable { revert(); }
}