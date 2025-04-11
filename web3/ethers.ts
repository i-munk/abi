import { ethers } from "ethers";
import { abi, address as contractAddress } from "../abis/DataType.json"; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545"); // Todo: 가나슈의 RPC SERVER 주소를 입력합니다.
const privateKey = process.env.PRIVATE_KEY || "";

export const checkNetworkInfo = async () => {
  return await provider.getNetwork();
};
/*
    위의 코드들은 지우지 않습니다.
    
    getSigner와 getContract는 다음의 데이터를 이용하여 구현합니다.

    provider : JSON-RPC API를 통해 블록체인과 통신하는 역할자
    abi : DataType Contract의 ABI 데이터
    contractAddress : DataType Contract의 Address
    privateKey : .env 파일에 설정된 가나슈 계정의 프라이빗 키
*/

export const getSigner = () => {
  return new ethers.Wallet(privateKey, provider);
};

export const getContract = () => {
  const signer = getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

export const positiveNumber = async () => {
  const contract = getContract();
  return await contract.positiveNumber();
};

export const negativeNumber = async () => {
  const contract = getContract();
  return await contract.negativeNumber();
};

export const isActive = async () => {
  const contract = getContract();
  return await contract.isActive();
};

export const wallet = async () => {
  const contract = getContract();
  return await contract.wallet();
};

export const recipient = async () => {
  const contract = getContract();
  return await contract.recipient();
};

export const fixedData = async () => {
  const contract = getContract();
  return await contract.fixedData();
};

export const dynamicData = async () => {
  const contract = getContract();
  return await contract.dynamicData();
};

export const currentState = async () => {
  const contract = getContract();
  return await contract.currentState();
};

export const getDynamicDataLength = async () => {
  const contract = getContract();
  return await contract.getDynamicDataLength();
};

export const getDetails = async () => {
  const contract = getContract();
  return await contract.getDetails();
};

export const setPositiveNumber = async (_positive: number) => {
  const contract = getContract();
  const tx = await contract.setPositiveNumber(_positive);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const setNegativeNumber = async (_negative: number) => {
  const contract = getContract();
  const tx = await contract.setNegativeNumber(_negative);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const toggleActive = async () => {
  const contract = getContract();
  const tx = await contract.toggleActive();
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const setState = async (_newState: number) => {
  const contract = getContract();
  const tx = await contract.setState(_newState);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const setWallet = async (address: string) => {
  const contract = getContract();
  const tx = await contract.setWallet(address);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const setFixedData = async (_newFixedData: string) => {
  const contract = getContract();
  const tx = await contract.setFixedData(_newFixedData);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const setDynamicData = async (_newDynamicData: string) => {
  const contract = getContract();
  const tx = await contract.setDynamicData(_newDynamicData);
  await provider.waitForTransaction(tx.hash);
  return tx;
};

export const getSignerAddress = async () => {
  return (await getSigner()).address;
};
