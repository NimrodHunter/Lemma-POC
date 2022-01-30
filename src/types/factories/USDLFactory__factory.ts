/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDLFactory, USDLFactoryInterface } from "../USDLFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcAddress_",
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
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherFund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
    ],
    name: "Messages",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "origin",
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
    name: "VaultTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    inputs: [],
    name: "fund",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
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
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040526000196080523480156200001757600080fd5b50604051620016de380380620016de8339810160408190526200003a916200024e565b604080518082018252600981526813195b5b58481554d160ba1b6020808301918252835180850190945260048452631554d11360e21b90840152815191929162000087916003916200018b565b5080516200009d9060049060208401906200018b565b50506001600555506001600160a01b038216620001015760405162461bcd60e51b815260206004820152601c60248201527f5553444320616464726573732073686f756c64206e6f7420626520300000000060448201526064015b60405180910390fd5b6001600160a01b038116620001595760405162461bcd60e51b815260206004820152601f60248201527f4d616e6167657220616464726573732073686f756c64206e6f742062652030006044820152606401620000f8565b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055620002c3565b828054620001999062000286565b90600052602060002090601f016020900481019282620001bd576000855562000208565b82601f10620001d857805160ff191683800117855562000208565b8280016001018555821562000208579182015b8281111562000208578251825591602001919060010190620001eb565b50620002169291506200021a565b5090565b5b808211156200021657600081556001016200021b565b80516001600160a01b03811681146200024957600080fd5b919050565b600080604083850312156200026257600080fd5b6200026d8362000231565b91506200027d6020840162000231565b90509250929050565b600181811c908216806200029b57607f821691505b60208210811415620002bd57634e487b7160e01b600052602260045260246000fd5b50919050565b608051611402620002dc600039600050506114026000f3fe6080604052600436106100e15760003560e01c806370a082311161007f578063a457c2d711610059578063a457c2d71461026d578063a9059cbb1461028d578063b60d4288146102ad578063dd62ed3e146102b5576100f1565b806370a082311461020257806395d89b4114610238578063a0712d681461024d576100f1565b806318160ddd116100bb57806318160ddd1461018757806323b872dd146101a6578063313ce567146101c657806339509351146101e2576100f1565b806306fdde0314610124578063095ea7b31461014f5780631249c58b1461017f576100f1565b366100f1576100ee6102fb565b50005b6100fc3660006111a7565b6001600160e01b031916631249c58b60e01b141561011c576100ee6103e6565b6100ee6102fb565b34801561013057600080fd5b506101396105a0565b6040516101469190611203565b60405180910390f35b34801561015b57600080fd5b5061016f61016a366004611252565b610632565b6040519015158152602001610146565b61016f6103e6565b34801561019357600080fd5b506002545b604051908152602001610146565b3480156101b257600080fd5b5061016f6101c136600461127c565b610648565b3480156101d257600080fd5b5060405160128152602001610146565b3480156101ee57600080fd5b5061016f6101fd366004611252565b610709565b34801561020e57600080fd5b5061019861021d3660046112b8565b6001600160a01b031660009081526020819052604090205490565b34801561024457600080fd5b50610139610745565b34801561025957600080fd5b5061016f6102683660046112d3565b610754565b34801561027957600080fd5b5061016f610288366004611252565b610874565b34801561029957600080fd5b5061016f6102a8366004611252565b610925565b61016f6102fb565b3480156102c157600080fd5b506101986102d03660046112ec565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000600260055414156103555760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600555346103a75760405162461bcd60e51b815260206004820152601760248201527f796f75206d7573742073656e6420736f6d657468696e67000000000000000000604482015260640161034c565b60405134815233907fe7d9036a1a99d80640735fc6f4b95a23173d5468f91b17325f2a1bdcd3cd15919060200160405180910390a25060018060055590565b60006002600554141561043b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161034c565b60026005553461048d5760405162461bcd60e51b815260206004820152601760248201527f796f75206d7573742073656e6420736f6d657468696e67000000000000000000604482015260640161034c565b6000356001600160e01b0319167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166000366040516104ca92919061131f565b604051908190038120907f4a28047de23d3f898d1d44f3cc5cecf62311ce7d8ac37a3a3912f1baf35ddf6c90600090a361051233346109c45b61050d9190611345565b610932565b61051b34610a11565b6105675760405162461bcd60e51b815260206004820152600e60248201527f73656e6420657468206661696c73000000000000000000000000000000000000604482015260640161034c565b604051349060009033907f74cb395fc5aaf821b7758e34498f9708161e1d589535ab1ffc6aeddea4b79d17908390a45060018060055590565b6060600380546105af90611364565b80601f01602080910402602001604051908101604052809291908181526020018280546105db90611364565b80156106285780601f106105fd57610100808354040283529160200191610628565b820191906000526020600020905b81548152906001019060200180831161060b57829003601f168201915b5050505050905090565b600061063f338484610a71565b50600192915050565b6000610655848484610b95565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156106ef5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606482015260840161034c565b6106fc8533858403610a71565b60019150505b9392505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161063f91859061074090869061139f565b610a71565b6060600480546105af90611364565b6000600260055414156107a95760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161034c565b60026005556107b782610d94565b6107c057600080fd5b6107cc33836001610503565b6006546107e2906001600160a01b031683610ec3565b61082e5760405162461bcd60e51b815260206004820152601060248201527f73656e6420746f6b656e206661696c7300000000000000000000000000000000604482015260640161034c565b60065460405183916001600160a01b03169033907f74cb395fc5aaf821b7758e34498f9708161e1d589535ab1ffc6aeddea4b79d1790600090a450600180600555919050565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561090e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161034c565b61091b3385858403610a71565b5060019392505050565b600061063f338484610b95565b6001600160a01b0382166109885760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161034c565b806002600082825461099a919061139f565b90915550506001600160a01b038216600090815260208190526040812080548392906109c790849061139f565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60075460405160009182916001600160a01b039091169084908381818185875af1925050503d8060008114610a62576040519150601f19603f3d011682016040523d82523d6000602084013e610a67565b606091505b5090949350505050565b6001600160a01b038316610ad35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161034c565b6001600160a01b038216610b345760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161034c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610c115760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161034c565b6001600160a01b038216610c735760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161034c565b6001600160a01b03831660009081526020819052604090205481811015610d025760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161034c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d3990849061139f565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d8591815260200190565b60405180910390a35b50505050565b6000808211610de55760405162461bcd60e51b815260206004820152601760248201527f796f75206d7573742073656e6420736f6d657468696e67000000000000000000604482015260640161034c565b6006546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd90606401602060405180830381600087803b158015610e3757600080fd5b505af1158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f91906113b7565b610ebb5760405162461bcd60e51b815260206004820152601b60248201527f7472616e736665722066726f6d2063616e277420626520646f6e650000000000604482015260640161034c565b506001919050565b60075460009061063f9084906001600160a01b031684610ee3565b505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610ede92869291600091610f88918516908490611018565b805190915015610ede5780806020019051810190610fa691906113b7565b610ede5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161034c565b6060611027848460008561102f565b949350505050565b6060824710156110a75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161034c565b843b6110f55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161034c565b600080866001600160a01b0316858760405161111191906113d9565b60006040518083038185875af1925050503d806000811461114e576040519150601f19603f3d011682016040523d82523d6000602084013e611153565b606091505b509150915061116382828661116e565b979650505050505050565b6060831561117d575081610702565b82511561118d5782518084602001fd5b8160405162461bcd60e51b815260040161034c9190611203565b6001600160e01b031981358181169160048510156111cf5780818660040360031b1b83161692505b505092915050565b60005b838110156111f25781810151838201526020016111da565b83811115610d8e5750506000910152565b60208152600082518060208401526112228160408501602087016111d7565b601f01601f19169190910160400192915050565b80356001600160a01b038116811461124d57600080fd5b919050565b6000806040838503121561126557600080fd5b61126e83611236565b946020939093013593505050565b60008060006060848603121561129157600080fd5b61129a84611236565b92506112a860208501611236565b9150604084013590509250925092565b6000602082840312156112ca57600080fd5b61070282611236565b6000602082840312156112e557600080fd5b5035919050565b600080604083850312156112ff57600080fd5b61130883611236565b915061131660208401611236565b90509250929050565b8183823760009101908152919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561135f5761135f61132f565b500290565b600181811c9082168061137857607f821691505b6020821081141561139957634e487b7160e01b600052602260045260246000fd5b50919050565b600082198211156113b2576113b261132f565b500190565b6000602082840312156113c957600080fd5b8151801515811461070257600080fd5b600082516113eb8184602087016111d7565b919091019291505056fea164736f6c6343000809000a";

type USDLFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDLFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDLFactory__factory extends ContractFactory {
  constructor(...args: USDLFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "USDLFactory";
  }

  deploy(
    usdcAddress_: string,
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<USDLFactory> {
    return super.deploy(
      usdcAddress_,
      manager_,
      overrides || {}
    ) as Promise<USDLFactory>;
  }
  getDeployTransaction(
    usdcAddress_: string,
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(usdcAddress_, manager_, overrides || {});
  }
  attach(address: string): USDLFactory {
    return super.attach(address) as USDLFactory;
  }
  connect(signer: Signer): USDLFactory__factory {
    return super.connect(signer) as USDLFactory__factory;
  }
  static readonly contractName: "USDLFactory";
  public readonly contractName: "USDLFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDLFactoryInterface {
    return new utils.Interface(_abi) as USDLFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDLFactory {
    return new Contract(address, _abi, signerOrProvider) as USDLFactory;
  }
}
