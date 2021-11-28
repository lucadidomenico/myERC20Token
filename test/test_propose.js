var erc20 = await MyTokenERC20.deployed()
var governor = await MyGovernor.deployed()

const transferCalldata = web3.eth.abi.encodeFunctionCall({name: "transfer",type: "function",inputs: [{type: "address",name: "recipient"},{type: "uint256",name: "amount"}],outputs:{name: "", type: "bool"}}, [accounts[2], 50]);

var txRes = await governor.propose([erc20.address],[0],[transferCalldata], "My Description")

var proposalId = txRes.logs[0].args['proposalId']

governor.state(proposalId)

governor.castVote(proposalId, 1)

governor.hasVoted(proposalId, accounts[0]) //true