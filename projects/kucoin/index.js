const { cexExports } = require('../helper/cex')

const config = {
  ethereum: {
    owners: [
      '0x2b5634c42055806a59e9107ed44d43c426e58258',
      '0x689c56aef474df92d44a1b70850f808488f9769c',
      '0xa1d8d972560c2f8144af871db508f0b0b10a3fbf',
      '0x4ad64983349c49defe8d7a4686202d24b25d0ce8',
      '0x1692e170361cefd1eb7240ec13d048fd9af6d667',
      '0xd6216fc19db775df9774a6e33526131da7d19a2c',
      '0xf16e9b0d03470827a95cdfd0cb8a8a3b46969b91',
      '0xcad621da75a66c7a8f4ff86d30a2bf981bfc8fdd',
    ]
  },
  tron: {
    owners: [
      'TUpHuDkiCCmwaTZBHZvQdwWzGNm5t8J2b9',
      'TEWzF5ZsaWMh6sTNDPrYaPJrK8TTMGfwCC',
      'TQeNNo5zVarhdKm5EiJSekfNXg6H1tRN4n',
    ]
  },
  bitcoin: {
    owners: [
      '38fJPq4dYGPoJizEUGCL9yWkqg73cJmC2n',
      'bc1q080rkmk3kj86pxvf5nkxecdrw6nrx3zzy9xl7q',
      'bc1q8yja3gw33ngd8aunmfr4hj820adc9nlsv0syvz',
      'bc1qgrxsrmrhsapvh9addyx6sh8j4rw0sn9xtur9uq',
    ]
  }
}

module.exports = cexExports(config)
