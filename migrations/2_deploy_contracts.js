var Election_dapp = artifacts.require("./Election_dapp.sol");

module.exports = function(deployer) {
  deployer.deploy(Election_dapp);
};
