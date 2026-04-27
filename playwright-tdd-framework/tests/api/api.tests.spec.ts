import {test} from "@playwright/test";
import { ApiCommons } from "../../commons/api/api-commons.ts";
import testData from '../../testdata/api/data.json' with {type:'json'};

test.describe("API test",()=>{
 
  let apiCommons:ApiCommons;

 // method to prepare api request context before each and every test casw
   test.beforeEach(async()=>{
    apiCommons=new ApiCommons();
    await apiCommons.InitializeRequestContext();



   });
   //Test Case 1: Request to create duplicate repository with in github
   test("create a duplicate repo",async ()=>{
    const data=testData.duplicateRepo;
    await apiCommons.getResponse(data.requestType,data.endpoint,data.body);
    await apiCommons.validateStatusCode(data.expectedStatusCode);
    await apiCommons.validateStatusMessage(data.expectedstatusMessage);
    await apiCommons.validateresponseBody('message',data.expErrorMessage);



   });
    //Test Case 2: Request to create a valid repository in github
   test("create a valid repo",async()=>{
    const data=testData.validRepo;
    await apiCommons.getResponse(data.requestType,data.endpoint,data.body);
    await apiCommons.validateStatusCode(data.expectedStatusCode);
    await apiCommons.validateStatusMessage(data.expectedStatusMessage);
    await apiCommons.validateresponseBody("name",data.body.name);
   });

   //Test Case 3: Request to delete the repository created 
    test('Delete Repository', async () => {
        const data = testData.deleteRepo;
        await apiCommons.getResponse(data.requestType, data.endpoint);
        await apiCommons.validateStatusCode(data.expectedStatusCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
    });

});