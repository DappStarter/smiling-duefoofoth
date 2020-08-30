require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note mushroom protect grid kiwi sunset thank'; 
let testAccounts = [
"0x6c2c05500979bac34e6e3b5edd87d1803b7452731970cfbf40304432adad32a6",
"0x4acb7f240abd1476b26c6ce90b03404b79dee78d3fd781b0f6fc5513f06eeb2a",
"0xe86fbc8849c2647f01764167fa84b5753ddd8b189d25f9e895bb03936b01c7be",
"0xef3f5271de9c4b47a5600a3de097bb5b2f188849e1774cddc436d3e05b05a934",
"0x70082ad44e06058d8b8afd0ed4110b153b0be163e1ceb32977e875a53da2904f",
"0x2099456937f1c49cf4a6b42ce5e2e487d4477527e5bfb86038fa8d95bb887712",
"0x258b6cfdee3c113b96c78ec8faddd80ef69cf69d0374160ae04e4ca9b0a9c4b9",
"0x6195b1c069349ca454febcf88403e1d9a0291a2588c407e0740b86b21fa398a3",
"0xe382ea4365204c55e8b48c6207d5b8331cd61a508d735c68d4011cbaee647aac",
"0xd8b1287ad7577455a4254236df5f09638057f82551d4432e0b4063730d7be121"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
