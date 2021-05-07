import React from "react";
import Web3 from "web3";
import InstallMetamask from "./InstallMetamask";
import UnlockMetamask from "./UnlockMetamask";
import ReturnTokenURI from "./ReturnTokenURI";
import './NFT.css';

async function approve() {
  const SporeAddress = "0x75e6fb313df2c9429457722e4adf89e2a9b39cff";
  const SporeABI = [
    { type: "constructor", stateMutability: "nonpayable", inputs: [] },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          type: "address",
          name: "owner",
          internalType: "address",
          indexed: true
        },
        {
          type: "address",
          name: "spender",
          internalType: "address",
          indexed: true
        },
        {
          type: "uint256",
          name: "value",
          internalType: "uint256",
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          type: "address",
          name: "previousOwner",
          internalType: "address",
          indexed: true
        },
        {
          type: "address",
          name: "newOwner",
          internalType: "address",
          indexed: true
        }
      ],
      anonymous: false
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          type: "address",
          name: "from",
          internalType: "address",
          indexed: true
        },
        { type: "address", name: "to", internalType: "address", indexed: true },
        {
          type: "uint256",
          name: "value",
          internalType: "uint256",
          indexed: false
        }
      ],
      anonymous: false
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "allowTradeAt",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "allowance",
      inputs: [
        { type: "address", name: "owner", internalType: "address" },
        { type: "address", name: "spender", internalType: "address" }
      ]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "approve",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" }
      ]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "balanceOf",
      inputs: [{ type: "address", name: "account", internalType: "address" }]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
      name: "decimals",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "decreaseAllowance",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "subtractedValue", internalType: "uint256" }
      ]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "enableFairLaunch",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "excludeAccount",
      inputs: [{ type: "address", name: "account", internalType: "address" }]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "includeAccount",
      inputs: [{ type: "address", name: "account", internalType: "address" }]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "increaseAllowance",
      inputs: [
        { type: "address", name: "spender", internalType: "address" },
        { type: "uint256", name: "addedValue", internalType: "uint256" }
      ]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "isExcluded",
      inputs: [{ type: "address", name: "account", internalType: "address" }]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "string", name: "", internalType: "string" }],
      name: "name",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "address", name: "", internalType: "address" }],
      name: "owner",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "reflect",
      inputs: [{ type: "uint256", name: "tAmount", internalType: "uint256" }]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "reflectionFromToken",
      inputs: [
        { type: "uint256", name: "tAmount", internalType: "uint256" },
        { type: "bool", name: "deductTransferFee", internalType: "bool" }
      ]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "renounceOwnership",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "string", name: "", internalType: "string" }],
      name: "symbol",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "tokenFromReflection",
      inputs: [{ type: "uint256", name: "rAmount", internalType: "uint256" }]
    },
    {
      type: "function",
      stateMutability: "view",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "totalFees",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "pure",
      outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
      name: "totalSupply",
      inputs: []
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "transfer",
      inputs: [
        { type: "address", name: "recipient", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" }
      ]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [{ type: "bool", name: "", internalType: "bool" }],
      name: "transferFrom",
      inputs: [
        { type: "address", name: "sender", internalType: "address" },
        { type: "address", name: "recipient", internalType: "address" },
        { type: "uint256", name: "amount", internalType: "uint256" }
      ]
    },
    {
      type: "function",
      stateMutability: "nonpayable",
      outputs: [],
      name: "transferOwnership",
      inputs: [{ type: "address", name: "newOwner", internalType: "address" }]
    }
  ];
  const SporeNFTMarketaddress = "0x9BAa8ADD7E43e1ff0Ed60E37782d03C50151c817";
  const SporeContract = new window.web3.eth.Contract(SporeABI, SporeAddress);
  var account = await window.web3.eth.getAccounts();
  account = account[0];
  var amount = document.getElementById("_approveFee").value;
  try {
    await SporeContract.methods
      .approve(SporeNFTMarketaddress, amount)
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

async function claim() {
  var ABI = [
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "contrak",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "ApprovalForAll",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Bought",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        }
      ],
      name: "buy",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "cancelTokenSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "pid",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256"
        }
      ],
      name: "ForSale",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "setPrice",
          type: "uint256"
        }
      ],
      name: "setTokenPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "startFairDistribution",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "pid",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Withdraw",
      type: "event"
    },
    {
      inputs: [],
      name: "allowTradeAt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "baseURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "Bazaar",
      outputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256"
        },
        {
          internalType: "enum ERC721.TokenState",
          name: "state",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "burnFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "calculateFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "contractaddress",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "hasTimelockStarted",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "operator",
          type: "address"
        }
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4"
        }
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address"
        }
      ],
      name: "tokensOfOwner",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalCharacters",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];
  const SporeMarketv1 = new window.web3.eth.Contract(
    ABI,
    "0x9BAa8ADD7E43e1ff0Ed60E37782d03C50151c817"
  );
  var account = await window.web3.eth.getAccounts();
  account = account[0];
  try {
    await SporeMarketv1.methods
      .claim()
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

async function NFTbuy() {
  var ABI = [
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "contrak",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "ApprovalForAll",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Bought",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256"
        }
      ],
      name: "buy",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "cancelTokenSale",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "pid",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256"
        }
      ],
      name: "ForSale",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "setPrice",
          type: "uint256"
        }
      ],
      name: "setTokenPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "startFairDistribution",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "user",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "pid",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "Withdraw",
      type: "event"
    },
    {
      inputs: [],
      name: "allowTradeAt",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "baseURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "Bazaar",
      outputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256"
        },
        {
          internalType: "enum ERC721.TokenState",
          name: "state",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "burnFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "calculateFee",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "contractaddress",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "hasTimelockStarted",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "operator",
          type: "address"
        }
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4"
        }
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address"
        }
      ],
      name: "tokensOfOwner",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        }
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalCharacters",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];
  const SporeMarketv1 = new window.web3.eth.Contract(
    ABI,
    "0x9BAa8ADD7E43e1ff0Ed60E37782d03C50151c817"
  );
  var _tokenID = document.getElementById("_tokenID").value;
  var account = await window.web3.eth.getAccounts();
  account = account[0];
  console.log(account);
  const bazaar = await SporeMarketv1.methods.Bazaar(_tokenID).call();
  console.log(bazaar);
  try {
    await SporeMarketv1.methods
      .buy(_tokenID)
      .send({ from: account, gasPrice: 225000000000, value: bazaar.price });
  } catch (error) {
    alert(error);
  }
}

export default class NFT extends React.Component {
  constructor() {
    super();
    this.state = { bazaar: [], tokenCounter: [] };
    this.isWeb3 = true; //If metamask is installed
    this.isnetworkID = false;
    this.marketPlace = {};
  }
  async componentDidMount() {
    let web3 = window.web3;
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      console.log(window.ethereum);
    }
    if (typeof web3 !== "undefined") {
      // Use Mist/MetaMask's provider
      this.web3Provider = web3.currentProvider;
      this.web3 = new Web3(web3.currentProvider);
    } else {
      this.isWeb3 = false;
    }
    if (this.web3Provider.chainId == "0xa869") {
      this.isnetworkID = true;
    } else {
      this.isnetworkID = false;
    };
    console.log(this.web3Provider.chainId);
    var ABI = [
      {
        inputs: [
          {
            internalType: "contract IERC20",
            name: "contrak",
            type: "address"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address"
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool"
          }
        ],
        name: "ApprovalForAll",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Bought",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256"
          }
        ],
        name: "buy",
        outputs: [],
        stateMutability: "payable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          }
        ],
        name: "cancelTokenSale",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "pid",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "Deposit",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "price",
            type: "uint256"
          }
        ],
        name: "ForSale",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes"
          }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "operator",
            type: "address"
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool"
          }
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "setPrice",
            type: "uint256"
          }
        ],
        name: "setTokenPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "startFairDistribution",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "user",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "pid",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "Withdraw",
        type: "event"
      },
      {
        inputs: [],
        name: "allowTradeAt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "baseURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        name: "Bazaar",
        outputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256"
          },
          {
            internalType: "enum ERC721.TokenState",
            name: "state",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "burnFee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "calculateFee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "contractaddress",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "hasTimelockStarted",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "address",
            name: "operator",
            type: "address"
          }
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4"
          }
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256"
          }
        ],
        name: "tokenByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256"
          }
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address"
          }
        ],
        name: "tokensOfOwner",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
          }
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalCharacters",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ];
    const SporeMarketv1 = new window.web3.eth.Contract(
      ABI,
      "0x9BAa8ADD7E43e1ff0Ed60E37782d03C50151c817"
    );

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    //We take the first address in the array of addresses and display it
    const account = accounts[0];
    console.log(accounts);

    const balance = await SporeMarketv1.methods.balanceOf(account).call();
    const tokensOfOwner = await SporeMarketv1.methods
      .tokensOfOwner(account)
      .call();
    const totalSupply = await SporeMarketv1.methods.totalSupply().call();
    console.log(tokensOfOwner);
    const tokenCounter = await SporeMarketv1.methods.tokenCounter;
    console.log("tokencounter is");
    console.log(tokenCounter);

    const totalCharacters = 7;
    const promises = [];
    for (let i = 0; i <= totalCharacters - 1; i++) {
      const characterForSale = SporeMarketv1.methods.Bazaar(i).call();
      promises.push(characterForSale);
    }

    Promise.all(promises).then((values) => {
      console.log(values);
      this.setState({
        bazaar: values,
        balance: balance,
        tokensOfOwner: tokensOfOwner,
        totalCharacters: totalCharacters,
        tokenCounter: tokenCounter,
        totalSupplyLeft: totalCharacters - totalSupply
      });
    });
  }

  render() {
    const marketPlaceBuilder = [];
    for (let i = 0; i <= this.state.totalCharacters - 1; i++) {
      if (this.state.bazaar[i].price > 0) {
        console.log("ok");
        console.log(this.state.bazaar[i]);
        marketPlaceBuilder.push([i, this.state.bazaar[i].price / 10 ** 9]);
      }
    }
    if (marketPlaceBuilder.length > 0) {
      var MarketplaceForSale = marketPlaceBuilder.map((item) => (
        <>
          <li>ID: {item[0]}</li>
          <li>Price: {item[1]} Avax</li>
        </>
      ));
    } else {
      var MarketplaceForSale = <> No NFTs for Sale</>;
    }
    console.log(marketPlaceBuilder);

    if (this.state.balance > 0) {
      var image = <ReturnTokenURI tokensOfOwner={this.state.tokensOfOwner} />;
    } else {
      var image = <> You dont own any NFTs yet! </>;
    }

    if (this.isWeb3) {
      if (false ) {
        return (
          <div>
            <UnlockMetamask message="Wrong Network, please switch" />
          </div>
        );
      } else {
        return (
          <>
          <div className='container information py-2'>
            <div className='row pb-5 py-2'>
              <div className='col-lg-12'>
                <h2 className='feature pb-2 text-center'>
                  <span>NFT version 1</span> : Vision, Pricing & Fair Launch
                </h2>
                <h3 class="text-center pb-2">Welcome to out first generation of NFTs</h3>
                <div class="row">
                  <div class="col-lg-4 col-sm-12">
                    <div class="box-rounded">
                    <h4>Objective</h4>
                    <p>The stepping stone in our road to decentralized governance.                      
                      Burn an additional 1.328% of the totalsupply.
                      Equivalent of 1328t (1.328e15) SPORE.
                      </p>
                      <ul>
                        <li>First 4 NFTs: 1t each </li>
                        <li>Next 8 NFTs: 3.5t each </li>
                        <li>Next 12 NFTs: 7t each </li>
                        <li>Next 24 NFTs: 14t each </li>
                        <li>Next 12 NFTs: 21t each </li>
                        <li>Next 8 NFTs: 28t each </li>
                        <li>Last 4 NFTs: 100t each </li>
                      </ul>
                      <p class='pt-4'>
                        This first generation of NFTs have a special meaning :
                        they will be used for setting up a system of
                        off-chain/on-chain governance over the next deployments
                        using hashed signatures.</p>
                        
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="box-rounded">
                    <h4>Fair Launch</h4>
                    <p>After the public announcement, a timelock will be
                        activated allowing 24 hours to start buying the NFTs. All
                        SPORE used to mint the NFTs will go to the BURN address.</p>

                      <p>
                        <b class="important">There is no "DEV" fund.</b> The NFTs can be traded at
                        our marketplace using AVAX for settlement.</p>
                        <p>A small SPORE
                        tax will be burnt every time anyone buys an NFT from the
                        Marketplace (0.25t SPORE).</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="box-rounded">
                      <h4>Art Curation</h4>
                      <p>100% of the pieces have been made by community contribution.</p>
                      <p>Here an non exhaustive list about our artists (many thanks to them):</p>
                      <ul>
                        <li>Artist A : <i class="fab fa-twitter"></i> @artistA</li>
                        <li>Artist B : <i class="fab fa-twitter"></i> @artistB</li>
                        <li>Artist C : <i class="fab fa-twitter"></i> @artistC</li>
                        <li>Artist D : <i class="fab fa-twitter"></i> @artistD</li>
                        <li>Artist E : <i class="fab fa-twitter"></i> @artistE</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <section className="bg-white" id="claim">
            <div class="container py-5">
              <div class="row py-5">
                <div class="col-md-12">
                  <div>
                    <h2 class="text-center">Claim your NFT and spread the Spore !</h2>
                    <p class="mb-1">
                      <i>NFTs left to claim: {this.state.totalSupplyLeft}</i>
                    </p>
                    <div class="input-group mb-0">
                      <input
                        type="number"
                        id="_approveFee"
                        value="1000000000000000000000"
                        placeholder="1000000000000000000000"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button onClick={approve} class="btn btn-primary">Approve</button>
                      </div>
                    </div>
                    <p class="text-muted">
                      <b>*Note: </b>Values in wei. Default 100t SPORE.
                    </p>
                    <p class="text-center">
                      <button onClick={claim} class="btn btn-secondary btn-lg px-5 py-2 text-uppercase">Claim your NFT</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='bg-white-darker'>
            <div class="container information py-5">
              <div className='row py-5'>
                <div className='col-md-12 text-center'>
                  <h2 class="text-secondary-color">Marketplace</h2>
                </div>
                <div className='col-md-12'>
                  <ul>
                  {MarketplaceForSale}
                  </ul>
                  <br />
                    {" "}
                    <div class="input-group">
                      <input
                        type="text"
                        id="_approveFee"
                        value="100000000000"
                        class="form-control"
                      />
                       <div class="input-group-append">
                        <button onClick={approve} class="btn btn-primary">Approve Fee</button>
                      </div>
                    </div>
                    <p class="text-muted">
                    <b>*Note: </b>Values in wei. Only necessary if you havent approved before.</p>
                    <div class="input-group">
                      <input
                        type="text"
                        id="_tokenID"
                        placeholder="NFT_ID (ex: 0)"
                        class="form-control"
                      />
                      <div class="input-group-append">
                        <button onClick={NFTbuy} class="btn btn-primary">Buy NFT</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-white">
            <div class="container informations py-5">
              <div class="row py-5">
                <div class="col-md-12 text-center">
                  <h2>Your NFTs <small class="text-muted font-italic">({this.state.balance})</small></h2>
                </div>
                <div class="row">
                    {image}
                </div>
              </div>
            </div>
          </section>

          </>
        );
      }
    } else {
      return <InstallMetamask />;
    }
  }
}
