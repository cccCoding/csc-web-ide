const transactionDetailsLinks = {
    Main: 'https://www.etherscan.io/tx/',
    Rinkeby: 'https://rinkeby.etherscan.io/tx/',
    Ropsten: 'https://ropsten.etherscan.io/tx/',
    Kovan: 'https://kovan.etherscan.io/tx/',
    Goerli: 'https://goerli.etherscan.io/tx/',
    'CSC Main': 'https://www.coinex.net/tx/',
    'CSC Test': 'https://testnet.coinex.net/tx/'
  }
  
  export function etherScanLink (network: string, hash: string): string {
    if (transactionDetailsLinks[network]) {
      return transactionDetailsLinks[network] + hash
    }
  }