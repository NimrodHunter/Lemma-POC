/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BasisTradingVault,
  BasisTradingVaultInterface,
} from "../BasisTradingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "USDL_",
        type: "address",
      },
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014d2380380620014d2833981016040819052620000349162000247565b604080518082018252600b81526a14dd185ad959081554d11360aa1b6020808301918252835180850190945260058452641e1554d11360da1b908401528151919291620000849160039162000188565b5080516200009a90600490602084019062000188565b50506001600555506001600160a01b038216620000fe5760405162461bcd60e51b815260206004820152601a60248201527f555344206d7573742062652061207265616c206164647265737300000000000060448201526064015b60405180910390fd5b6001600160a01b038116620001565760405162461bcd60e51b815260206004820152601f60248201527f4d616e6167657220616464726573732073686f756c64206e6f742062652030006044820152606401620000f5565b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055620002c3565b828054620001969062000286565b90600052602060002090601f016020900481019282620001ba576000855562000205565b82601f10620001d557805160ff191683800117855562000205565b8280016001018555821562000205579182015b8281111562000205578251825591602001919060010190620001e8565b506200021392915062000217565b5090565b5b8082111562000213576000815560010162000218565b6001600160a01b03811681146200024457600080fd5b50565b600080604083850312156200025b57600080fd5b825162000268816200022e565b60208401519092506200027b816200022e565b809150509250929050565b600181811c908216806200029b57607f821691505b60208210811415620002bd57634e487b7160e01b600052602260045260246000fd5b50919050565b6111ff80620002d36000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806347e7ef241161008c57806395d89b411161006657806395d89b41146101bb578063a457c2d7146101c3578063a9059cbb146101d6578063dd62ed3e146101e957600080fd5b806347e7ef241461016c57806370a082311461017f57806374578719146101a857600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a578063395093511461015957600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec610222565b6040516100f9919061100c565b60405180910390f35b610115610110366004611056565b6102b4565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b610115610145366004611080565b6102ca565b604051601281526020016100f9565b610115610167366004611056565b610390565b61011561017a366004611056565b6103cc565b61012961018d3660046110bc565b6001600160a01b031660009081526020819052604090205490565b6101296101b6366004611056565b61061a565b6100ec610643565b6101156101d1366004611056565b610652565b6101156101e4366004611056565b610703565b6101296101f73660046110d7565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546102319061110a565b80601f016020809104026020016040519081016040528092919081815260200182805461025d9061110a565b80156102aa5780601f1061027f576101008083540402835291602001916102aa565b820191906000526020600020905b81548152906001019060200180831161028d57829003601f168201915b5050505050905090565b60006102c1338484610710565b50600192915050565b60006102d7848484610834565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103765760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103838533858403610710565b60019150505b9392505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102c19185906103c790869061115b565b610710565b6000600260055414156104215760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161036d565b6002600555600654604051630eace85f60e31b81526001600160a01b0385811660048301529091169063756742f89060240160206040518083038186803b15801561046b57600080fd5b505afa15801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a39190611173565b806104bb57506006546001600160a01b038481169116145b6105075760405162461bcd60e51b815260206004820152601160248201527f746f6b656e206e6f7420616c6c6f776564000000000000000000000000000000604482015260640161036d565b610512338484610a33565b61055e5760405162461bcd60e51b815260206004820152601360248201527f7472616e736665722066726f6d206661696c7300000000000000000000000000604482015260640161036d565b6105713361056c858561061a565b610a90565b6007546105899084906001600160a01b031684610b6f565b6105d55760405162461bcd60e51b815260206004820152601060248201527f73656e6420746f6b656e206661696c7300000000000000000000000000000000604482015260640161036d565b60405182906001600160a01b0385169033907f8752a472e571a816aea92eec8dae9baf628e840f4929fbcc2d155e6233ff68a790600090a45060018060055592915050565b600061062530610c78565b8261062f85610c78565b6106399190611195565b61038991906111b4565b6060600480546102319061110a565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156106ec5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161036d565b6106f93385858403610710565b5060019392505050565b60006102c1338484610834565b6001600160a01b0383166107725760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161036d565b6001600160a01b0382166107d35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161036d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166108b05760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161036d565b6001600160a01b0382166109125760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161036d565b6001600160a01b038316600090815260208190526040902054818110156109a15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161036d565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109d890849061115b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a2491815260200190565b60405180910390a35b50505050565b6000808211610a845760405162461bcd60e51b815260206004820152601760248201527f796f75206d7573742073656e6420736f6d657468696e67000000000000000000604482015260640161036d565b6106f983853085610ca4565b6001600160a01b038216610ae65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161036d565b8060026000828254610af8919061115b565b90915550506001600160a01b03821660009081526020819052604081208054839290610b2590849061115b565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60006001600160a01b038416610bc75760405162461bcd60e51b815260206004820152601360248201527f6d7573742062652076616c696420746f6b656e00000000000000000000000000604482015260640161036d565b6001600160a01b038316610c1d5760405162461bcd60e51b815260206004820152601560248201527f6d7573742062652076616c696420616464726573730000000000000000000000604482015260640161036d565b60008211610c6d5760405162461bcd60e51b815260206004820152601760248201527f796f75206d7573742073656e6420736f6d657468696e67000000000000000000604482015260640161036d565b6106f9848484610d3c565b60006001600160a01b03821615610c9157506001919050565b506109c4919050565b919050565b505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610a2d9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610d6c565b6040516001600160a01b038316602482015260448101829052610c9f90849063a9059cbb60e01b90606401610cd8565b6000610dc1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e519092919063ffffffff16565b805190915015610c9f5780806020019051810190610ddf9190611173565b610c9f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161036d565b6060610e608484600085610e68565b949350505050565b606082471015610ee05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161036d565b843b610f2e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161036d565b600080866001600160a01b03168587604051610f4a91906111d6565b60006040518083038185875af1925050503d8060008114610f87576040519150601f19603f3d011682016040523d82523d6000602084013e610f8c565b606091505b5091509150610f9c828286610fa7565b979650505050505050565b60608315610fb6575081610389565b825115610fc65782518084602001fd5b8160405162461bcd60e51b815260040161036d919061100c565b60005b83811015610ffb578181015183820152602001610fe3565b83811115610a2d5750506000910152565b602081526000825180602084015261102b816040850160208701610fe0565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610c9a57600080fd5b6000806040838503121561106957600080fd5b6110728361103f565b946020939093013593505050565b60008060006060848603121561109557600080fd5b61109e8461103f565b92506110ac6020850161103f565b9150604084013590509250925092565b6000602082840312156110ce57600080fd5b6103898261103f565b600080604083850312156110ea57600080fd5b6110f38361103f565b91506111016020840161103f565b90509250929050565b600181811c9082168061111e57607f821691505b6020821081141561113f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561116e5761116e611145565b500190565b60006020828403121561118557600080fd5b8151801515811461038957600080fd5b60008160001904831182151516156111af576111af611145565b500290565b6000826111d157634e487b7160e01b600052601260045260246000fd5b500490565b600082516111e8818460208701610fe0565b919091019291505056fea164736f6c6343000809000a";

type BasisTradingVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasisTradingVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasisTradingVault__factory extends ContractFactory {
  constructor(...args: BasisTradingVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "BasisTradingVault";
  }

  deploy(
    USDL_: string,
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BasisTradingVault> {
    return super.deploy(
      USDL_,
      manager_,
      overrides || {}
    ) as Promise<BasisTradingVault>;
  }
  getDeployTransaction(
    USDL_: string,
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(USDL_, manager_, overrides || {});
  }
  attach(address: string): BasisTradingVault {
    return super.attach(address) as BasisTradingVault;
  }
  connect(signer: Signer): BasisTradingVault__factory {
    return super.connect(signer) as BasisTradingVault__factory;
  }
  static readonly contractName: "BasisTradingVault";
  public readonly contractName: "BasisTradingVault";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasisTradingVaultInterface {
    return new utils.Interface(_abi) as BasisTradingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasisTradingVault {
    return new Contract(address, _abi, signerOrProvider) as BasisTradingVault;
  }
}
