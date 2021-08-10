require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note sister cluster harvest option equal genuine'; 
let testAccounts = [
"0x1f7584b594330f80cec62dc4da9a3c6250fe73030ceec712ba1e9f3ecb968482",
"0x5722d1f48e6a7bd82bc872d306220dbe3a47d2a96e0e6e6f4141058f64dc3394",
"0x6c96cc8a7b4f31f3cbe892e2ffd0477b4214c70311b5d94b64e131060069b2ab",
"0x536f9090708af28670e4e135cb86f657213d854430d390eef8d4fbdff54e0673",
"0x8c0bf1e26ccdc3dfd0d3db363fd7723ef937c4e6b06ab5a5c8e1096922138ea4",
"0x8ad3cad72453028158e6f71462c0bd80af3879c3d8e4df67393ce083b84fd345",
"0x5d7c4398d6c2829f3a14fd47877eaf8c5939b4e5e05f41280ecc82c0647e4bf4",
"0x6295665f54cf99a60d6bc45afccb37c403c988481c14e1be5a7ce4286d688678",
"0xe9b375d72e41318559c9524ca8d6e03ffb98db35c28583cd260467fc2dcb47f9",
"0x237b50ea46b353393b679f0dcd197df118437dcae7e3939214067ef4b2a25899"
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
            version: '^0.8.0'
        }
    }
};

