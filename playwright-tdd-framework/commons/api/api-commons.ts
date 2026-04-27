import{test,expect,request} from '@playwright/test'
import  config from '../../config/config.json' with {type:'json'}


export class ApiCommons{
 
    
   private requestContext:any;
   private response:any;

   // methods to create the requestContext( adding baseurl, headers, authorization before sending the request)
   async InitializeRequestContext() {
    this.requestContext=await request.newContext({
        baseURL:config.api.baseurl,
        extraHTTPHeaders: {
            "Authorization":config.api.bearer_token,
            "Accept":"application/vnd.github+json",
            "X-GitHub-Api-Version":"2022-11-28"
        }

    })
    
   }

   //  common method to send the request and get the response
   async getResponse(requestType:string,endpoint:string,requestBody?:any){
     switch(requestType.toLowerCase()){
        case 'get': 
        this.response=await this.requestContext.get(endpoint);
        break;
        case 'post':
        this.response=await this.requestContext.post(endpoint, {data:requestBody});
        break;
        case 'put':
        this.response=this.requestContext.put(endpoint,{data:requestBody});
        break;
        case "patch":
        this.response=this.requestContext.patch(endpoint,{data:requestBody});
        break;
        case 'delete':
        this.response=this.requestContext.delete(endpoint);
        break;
        default:
        throw new error(`unsupported request type ${requestType}`);
        break;

     }

     // wait for 2 secs to get the response
       setTimeout(()=>{},2000);
       if(requestType.toLowerCase()!=='delete'){
        console.log(await this.response.json());
       } 
    }


// Method to validate the status code

async validateStatusCode(expectedstatusCode:number){
    const actualstatusCode=await this.response.status();
    expect(actualstatusCode).toBe(expectedstatusCode);

}

// Method to validate status message
async validateStatusMessage(expectedstatusMessage:string){
    const actualstatusMessage=await this.response.statusText();
    expect(actualstatusMessage).toBe(expectedstatusMessage);

}

// Method to validate the response body 
async validateresponseBody(key:string,expectValue:any){
    const responseBody=await this.response.json();
    const actualValue=responseBody[key.toLowerCase()];
    expect(actualValue).toBe(expectValue);
}

// Method to validate the response headers
async vaidateresponseHeader(headerkey:string,expectHeaderValue:string){
    const responseBody=this.response.headers();
    const actualHeaderValue=responseBody[headerkey.toLowerCase()];
    expect(actualHeaderValue.toBe(expectHeaderValue));
}

// Method to validate the schema of the response body 
async validateSchema(key:string,expectedType:object){
    const responseBody=this.response.json();
    const actualSchema=responseBody[key.toLowerCase()];
    const type =typeof actualSchema;
    expect(type).toBe(expectedType);
}

// Method to validate the cookie
async validateCookie(cookieName:string,expectedCookieValue:string){
    const cookies=this.response.cookies();
    const actualCookieValue=cookies[cookieName.toLowerCase()];
    expect(actualCookieValue).toBe(expectedCookieValue);
}








}