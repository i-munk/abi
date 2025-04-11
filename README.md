# Ethers 기반 ABI 연동 과제

이 프로젝트는 Ganache 로컬 네트워크에서 스마트 컨트랙트와 상호작용하기 위해 `ethers.js`를 사용하여 ABI 기반 기능을 구현하고 테스트하는 과제입니다.  
Hardhat 테스트를 통해 컨트랙트와 연동된 함수들이 의도한 대로 작동하는지 검증합니다.

---

## 📁 프로젝트 구조

```
abi/
├── abis/                # 컴파일된 컨트랙트 ABI 및 주소
│   └── DataType.json
├── contracts/           # Solidity 스마트 컨트랙트
│   └── DataType.sol
├── test/                # Hardhat 테스트 파일
│   └── ethers.test.ts
├── web3/                # Ethers.js로 구현된 Web3 함수들
│   └── ethers.ts
├── .env                 # Ganache 프라이빗 키 설정
├── hardhat.config.ts    # Hardhat 설정 파일
└── README.md            # 본 문서
```

---

## 🔧 환경 설정

### 1. 의존성 설치

```bash
npm install
```

### 2. Ganache 실행

Ganache GUI 또는 CLI로 로컬 블록체인을 실행합니다.

### 3. `.env` 파일 생성

`.env` 파일에 아래와 같이 Ganache 계정의 프라이빗 키를 설정하세요.

```
PRIVATE_KEY=0x....
```

---

## 🚀 배포 및 테스트

### 1. 스마트 컨트랙트 배포

```bash
npm run deploy
```

### 2. 테스트 실행

```bash
npm run test
```

모든 테스트가 통과하면 다음과 같이 출력됩니다:

```
21 passing
0 failing
```

---

## 📌 구현 기능 설명

### Web3 함수 (web3/ethers.ts)

- `getSigner()`, `getContract()` : Ethers 지갑 및 컨트랙트 인스턴스 생성
- Getter 함수
  - `positiveNumber()`, `negativeNumber()`, `isActive()`, `wallet()`, `recipient()` 등 컨트랙트 상태 변수 조회
- Setter 함수
  - `setPositiveNumber()`, `setWallet()`, `toggleActive()` 등 상태 변수 변경 및 트랜잭션 실행
- `getDetails()` : 컨트랙트의 모든 상태변수를 한 번에 조회

### 테스트 (test/ethers.test.ts)

- 각 함수들이 실제로 올바르게 상태를 조회하거나 변경하는지를 검증합니다.
- 배포자 주소와 recipient 주소가 일치하는지도 테스트합니다.

---

## 💡 주요 학습 포인트

- `ethers.js`를 활용한 로컬 블록체인(Ganache)과의 연동
- ABI와 컨트랙트 주소를 통해 컨트랙트 인스턴스 생성
- 트랜잭션 발생 시 `provider.waitForTransaction()` 방식으로 처리 (ethers v6 기준)
- 상태 변수 getter/setter 구현과 Hardhat 테스트 작성

---

