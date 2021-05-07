import React from "react";
import Web3 from "web3";

async function putNFTForSale() {
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
  var _tokenIDforSale = document.getElementById("_tokenIDforSale").value;
  var _price = document.getElementById("_price").value;

  var account = await window.web3.eth.getAccounts();
  account = account[0];
  console.log(account);

  try {
    await SporeMarketv1.methods
      .setTokenPrice(_tokenIDforSale, _price)
      .send({ from: account, gasPrice: 225000000000 });
  } catch (error) {
    alert(error);
  }
}

export default class ReturnTokenURI extends React.Component {
  constructor() {
    super();
    this.state = { data: [], tokensOfOwner: [] };
  }

  async componentDidMount() {
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
    const tokensOfOwner = this.props.tokensOfOwner;
    console.log("returntokenURI component");
    console.log(tokensOfOwner);
    const promises = [];

    for (let i = 0; i < tokensOfOwner.length; i++) {
      const promisestokenURIs = await SporeMarketv1.methods
        .tokenURI(tokensOfOwner[i])
        .call();
      promises.push(promisestokenURIs);
    }
    console.log("hi0");

    Promise.all(promises).then((values) => {
      console.log(values);
      this.setState({
        data: values
      });
    });
  }

  render() {
    return (
      <>
        {this.state.data.map((image) => (
          <div class="col-md-3 text-center"><img class="rounded shadow" src={image}  height="200" /></div>
        ))}
        <div class="col-md-12">
          <p class="pt-5">
            You own the IDs:{" "}
            {this.props.tokensOfOwner.map((ID) => (
              <>{ID},</>
            ))}
          </p>
          <div class="input-group">
            <input type="text" id="_tokenIDforSale" class="form-control float-left" placeholder="NFT_ID" />
            <input type="text" id="_price" class="form-control float-left"  placeholder="Price" />
            <div class="input-group-append">
              <button onClick={putNFTForSale} class="btn btn-primary">Put NFT for Sale</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
