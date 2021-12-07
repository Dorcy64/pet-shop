## Pet shop dapp truffle box tutorial.

### Testing Pet Shop Box
- Make pet-shop directory
- Run “truffle unbox pet-shop”

### Create adoption contract
- Inside the contract create an addresses[16] array because there are 16 pets
- Create a function called getAdopters that returns the array
- Create an adopt function that 
    1. Takes in a petId int that is public and returns integer
    2. Require that the number is between 0 and 16
    3. Then associate the array[petId] = msg.sender
    4. Return petId

### Create migration
- Run “truffle create migration DeployContract”
- Then go to the generated migration.
    1. Add “var Adoption = artifacts.require(‘./Adoption.sol') to the top of the file.
- Inside the module.exports add “_deployer.deploy(Adoption)”.

### Deploy Contract
- Run “truffle deploy”

### Create Tests
- Run “truffle create test adoption”
- Navigate to the generated test. 
- Try to understand and rewrite the tests referenced here.
- Run “truffle test”
- If all the tests pass proceed

### Modify App.js to create the UI
- First navigate to app.js
- Replace comments, with their equivalent here.
- Remember to init the wallet by adding “window.ethereum.enable();” some where in the initWeb3 function

### Config Your Network on Metamask
- Open browser and in the metamask extension add network.
- Copy the RPC url from ganache
- Your chain id is “1337” for truffle ganache
- Then save.

### Import Account
- Open metamask extension and click on account > import account
- Go to ganache and copy any account private key (key icon on the right)
- Paste to metamask

### Run the DAPP
- To run it “npm run dev”
