// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/TimelockController.sol";

contract MyTimelockController is TimelockController{
    constructor(uint timelock, address[] memory proposers, address[] memory executors) TimelockController(timelock, proposers, executors){}
}