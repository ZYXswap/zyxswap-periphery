const Router = artifacts.require("ZyxswapRouter");

module.exports = async function (deployer) {
    const factory = "0x26E13874AD1CD512b29795DAFe3937e1C6f6D507";
    const weth = "0xc9E1AEA009B0bAe9141F3dc7523fb42Fd48C8656";
    await deployer.deploy(Router, factory, weth);
    const deployedRouter = await Router.deployed();
};
