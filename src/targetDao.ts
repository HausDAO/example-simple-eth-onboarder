import { ValidNetwork } from "@daohaus/keychain-utils";
import { EthAddress } from "@daohaus/utils";

export const TARGETS: {
    NAME: string;
    DAO_ADDRESS: EthAddress;
    SAFE_ADDRESS: EthAddress;
    SHARE_ADDRESS: EthAddress;
    SHARE_SYMBOL: string;
    LOOT_ADDRESS: EthAddress;
    LOOT_SYMBOL: string;
    SHAMAN_ADDRESS: EthAddress;
    YEET_BANK: string;
    MAX_YEET: string;
    SOFT_CAP: string;
    CHAIN_ID: ValidNetwork;
    STAKE_TOKEN_NAME: string;
    STAKE_TOKEN_SYMBOL: string;
    STAKE_TOKEN_DECIMALS: number;
    STAKE_PAUSED: boolean;
    STAKE_NEXT_START: number;

} = {
  NAME: "SILO DAO",
  DAO_ADDRESS: "0x7551eeb016d0c1c8315611053d30bd90d1a4b09b",
  SAFE_ADDRESS: "0x6ee647cd1512e50cf2938c273657dee076286ec5",
  CHAIN_ID: "0xa",
  SHARE_ADDRESS: "0x15518a4b2d303aefaa3c6b99617ea3956defd142",
  SHARE_SYMBOL: "vSILO",
  LOOT_ADDRESS: "0x36138bb223ffe0c69d99b5affc07800aa3f9e346",
  LOOT_SYMBOL: "SILO",
  STAKE_TOKEN_NAME: "ETH",
  STAKE_TOKEN_SYMBOL: "ETH",
  STAKE_TOKEN_DECIMALS: 18,
  SHAMAN_ADDRESS: "0xbb882dA8ebd09D3dB9FCb16E33e8B67719EE8A55",
  YEET_BANK: "0x36667cba1bac87c8ea85ffb0fb28be81e80adca0",
  MAX_YEET: "300000000000000000000",
  SOFT_CAP: "30000000000000000000",
  STAKE_PAUSED: false,
  STAKE_NEXT_START: 0,

};

export const ABOUTLINKS = {
  discord: "https://discord.gg/daohaus",
  twitter: "https://twitter.com/nowdaoit",
  github: "https://github.com/HausDAO/",
  githubOnboarder: "https://github.com/HausDAO/publichaus",
  logo_url: "https://yeet.daohaus.club/static/media/y33t_logo.67335638.svg",
  hero: "https://yeet.daohaus.club/static/media/yeet-pirate.e556464d.gif"
};
