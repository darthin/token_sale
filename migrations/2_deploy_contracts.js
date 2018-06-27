var DarthinDappToken = artifacts.require("./DarthinDappToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DarthinDappToken, 1000000);
};
