
/**
 * @file: demoTestEthLog.js
 * @author: fisco-dev
 * 
 * @date: 2017
 */

var Web3= require('web3');
var config=require('../web3lib/config');
var fs=require('fs');
var execSync =require('child_process').execSync;
var web3sync = require('../web3lib/web3sync');
var BigNumber = require('bignumber.js');


if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	web3 = new Web3(new Web3.providers.HttpProvider(config.HttpProvider));
}

web3.eth.defaultAccount = config.account;

console.log(config);

var filename="TestEthLog";
var address=fs.readFileSync(config.Ouputpath+filename+'.address','utf-8');
var abi=JSON.parse(fs.readFileSync(config.Ouputpath/*+filename+".sol:"*/+filename+'.abi', 'utf-8'));

var contract = web3.eth.contract(abi);
var instance = contract.at(address);

async function sleep(timeout) {  
	return new Promise((resolve, reject) => {
			setTimeout(function() {
			resolve();
		}, timeout);
	});
}

(async function(){
	var put=instance.put();
	console.log("put="+put);

	var testsucceed = 0;
	var testerr = 0;
	
	var c1 = "0080932D5857D9FCFD8CEEDB7593F6EAF8CD192447C6CA2F5AAA27971A19CCE957CC5E30AE56FE79DD7EC125C4AC9DE23884C58F229D1A08B56DD6C4DA8844DDFBA51AE81DC45E5F280B65BC69404370E6617DB7CEF45C12912DB6FE0709B0FFF8008B13498516BAD7F6C7453ED7C7DD0D75283A3E1D8D21D453C8F159B82A96FEBF3502ADC325CEC5750DB8029E327642E75C03A30628525E05CF0D272536432977D3981E550ADC1B2A2ACCAEBB039B1F62F1D2359A7B1D9D4B5EA6854A417FD4695A81E0D7E29319888507EADC55FC49BA2B76CF86559C770D3DD06A669CE3AF248534C85289FAE7509DE40C0E8A55E2D83F5552C99679414D4C433313C7EB296CDD0037189B00C6E9DBC33A9595A222DB990A3B7F7D6658DD532251BB160FF0C23FE691AD3240BE7A2484722EFCBB8AE10DDB7CC719B9076E394C856800539EB71D3B82FAD9DA4529D7547BAA2EA258357A3EFE5B8B0F4F0FBD36FF0D3DD25213E78AD83198865DFBC7B818C1D2B561E1B00F1D81B1986B7B8C72A629BBF67F5D";
	var c2 = "0080932D5857D9FCFD8CEEDB7593F6EAF8CD192447C6CA2F5AAA27971A19CCE957CC5E30AE56FE79DD7EC125C4AC9DE23884C58F229D1A08B56DD6C4DA8844DDFBA51AE81DC45E5F280B65BC69404370E6617DB7CEF45C12912DB6FE0709B0FFF8008B13498516BAD7F6C7453ED7C7DD0D75283A3E1D8D21D453C8F159B82A96FEBF40C3573D2FF963EFB422A7C71BEDC1A8C83CEC7518489F52F1126791C40EC29E46E11C4DF515B2BF259E16233BD27B6E73BFB30E7767A9148568C0276457E00199512DBD4E24714D35C73F79434283F3C45115837669AB4E5FA62B48503A960FCD5C3FDADBC7D8E946B3A536CF006910DC4CA50FB3044CC67B9741641B7DE3CA9F036DD58A9192FD589C36793CBB1F541386EE84F47AEC33A26B402A0716C89C50D9F73E62C6FC4237872C0FC43B9D1FBC8C5513E8BDD1DC8AA2C6A2EF9D186A66D5FCFBC3B55D43B9E5D428C07EB4D2AE3CC98FC1CF24BFD5BCD266A924810C7C48F6EAA81CA867BB27BCCD107779E1D3CCB411F34F48A484D7C99739948D5B";
	var c3 = "0080932D5857D9FCFD8CEEDB7593F6EAF8CD192447C6CA2F5AAA27971A19CCE957CC5E30AE56FE79DD7EC125C4AC9DE23884C58F229D1A08B56DD6C4DA8844DDFBA51AE81DC45E5F280B65BC69404370E6617DB7CEF45C12912DB6FE0709B0FFF8008B13498516BAD7F6C7453ED7C7DD0D75283A3E1D8D21D453C8F159B82A96FEBF30E42C32DA8637D04B0A1091638296FE9DB669610CF2575AB24549E34CEDEC725BE73A6888D4B0163BBF3360881EF7808C859EFF6363AF5D087B637EC2AE4908FDDC3DB91DBE8EF489AC6658378600154A0426E4580E003518C5D3E05060C998B29AA1D9E9A1B154E160E7FA3F14FF903837527A038C3973E0312D72EE43CD447CA8EFA4569BBF6A1C56D1FA99A7B494EABA641E977B3A063537092CF872C5FFF6C88B8BE7E92F1405EE22BAAEA60EF4B0DE755956D8981A193330E369D351790DA56504892094777D18D5F44626597C736B4BCC6ECE99A6CACE70137773F0E0DB737B5521F4525027032AF0D92721D723CAE9DCCF001250240012602AE3FFE2";
		
	var result = instance.add(c1, c2);
	if(c3 === result){
		testsucceed++;
		console.log("test succeed result=", result, ",c3=", c3, ",c1=", c1, ",c2=", c2);
	}else{
		testerr++;
		console.log("test failed result=", result, ",c3=", c3, ",c1=", c1, ",c2=", c2);
	}
})()
