const { element, browser } = require("protractor");
const { __awaiter } = require("tslib");
var sql = require('mssql');
const { protractor } = require("protractor/built/ptor");

var Nme = "Qwerty";
var Phn = 9865326532;
var addr = "Vashi";
var sql = require('mssql');


describe('When on Login Page', function() 
{
    beforeEach(async function() 
    {
     await browser.get('http://localhost:4200');
    });
  
    it('should detect Patient button on next page',async function() 
    {
     await element(by.id('userName')).sendKeys("User");
     await element(by.id('password')).sendKeys("");
  
     await element(by.id('login')).click();
      var el =  await element(by.id('Patient'));
    await el.click();

    await element(by.id('pname')).sendKeys(Nme);
    await element(by.id('phone')).sendKeys(Phn);
    await element(by.id('address')).sendKeys(addr);
    await element(by.id('aim')).click();  
    await element(by.id('add')).click();
    //await browser.sleep(7000);
    var tabledata = element.all(by.css("table"));

// get rows 
var rows =  tabledata.all(by.tagName("tr"));

// get cell values
var cells =  rows.all(by.tagName("td"));

expect(cells.get(0).getText()).toEqual(Nme);
    
    //expect(await);
    });
    
})
// describe('test db connection', function () {
//   it('tests db connection', function (done) {
//       ConnectDB().then(function _onSuccess(_returned){
//           console.log(_returned.recordset[0].name)
  
//           done();
//       }).catch(function _onFailure(err){
//           done.fail(err);
//       })
//   })
// });
// function ConnectDB() {
//   return new Promise(function (fulfill, reject) {
//   var config = {
//       user: 'sa',
//       password: 'myPassw0rd',
//       server: 'localhost',
//       port: 1433,
//       database: 'HospitalManagement',

//       options: {
//           encrypt: true
//       }
// };
//   var connection = new sql.ConnectionPool(config);
//   connection.connect((err) => {
//       if (err) reject(err);

//   //});

//   let query = `select name from tblPatient where name like '${Nme}'`
//   connection.request()
//   .query(query, (err, recordeset) => {

//       console.dir('Record set: ' + recordeset)
//       console.dir('Err: ' + err)

//       if (err) reject(err);
//       else fulfill(recordeset);
//   });
// });

// });
// }