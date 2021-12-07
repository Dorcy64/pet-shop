var Adoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adoption", function (accounts) {
  let instance;
  before(async () => {
    instance = await Adoption.deployed();
  });

  it("User should adopt a pet", async function(){
    await instance.adopt.sendTransaction(8, {from: accounts[0]});
    let adopter = await instance.adopters.call(8);
    assert.equal(adopter, accounts[0], "Incorect owner address");
  });

  it("Should get back the id from array", async function(){
    let adopters = await instance.getAdopters.call();
    assert.equal(adopters[8], accounts[0], "The account id at index 8 should be eqault to accounts");
  });

  it("Should throw invalid if the input exceeds the perts number", async function(){
    // try{}
    try{
      await instance.adopt.sendTransaction(17, {from: accounts[0]});
      assert.fail(true, false, "This function did not throw");
      
    } catch(error){
      assert.include(String(error), "revert", `Expected revert but instead got ${error}`);
    }
  })

});
