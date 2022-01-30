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
        internalType: "address",
        name: "USDL_",
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
  "0x608060405234801561001057600080fd5b50604051610b3d380380610b3d83398101604081905261002f916101ac565b604080518082018252600b81526a14dd185ad959081554d11360aa1b6020808301918252835180850190945260058452641e1554d11360da1b90840152815191929161007d91600391610113565b508051610091906004906020840190610113565b5050506001600160a01b0381166100ee5760405162461bcd60e51b815260206004820152601a60248201527f555344206d7573742062652061207265616c2061646472657373000000000000604482015260640160405180910390fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055610217565b82805461011f906101dc565b90600052602060002090601f0160209004810192826101415760008555610187565b82601f1061015a57805160ff1916838001178555610187565b82800160010185558215610187579182015b8281111561018757825182559160200191906001019061016c565b50610193929150610197565b5090565b5b808211156101935760008155600101610198565b6000602082840312156101be57600080fd5b81516001600160a01b03811681146101d557600080fd5b9392505050565b600181811c908216806101f057607f821691505b6020821081141561021157634e487b7160e01b600052602260045260246000fd5b50919050565b610917806102266000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461017f57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e3919061077d565b60405180910390f35b6100ff6100fa3660046107ee565b610278565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f366004610818565b61028e565b604051601281526020016100e3565b6100ff6101513660046107ee565b610352565b610113610164366004610854565b6001600160a01b031660009081526020819052604090205490565b6100d661038e565b6100ff6101953660046107ee565b61039d565b6100ff6101a83660046107ee565b61044e565b6101136101bb366004610876565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f5906108a9565b80601f0160208091040260200160405190810160405280929190818152602001828054610221906108a9565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b600061028533848461045b565b50600192915050565b600061029b84848461057f565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561033a5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610347853385840361045b565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102859185906103899086906108e4565b61045b565b6060600480546101f5906108a9565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156104375760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610331565b610444338585840361045b565b5060019392505050565b600061028533848461057f565b6001600160a01b0383166104bd5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610331565b6001600160a01b03821661051e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610331565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166105fb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610331565b6001600160a01b03821661065d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610331565b6001600160a01b038316600090815260208190526040902054818110156106ec5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610331565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107239084906108e4565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161076f91815260200190565b60405180910390a350505050565b600060208083528351808285015260005b818110156107aa5785810183015185820160400152820161078e565b818111156107bc576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146107e957600080fd5b919050565b6000806040838503121561080157600080fd5b61080a836107d2565b946020939093013593505050565b60008060006060848603121561082d57600080fd5b610836846107d2565b9250610844602085016107d2565b9150604084013590509250925092565b60006020828403121561086657600080fd5b61086f826107d2565b9392505050565b6000806040838503121561088957600080fd5b610892836107d2565b91506108a0602084016107d2565b90509250929050565b600181811c908216806108bd57607f821691505b602082108114156108de57634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561090557634e487b7160e01b600052601160045260246000fd5b50019056fea164736f6c6343000809000a";

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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BasisTradingVault> {
    return super.deploy(USDL_, overrides || {}) as Promise<BasisTradingVault>;
  }
  getDeployTransaction(
    USDL_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(USDL_, overrides || {});
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
