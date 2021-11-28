const MyTokenERC20 = artifacts.require("MyTokenERC20");
// const Sender = artifacts.require("Sender");
// const MyTimelockController = artifacts.require("MyTimelockController");
// const MyGovernor = artifacts.require("MyGovernor");

const BigNumber = require('bignumber.js');

module.exports = async function(deployer, network, accounts) {
        var initialSupply = new BigNumber(Math.pow(10,25)); // 10.000.000 token with 18 decimals
        await deployer.deploy(MyTokenERC20, initialSupply);
        // await deployer.deploy(Sender, MyTokenERC20.address, accounts[0]);
        // var timelock = 10;
        // var proposers = [accounts[0]];
        // var executors = [accounts[1]];
        // await deployer.deploy(MyTimelockController, timelock, proposers, executors);
        // await deployer.deploy(MyGovernor, MyTokenERC20.address, MyTimelockController.address);
};