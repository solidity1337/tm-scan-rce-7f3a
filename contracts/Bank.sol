// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;
contract Bank {
    mapping(address=>uint256) public balances;
    function deposit() external payable { balances[msg.sender]+=msg.value; }
    function withdraw() external {
        uint256 a=balances[msg.sender];
        (bool ok,)=msg.sender.call{value:a}("");
        require(ok);
        balances[msg.sender]=0;
    }
}
