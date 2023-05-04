const ZaContractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_blocklistContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "ApproveToCaller", type: "error" },
  { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
  { inputs: [], name: "InvalidQueryRange", type: "error" },
  { inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
  { inputs: [], name: "MintToZeroAddress", type: "error" },
  { inputs: [], name: "MintZeroQuantity", type: "error" },
  { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
  { inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
  { inputs: [], name: "SetUserCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
  { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
  { inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
  { inputs: [], name: "TransferToZeroAddress", type: "error" },
  { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint64",
        name: "expires",
        type: "uint64",
      },
    ],
    name: "UpdateUser",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "adminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseTokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blocklistContractAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blocklistPermanentlyDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disableSoulbindAdminTransfersPermanently",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "explicitOwnershipOf",
    outputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint64", name: "startTimestamp", type: "uint64" },
          { internalType: "bool", name: "burned", type: "bool" },
          { internalType: "uint24", name: "extraData", type: "uint24" },
        ],
        internalType: "struct IERC721A.TokenOwnership",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "explicitOwnershipsOf",
    outputs: [
      {
        components: [
          { internalType: "address", name: "addr", type: "address" },
          { internalType: "uint64", name: "startTimestamp", type: "uint64" },
          { internalType: "bool", name: "burned", type: "bool" },
          { internalType: "uint24", name: "extraData", type: "uint24" },
        ],
        internalType: "struct IERC721A.TokenOwnership[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freezeMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "freezePayoutAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "receivers", type: "address[]" },
      { internalType: "uint256[]", name: "mintNumber", type: "uint256[]" },
    ],
    name: "gift",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "isExchangeBlocklisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPublicSaleActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metadataFrozen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "numTokens", type: "uint256" }],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "numberMinted",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "payoutAddresses",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payoutAddressesFrozen",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "payoutBasisPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permanentlyDisableBlocklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintsAllowedPerAddress",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintsAllowedPerTransaction",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "randomHashStore",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_newMaxSupply", type: "uint256" },
    ],
    name: "reduceMaxSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyFee",
    outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_tokenId", type: "uint256" },
      { internalType: "uint256", name: "_salePrice", type: "uint256" },
    ],
    name: "royaltyInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_newBaseURI", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_mintsAllowed", type: "uint256" },
    ],
    name: "setPublicMintsAllowedPerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_mintsAllowed", type: "uint256" },
    ],
    name: "setPublicMintsAllowedPerTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_publicPrice", type: "uint256" },
    ],
    name: "setPublicPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_saleActiveState", type: "bool" }],
    name: "setPublicSaleState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_royaltyAddress", type: "address" },
    ],
    name: "setRoyaltyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint96", name: "_feeNumerator", type: "uint96" }],
    name: "setRoyaltyFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_adminAddress", type: "address" },
    ],
    name: "setSoulboundAdminAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bool", name: "_transferState", type: "bool" }],
    name: "setTransferState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint64", name: "expires", type: "uint64" },
    ],
    name: "setUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soulbindAdminAddressPermanentlyDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "soulboundAdminAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "tokensOfOwner",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "stop", type: "uint256" },
    ],
    name: "tokensOfOwnerIn",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transfersEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_blocklistContractAddress",
        type: "address",
      },
    ],
    name: "updateBlocklistContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "exchanges", type: "uint256[]" },
      { internalType: "bool[]", name: "blocklisted", type: "bool[]" },
    ],
    name: "updateBlocklistedExchanges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_payoutAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_payoutBasisPoints",
        type: "uint256[]",
      },
    ],
    name: "updatePayoutAddressesAndBasisPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "userExpires",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "userOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const wormContractABI = [
  {
    inputs: [{ internalType: "address", name: "_edworm", type: "address" }],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "bytes16", name: "key", type: "bytes16" },
      { internalType: "bytes16[]", name: "vals", type: "bytes16[]" },
    ],
    name: "addSequence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes16", name: "_key", type: "bytes16" },
      { internalType: "bytes16", name: "_name", type: "bytes16" },
      { internalType: "bytes16", name: "_desc", type: "bytes16" },
      { internalType: "bytes16", name: "_graphics", type: "bytes16" },
      { internalType: "bytes16", name: "_metadata", type: "bytes16" },
      { internalType: "bytes16", name: "_imageURI", type: "bytes16" },
      { internalType: "bytes16", name: "_tokenURI", type: "bytes16" },
      { internalType: "uint256", name: "_boundary", type: "uint256" },
    ],
    name: "addTemplate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes16[]", name: "keys", type: "bytes16[]" },
      { internalType: "string[]", name: "vals", type: "string[]" },
    ],
    name: "addVariables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "edworm",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getGraphics",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getMetadata",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "imageURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "isDisciple",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "propagate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resurrect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes16[]", name: "vals", type: "bytes16[]" }],
    name: "setTemplates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "templateKeys",
    outputs: [{ internalType: "bytes16", name: "", type: "bytes16" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes16", name: "", type: "bytes16" }],
    name: "templates",
    outputs: [
      { internalType: "bytes16", name: "key", type: "bytes16" },
      { internalType: "bytes16", name: "name", type: "bytes16" },
      { internalType: "bytes16", name: "desc", type: "bytes16" },
      { internalType: "bytes16", name: "graphics", type: "bytes16" },
      { internalType: "bytes16", name: "zaMetadata", type: "bytes16" },
      { internalType: "bytes16", name: "imageURI", type: "bytes16" },
      { internalType: "bytes16", name: "tokenURI", type: "bytes16" },
      { internalType: "uint256", name: "boundary", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes16", name: "b", type: "bytes16" }],
    name: "toUint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yoink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
const ZaContractAddress = "0x26D6C3e7aEFCE970fe3BE5d589DbAbFD30026924";
const wormContractAddress = "0xf65d6475869f61c6dce6ac194b6a7dbe45a91c63";

let accounts, acccount, ZaContract, wormContract;
logoImage = new Image();

const chainId = 1; // eth

//chain change handler
ethereum.on("chainChanged", (_chainId) => window.location.reload());
window.ethereum.on("accountsChanged", function (accounts) {
  window.location.reload();
});

//html elements
const connectBtn = document.getElementById("connect");
const addressInput = document.getElementById("address");
const getAccountBtn = document.getElementById("accountWithoutConnect");
const getZaTatBtn = document.getElementById("getZaTattoo");
const getWormTatBtn = document.getElementById("getWormTattoo");
const status = document.getElementById("status");
const orText = document.getElementById("orText");
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalButton");
var span = document.getElementsByClassName("close")[0];

// Show the modal when the button is clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Hide the modal when the close button is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Hide the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

getZaTatBtn.style.display = "none";
getWormTatBtn.style.display = "none";
numberOfTattoos = 0;
numberOfZaTattoos = 0;
numberOfWormTattoos = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.display = "none";

//connect wallet
connectBtn.onclick = async () => {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  account = accounts[0];
  console.log(account);
  const web3 = new Web3(window.ethereum);

  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(chainId) }],
      });
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        writeAMessage("Please change your network to mainnet");
        return 0;
      }
    }
  }

  status.innerHTML = "Connected";
  canvas.style.display = "";
  ZaContract = new web3.eth.Contract(ZaContractABI, ZaContractAddress);
  wormContract = new web3.eth.Contract(wormContractABI, wormContractAddress);
  make_base();
  connectBtn.style.display = "none";
  getZaTatBtn.style.display = "";
  getWormTatBtn.style.display = "";
  getAccountBtn.style.display = "none";
  addressInput.style.display = "none";
  orText.style.display = "none";
};

//connect without a wallet
getAccountBtn.onclick = async () => {
  const addressInQuestion = addressInput.value;
  console.log(addressInQuestion);
  if (addressInQuestion.length == 42) {
    account = addressInQuestion;
    console.log(account);
    canvas.style.display = "";
    make_base();
    connectBtn.style.display = "none";
    getAccountBtn.style.display = "none";
    addressInput.style.display = "none";
    getZaTatBtn.style.display = "";
    getWormTatBtn.style.display = "";
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/874e334ba0924425bdcff7ec6abee349"
    );
    ZaContract = new web3.eth.Contract(ZaContractABI, ZaContractAddress);
    wormContract = new web3.eth.Contract(wormContractABI, wormContractAddress);
    status.innerHTML = "Account added";
    orText.style.display = "none";
  } else {
    writeAMessage("No account added, try again");
  }
};

async function writeAMessage(text) {
  status.innerHTML = text;
}

//get tattoos functions
getZaTatBtn.onclick = async () => {
  console.log(numberOfZaTattoos);
  await makeLogo("images/Logo.webp");
  if (numberOfZaTattoos < 2) {
    const [name, symbol, balance, tokenID] = await getZaMetadata();
    console.log([name, symbol, balance, tokenID]);
    if (balance > 0) {
      writeMetadata([name, symbol, balance, tokenID]);
      numberOfZaTattoos++;
    }
    if (balance == 0) {
      writeAMessage("You don't have a Zen Academy student ID");
    }
  } else {
    writeAMessage("You can't get more Zen Academy tattoos");
  }
};

getWormTatBtn.onclick = async () => {
  console.log(numberOfWormTattoos);
  await makeLogo("images/mechworm_clean_no_bg.db3da710.svg");
  if (numberOfWormTattoos < 2) {
    const [name, symbol, balance] = await getWormMetadata();
    console.log([name, symbol, balance]);
    if (balance > 0) {
      writeMetadata([name, symbol, balance]);
      numberOfWormTattoos++;
    }
    if (balance == 0) {
      writeAMessage("You don't have a Worm");
    }
  } else {
    writeAMessage("You can't get more Worm tattoos");
  }
};

async function getZaMetadata() {
  let zaMetadata = [];
  zaMetadata[0] = "";
  zaMetadata[1] = await ZaContract.methods.symbol().call(); //get contract symbol
  zaMetadata[2] = await ZaContract.methods.balanceOf(account).call(); //get total tokens owned
  if (zaMetadata[2] > 0) {
    zaMetadata[3] = await ZaContract.methods.tokensOfOwner(account).call(); //get individual tokenID owned
  }
  console.log(zaMetadata);
  return zaMetadata;
}
async function getWormMetadata() {
  let wormMetadata = [];
  wormMetadata[0] = await wormContract.methods.name().call(); //get contract name
  wormMetadata[1] = await wormContract.methods.symbol().call(); //get contract symbol
  wormMetadata[2] = await wormContract.methods.isDisciple(account).call(); //get total tokens owned
  console.log(wormMetadata);
  return wormMetadata;
}

async function writeMetadata([name, symbol, balance, tokenID]) {
  console.log(name + " #  " + tokenID);
  text = name + " " + symbol + " # " + tokenID;
  if (tokenID == undefined) {
    text = name + " " + symbol;
  }
  if (numberOfTattoos == 0) {
    createTattoo(ctx, text, 370, 25, 100, 40, 10, 45, "13px Common Pixel");
    numberOfTattoos++;
    writeAMessage("You have " + numberOfTattoos + " tattoos");
    console.log("You have " + numberOfTattoos + " tattoos");
  } else if (numberOfTattoos == 1) {
    createTattoo(ctx, text, 420, -170, 100, 40, 10, 60, "13px Common Pixel");
    numberOfTattoos++;
    writeAMessage("You have " + numberOfTattoos + " tattoos");
    console.log("You have " + numberOfTattoos + " tattoos");
  } else if (numberOfTattoos == 2) {
    createTattoo(ctx, text, 300, 75, 120, 40, 10, 25, "13px Common Pixel");
    numberOfTattoos++;
    writeAMessage("You have " + numberOfTattoos + " tattoos");
    console.log("You have " + numberOfTattoos + " tattoos");
  } else if (numberOfTattoos > 2) {
    writeAMessage("You are all inked up!");
    console.log("You are all inked up!");
  }
}

//canvas funtions
function make_base() {
  base_image = new Image();
  base_image.src = "images/pixel-hand.png";
  base_image.onload = function () {
    ctx.drawImage(
      base_image,
      0,
      0,
      base_image.width * 0.45,
      base_image.height * 0.45
    );
  };
}

async function makeLogo(source) {
  logoImage.src = source;
  logoImage.crossOrigin = "Anonymous";
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.lineTo(x + width - radius, y + 0.15 * height);
  ctx.lineTo(x + width - 0.5 * radius, y + 0.15 * height);
  ctx.lineTo(x + width - 0.5 * radius, y + 0.3 * height);
  ctx.lineTo(x + width, y + 0.3 * height);
  ctx.lineTo(x + width, y + 0.7 * height);
  ctx.lineTo(x + width - 0.5 * radius, y + 0.7 * height);
  ctx.lineTo(x + width - 0.5 * radius, y + 0.85 * height);
  ctx.lineTo(x + width - radius, y + 0.85 * height);
  ctx.lineTo(x + width - radius, y + height);

  ctx.lineTo(x + radius, y + height);
  ctx.lineTo(x + radius, y + 0.85 * height);
  ctx.lineTo(x + 0.5 * radius, y + 0.85 * height);
  ctx.lineTo(x + 0.5 * radius, y + 0.7 * height);
  ctx.lineTo(x, y + 0.7 * height);
  ctx.lineTo(x, y + 0.3 * height);
  ctx.lineTo(x + 0.5 * radius, y + 0.3 * height);
  ctx.lineTo(x + 0.5 * radius, y + 0.15 * height);
  ctx.lineTo(x + radius, y + 0.15 * height);
  ctx.lineTo(x + radius, y);
  ctx.closePath();
  ctx.stroke();
}

function createTattoo(ctx, text, x, y, width, height, radius, angle, font) {
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";

  logoSize = 20;

  const textMetrics = ctx.measureText(text);
  const textWidth = textMetrics.width;
  const textHeight = parseFloat(ctx.font); // Extract the font size from the font property
  const padding = 0.1 * textWidth;
  const rectWidth = textWidth + 2 * padding;
  const rectHeight = textHeight * 1.5;

  ctx.rotate((angle * Math.PI) / 180);
  roundRect(
    ctx,
    x - rectWidth * 0.5,
    y - rectHeight * 0.5,
    rectWidth,
    rectHeight,
    radius
  );

  ctx.drawImage(
    logoImage,
    x - logoSize * 0.5,
    y + 0.6 * rectHeight,
    logoSize,
    logoSize
  );
  ctx.fillText(text, x, y);
  ctx.rotate(((360 - angle) * Math.PI) / 180);
}
