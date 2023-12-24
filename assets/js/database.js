window.database = {
  
    
    "10-js-async-sleep-html": {
      "title": "JavaScript - Async sleep function",
      "category": "",
      "content": "JavaScript - Async sleep functionDefine the async functionconst sleep = async function(ms) {  return new Promise(function(res) {    setTimeout(function() {      res();    }, ms);  });};Using the async function(async function() {  while (true) {    console.log(new Date());    await sleep(1000);  }})();",
      "url": "/10-js-async-sleep.html",
      "href": "/10-js-async-sleep.html"
    }
    ,
  
    
    "10-js-copy-html": {
      "title": "JavaScript - Copy text in browser",
      "category": "",
      "content": "JavaScript - Copy text in browserThis uses ClipboardJS to copy without plugins or Flash.Include script:&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js\"&gt;&lt;/script&gt;In JavaScript, define a function that returns the text to be copied.// Uses event delegation (bubble up)var buttonCopy = new ClipboardJS(\"input[type=\\\"button\\\"][data-copytext]\", {    text: function(trigger) {        return trigger.getAttribute('data-copytext');    }});",
      "url": "/10-js-copy.html",
      "href": "/10-js-copy.html"
    }
    ,
  
    
    "10-js-download-html": {
      "title": "JavaScript - Download frontend file without server",
      "category": "",
      "content": "JavaScript - Download frontend file without serverSometimes you have string in the browser web page you want to download. You can make the string downloadable.const makeDownload = function(val, filename, contentType) {    if (!val || !filename || !contentType) {        return false;    }    const a = window.document.createElement('a');    a.href = window.URL.createObjectURL(new Blob([val], {type: contentType}));    a.download = filename;        document.body.appendChild(a);    a.click();    document.body.removeChild(a);    return true;};To call the function, pass in the data to download, filename, and content type.makeDownload(    \"First name,Last name,Email\\nJohn,Doe,john@example.com\\nJane,Doe,jane@example.com\",    \"filename.csv\",    \"text/csv\");Here is an example adding a listener to buttons.&lt;input type=\"button\" class=\"download\" data-content=\"Hello World!\" value=\"Download\" /&gt;document.querySelector(\"input[type=\\\"button\\\"].download\").addEventListener(\"click\", function(e) {    makeDownload(this.getAttribute(\"data-content\"), \"filename.txt\", \"text/plain\");});",
      "url": "/10-js-download.html",
      "href": "/10-js-download.html"
    }
    ,
  
    
    "10-js-s3-parse-html": {
      "title": "JavaScript - Parse Amazon S3 URLs",
      "category": "",
      "content": "JavaScript - Parse Amazon S3 URLsFunction to parse a variety of S3 URLs including various “virtual hosted-style” and “path style” S3 URLs.Using the function.const url = \"https://my-bucket.s3.us-west-2.amazonaws.com/puppy.png\";const s3 = parseS3Url(url);console.log(JSON.stringify(s3));Output.{  \"bucketName\": \"my-bucket\",  \"bucketRegion\": \"us-west-2\",  \"objectKey\": \"puppy.png\"}  Returns undefined if failed to parse.  If the URL does not include the object key, returns an empty string (\"\") for objectKey.  For S3 URL formats that do not include the bucket region, returns an empty string (\"\") for bucketRegion.Implementation.const parseS3Url = function(url) {  const s3UrlPatterns = [        // Virtual hosted-style        // https://my-bucket.s3.us-west-2.amazonaws.com/puppy.png    {regex: /^https?:\\/\\/([a-z0-9.\\-]+)\\.s3\\.([a-z0-9\\-]+)\\.amazonaws\\.com(\\.cn)?(\\/([^${}]*))?$/, captureGroupIndexes: {bucketName: 0, bucketRegion: 1, objectKey: 4}},    // https://jbarr-public.s3.amazonaws.com/images/ritchie_and_thompson_pdp11.jpeg    {regex: /^https?:\\/\\/([a-z0-9.\\-]+)\\.s3\\.amazonaws\\.com(\\.cn)?(\\/([^${}]*))?$/, captureGroupIndexes: {bucketName: 0, bucketRegion: -1, objectKey: 3}},    // https://awsmp-fulfillment-cf-templates-prod.s3-external-1.amazonaws.com/key    {regex: /^https?:\\/\\/([a-z0-9.\\-]+)\\.s3-[a-z0-9.\\-]+\\.amazonaws\\.com(\\.cn)?(\\/([^${}]*))?$/, captureGroupIndexes: {bucketName: 0, bucketRegion: -1, objectKey: 3}},        // Path styles        // https://s3.us-west-2.amazonaws.com/mybucket/puppy.jpg    {regex: /^https?:\\/\\/s3\\.([a-z0-9\\-]+)\\.amazonaws\\.com(\\.cn)?(\\/([^${}\\/]*)(\\/([^${}]*))?)?$/, captureGroupIndexes: {bucketName: 3, bucketRegion: 0, objectKey: 5}},    // https://s3.amazonaws.com/jsb-public/classic_amazon_door_desk.png    {regex: /^https?:\\/\\/s3\\.amazonaws\\.com(\\.cn)?(\\/([^${}\\/]*)(\\/([^${}]*))?)?$/, captureGroupIndexes: {bucketName: 2, bucketRegion: -1, objectKey: 4}},    // https://s3-us-east-2.amazonaws.com/jsb-public/classic_amazon_door_desk.png    {regex: /^https?:\\/\\/s3-([a-z0-9\\-]+)\\.amazonaws\\.com(\\.cn)?(\\/([^${}\\/]*)(\\/([^${}]*))?)?$/, captureGroupIndexes: {bucketName: 3, bucketRegion: 0, objectKey: 5}}  ];  const offset = 1; // Results of match will include str input at first index followed by each capturing group  for (const pattern of s3UrlPatterns) {    const matched = url.match(pattern.regex);    if (matched) {      const arr = [...matched];      const result = {};      // Build returned object      for (const [key, value] of Object.entries(pattern.captureGroupIndexes)) {        // Set to \"\" for not explicitly found or if capture group is nested in another capture group not captured        result[key] = value == -1 || !arr[offset + value] ? \"\" : arr[offset + value];      }      return result;    }  }  return undefined;};",
      "url": "/10-js-s3-parse.html",
      "href": "/10-js-s3-parse.html"
    }
    ,
  
    
    "10-js-tampermonkey-observe-and-apply-html": {
      "title": "JavaScript - Tampermonkey script to observe changes on a page and edit it",
      "category": "",
      "content": "JavaScript - Tampermonkey script to observe changes on a page and edit itThe following example is Tampermonkey adds event listeners to elements in a page and also recurses into new iframes.After installing the script, visit Google Search and search for “test” keyword to see source titles specified in script turned red.Ensure to change data-added-makethisunique to something else. For example, data-added-somethingelseunique. This ensures the mutation observers are not added twice.// ==UserScript==// @name         Turn certain Google search result source title red.// @namespace    http://tampermonkey.net/// @version      0.1// @description  Adds event listener to elements in a page and also recurses into new iframes.// @author       me@josephshih.com// @match        https://www.google.com/search?*// @grant        none// ==/UserScript==(function() {    const titlesToTurnRed = [        \"Dictionary.com\",        \"Fast.com\",        \"Wikipedia\"    ];    const attrName = \"data-added-makethisunique\";    const doSomething = function(element) {        [...element.querySelectorAll('span')].forEach(function(span, index) {            if (titlesToTurnRed.indexOf(span.textContent.trim()) == -1) {                return;            }            span.style.color = \"red\";        });    };    const addListenersToDocumentOnce = function(doc) {        if (!doc || !doc.body || doc.body.getAttribute(attrName)) {            return;        }        doc.body.setAttribute(attrName, \"1\");        addMutationObserver(doc.body, \"div#search\", function(mutation) {            doSomething(mutation.target);        });        addMutationObserver(doc.body, \"iframe\", function(mutation) {            if (mutation.target.tagName == \"IFRAME\") {                addListenersToDocumentOnce(mutation.target.contentDocument);            }        });        console.log(\"Added listener to document:\", doc);    };    const addMutationObserver = function(containerToObserve, matchesStr, callback) {        const observer = new MutationObserver(function(mutationList, observer) {            for (const mutation of mutationList) {                if (mutation.target.matches(matchesStr)) {                    callback(mutation);                }            }        });        observer.observe(containerToObserve, {attributes: true, childList: true, subtree: true});    };    // Run on load    doSomething(document);    // Run on mutations    addListenersToDocumentOnce(document);})();",
      "url": "/10-js-tampermonkey-observe-and-apply.html",
      "href": "/10-js-tampermonkey-observe-and-apply.html"
    }
    ,
  
    
    "15-nodejs-aws-dynamodb-html": {
      "title": "Node.js - DynamoDB examples within async functions",
      "category": "",
      "content": "Node.js - DynamoDB examples within async functionsThe following examples uses a hash key attr1 and a range key attr2.A simple get example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let getResult;  try {        getResult = await documentClient.get({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      ConsistentRead: false,      ReturnConsumedCapacity: \"NONE\"    }).promise();      } catch (e) {        console.error(`Could not get from DynamoDB: ${e.message}`);    return;      }      // Empty? (getResult = {})  if (!getResult || !getResult.Item) {    console.log(`No item found:`, JSON.stringify(getResult));    return;  }    // Print  console.log(`attr1: ${getResult.Item[\"attr1\"]} and attr2: ${getResult.Item[\"attr2\"]}`);  })();A simple scan example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let scanResult;  try {        scanResult = await documentClient.scan({      TableName: \"TABLE_NAME\",      Limit: 1000,      ConsistentRead: false,      ReturnConsumedCapacity: \"NONE\"    }).promise();      } catch (e) {        console.error(`Could not get from DynamoDB: ${e.message}`);    return;      }    // Empty?  if (!scanResult || !Array.isArray(scanResult.Items) || scanResult.Items.length == 0) {    console.log(`No items in scan result:`, JSON.stringify(scanResult));    return;  }    // Print all  for (const item of scanResult.Items) {    console.log(`attr1: ${item[\"attr1\"]} and attr2: ${item[\"attr2\"]}`);  }  })();A simple query example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let queryResult;  try {        queryResult = await documentClient.query({      TableName: \"TABLE_NAME\",      ConsistentRead: false,      ExpressionAttributeNames: {        \"#attr1\": \"attr1\" // Assign attribute names to #varname      },      ExpressionAttributeValues: {        \":attr1\": \"val1\" // Assign attribute value to :varname      },      KeyConditionExpression: \"#attr1 = :attr1\", // Use #varname and :varname      ProjectionExpression: \"attr1,attr2\",      ReturnConsumedCapacity: \"NONE\",      ScanIndexForward: false    }).promise();      } catch (e) {        console.error(`Could not query DynamoDB: ${e.message}`);    return;      }      // Empty?  if (!queryResult || !Array.isArray(queryResult.Items) || queryResult.Items.length == 0) {    console.log(`No items in query result:`, JSON.stringify(queryResult));    return;  }    // Print all  for (const item of queryResult.Items) {    console.log(`attr1: ${item[\"attr1\"]} and attr2: ${item[\"attr2\"]}`);  }  })();Another query example using a secondary index within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let queryResult;  try {        queryResult = await documentClient.query({      TableName: \"TABLE_NAME\",      IndexName: \"INDEX_NAME\",      ConsistentRead: false,      ExpressionAttributeNames: {        \"#attr1\": \"attr1\" // Assign attribute names to #varname      },      ExpressionAttributeValues: {        \":attr1\": \"val1\" // Assign attribute value to :varname      },      KeyConditionExpression: \"#attr1 = :attr1\", // Use #varname and :varname      ProjectionExpression: \"attr1,attr2\",      ReturnConsumedCapacity: \"NONE\",      ScanIndexForward: false    }).promise();      } catch (e) {        console.error(`Could not query DynamoDB: ${e.message}`);    return;      }      // Empty?  if (!queryResult || !Array.isArray(queryResult.Items) || queryResult.Items.length == 0) {    console.log(`No items in query result:`, JSON.stringify(queryResult));    return;  }    // Print all  for (const item of queryResult.Items) {    console.log(`attr1: ${item[\"attr1\"]} and attr2: ${item[\"attr2\"]}`);  }  })();Single write example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.put({      TableName: \"TABLE_NAME\",      Item: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      }    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Batch write example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.batchWrite({      RequestItems: {        \"TABLE_NAME\": [          {            PutRequest: {              Item: {                \"attr1\": \"val1\",                \"attr2\": \"val2\"              }            }          },          {            PutRequest: {              Item: {                \"attr1\": \"val1\",                \"attr2\": \"val2\"              }            }          },          {            DeleteRequest: {              Key: {                \"attr1\": \"val1\"              }            }          }        ]      },      ReturnConsumedCapacity: \"NONE\",      ReturnItemCollectionMetrics: \"NONE\"    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Single update example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.update({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      UpdateExpression: 'set #a = :x + :y',      ConditionExpression: '#a &lt; :MAX',      ExpressionAttributeNames: {'#a' : 'Sum'},      ExpressionAttributeValues: {        ':x' : 20,        ':y' : 45,        ':MAX' : 100,      }    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Delete example(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.delete({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      ReturnConsumedCapacity: \"NONE\",      ReturnItemCollectionMetrics: \"NONE\",      ReturnValues: \"NONE\"    }).promise();          console.log(\"Deleted from DynamoDB\");      } catch (e) {        console.error(`Could not delete from DynamoDB: ${e.message}`);    return;      }  })();",
      "url": "/15-nodejs-aws-dynamodb.html",
      "href": "/15-nodejs-aws-dynamodb.html"
    }
    ,
  
    
    "15-nodejs-aws-invoke-lambda-html": {
      "title": "Node.js - Invoke Lambda function examples",
      "category": "",
      "content": "Node.js - Invoke Lambda function examplesInvoke a syncronous Lambda function.(async function() {    const AWS = require(\"aws-sdk\");  const lambda = new AWS.Lambda({region: \"us-east-1\"});    let invokeResult;  try {        invokeResult = await lambda.invoke({      FunctionName: \"FUNCTION_ARN\",      InvocationType: \"RequestResponse\",      Payload: JSON.stringify({        \"key\": \"val\"      })    }).promise();      } catch (e) {        console.error(`Could not invoke Lambda function: ${e.message}`);      }    console.log(`Invoke responded with status code: ${invokeResult.StatusCode.toString()}, payload: ${invokeResult.Payload.toString(\"utf8\")}, and function error: ${invokeResult.FunctionError}`);  })();Invoke an asyncronous Lambda function.(async function() {    const AWS = require(\"aws-sdk\");  const lambda = new AWS.Lambda({region: \"us-east-1\"});    try {        await lambda.invoke({      FunctionName: \"FUNCTION_ARN\",      InvocationType: \"Event\",      Payload: JSON.stringify({        \"key\": \"val\"      })    }).promise();          console.log(`Invoked Lambda function`);      } catch (e) {        console.error(`Could not invoke Lambda function: ${e.message}`);      }  })();```",
      "url": "/15-nodejs-aws-invoke-lambda.html",
      "href": "/15-nodejs-aws-invoke-lambda.html"
    }
    ,
  
    
    "15-nodejs-aws-s3-html": {
      "title": "Node.js - S3 examples within async functions",
      "category": "",
      "content": "Node.js - S3 examples within async functionsA simple get object example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const s3 = new AWS.S3();    let results;  try {        const s3Result = await s3.getObject({      Bucket: \"bucketname\",      Key: \"key\"    }).promise();    results = s3Result.Body.toString(\"utf8\");      } catch (e) {        console.error(`Could not retrieve from S3: ${e.message}`);    results = \"\";      }  console.log(results);  })();Put object example.(async function() {    const AWS = require(\"aws-sdk\");  const s3 = new AWS.S3();    try {        await s3.putObject({      Body: \"Some text\",      Bucket: \"bucketname\",      Key: \"key\",      ContentType: \"text/plain\"    }).promise();        console.log(\"Saved to S3\");      } catch (e) {        console.error(`Could not save to S3: ${e.message}`);      }  })();List objects example.(async function() {    const AWS = require(\"aws-sdk\");  const s3 = new AWS.S3();    try {        const data = await s3.listObjects({      Bucket: \"bucketname\",      MaxKeys: 1000,      Prefix: \"\"    }).promise();        console.log(`Listing ${data.Contents.length} object(s) in bucket with prefix`);    for (const object of data.Contents) {      console.log(object.Key);    }      } catch (e) {        console.error(`Could not list objects: ${e.message}`);      }  })();Delete object example.(async function() {    const AWS = require(\"aws-sdk\");  const s3 = new AWS.S3();    try {        await s3.deleteObject({      Bucket: \"bucketname\",      Key: \"key\"    }).promise();        console.log(\"Deleted object in S3\");      } catch (e) {        console.error(`Could not delete object in S3: ${e.message}`);      }  })();",
      "url": "/15-nodejs-aws-s3.html",
      "href": "/15-nodejs-aws-s3.html"
    }
    ,
  
    
    "15-nodejs-aws-signature-version-4-html": {
      "title": "Node.js - Calling AWS service endpoints and signing with AWS Signature Version 4",
      "category": "",
      "content": "Node.js - Calling AWS service endpoints and signing with AWS Signature Version 4Example of using Node.js to call AWS service endpoints and signing the API request with AWS Signature Version 4.Note that this example uses the temporary AWS credentials provided by an IAM role for Amazon EC2.Create a file example.js with the following content and replace the example values at the top.const HOST = \"catalog.marketplace.us-east-1.amazonaws.com\";const REGION = \"us-east-1\";const SERVICE_NAME = \"aws-marketplace\";const METHOD = \"POST\";const PATH = \"/StartChangeSet\";const PAYLOAD = `{  \"Catalog\": \"AWSMarketplace\",  \"ChangeSet\": [    {      \"ChangeType\": \"UpdateInformation\",      \"Entity\": {        \"Identifier\": \"prod-example123\",        \"Type\": \"ContainerProduct@1.0\"      },      \"DetailsDocument\": {        \"ProductTitle\": \"My new title\",        \"ShortDescription\": \"My new description.\",        \"LongDescription\": \"My new long description.\"      }    }  ]}`;const sendRequest = async function(url, opt) {  opt = opt ? opt : {};  const parsedUrl = require(\"url\").parse(url);  let headers = opt.headers ? opt.headers : {};  headers[\"Content-length\"] = opt.body ? opt.body.length : 0;  const options = {    hostname: parsedUrl.hostname,    port: opt.port ? opt.port : (parsedUrl.protocol == \"https:\" ? 443 : 80),    path: parsedUrl.path,    method: opt.method ? opt.method : \"GET\",    headers: headers  };  let response = await new Promise(function(res, err) {    const proto = parsedUrl.protocol == \"https:\" ? require(\"https\") : require(\"http\");    let request = proto.request(options, function(response) {      let responseText = [];      response.on(\"data\", function(d) {        responseText.push(d);      });      response.on(\"end\", function() {        response.responseText = responseText.join(\"\");        res(response);      });    });    request.on(\"error\", function(error) {      console.error(\"sendRequest Error: \" + error);      err(error);    });    request.write(opt.body ? opt.body : \"\");    request.end();  });  return response;};/*  Return:  {    \"Code\": \"Success\",    \"LastUpdated\": \"2022-09-26T19:14:08Z\",    \"Type\": \"AWS-HMAC\",    \"AccessKeyId\": \"ASIAQVEXAMPLE12345\",    \"SecretAccessKey\": \"example12345\",    \"Token\": \"exampleToken12345\",    \"Expiration\": \"2022-09-27T01:37:12Z\"  }*/const getInstanceRole = async function() {  const endpoint = \"http://169.254.169.254/latest/meta-data/iam/security-credentials/\";  const roleName = (await sendRequest(endpoint)).responseText;  const json = (await sendRequest(endpoint + \"/\" + roleName)).responseText;  const creds = JSON.parse(json);  return creds;};/*  headers =  {    \"Host\": \"iam.amazonaws.com\",    \"Content-Type\": \"application/x-www-form-urlencoded; charset=utf-8\",    \"My-header1\": \"    a   b   c\",    \"X-Amz-Date\": \"20150830T123600Z\",    \"My-Header2\": \"    \\\"a   b   c\\\"  \"  }  Return:  {    \"content-type\": \"application/x-www-form-urlencoded; charset=utf-8\",    \"host\": \"iam.amazonaws.com\",    \"my-header1\": \"a b c\",    \"my-header2\": \"\\\"a b c\\\"\",    \"x-amz-date\": \"20150830T123600Z\"  }*/const getCanonicalHeaders = function(headers) {  let unsorted = {};  for (const k in headers) {    unsorted[k.trim().toLowerCase()] = headers[k].trim().replace(/\\s+/g, \" \");  }  const sortedKeys = Object.keys(unsorted).sort();  let sorted = {};  for (const k of sortedKeys) {    sorted[k] = unsorted[k];  }  return sorted;};/*  path =     \"/DescribeEntity?entityId=EntityId&amp;catalog=Catalog\"  Return:    \"catalog=Catalog&amp;entityId=EntityId\"  path =    \"/ListEntities\"  Return:     \"\"*/const getCanonicalQueryStringFromPath = function(path) {  const ii = path.trim().indexOf(\"?\");  if (ii == -1 || ii + 1 == path.length) {    return \"\";  }  const params = path.substr(ii + 1).split(\"&amp;\");  params.sort();  return params.join(\"&amp;\");};// https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.htmlconst createCanonicalRequest = function(method, path, host, headers, payload) {    const pathNoQueryString = path.split(\"?\")[0];  const queryString = getCanonicalQueryStringFromPath(path);  const canonicalHeaders = getCanonicalHeaders(headers);  const canonicalHeadersString = Object.keys(canonicalHeaders).map(function(k) {    return `${k}:${canonicalHeaders[k]}`;  }).join(\"\\n\") + \"\\n\";  const signedHeaders = Object.keys(canonicalHeaders).join(\";\");    const crypto = require(\"crypto\");  const payloadHashHex = crypto.createHash(\"sha256\").update(payload).digest(\"hex\").toLowerCase();    const canonicalRequest =    method + \"\\n\" +    pathNoQueryString + \"\\n\" +    queryString + \"\\n\" +    canonicalHeadersString + \"\\n\" +    signedHeaders + \"\\n\" +    payloadHashHex;    return canonicalRequest;};const hashCanonicalRequest = function(canonicalRequest) {    const crypto = require(\"crypto\");  const canonicalHashHex = crypto.createHash(\"sha256\").update(canonicalRequest).digest(\"hex\").toLowerCase();    return canonicalHashHex;};// https://docs.aws.amazon.com/general/latest/gr/sigv4-create-string-to-sign.htmlconst createStringToSign = function(date, region, serviceName, hashedCanonicalRequest) {  const algo = \"AWS4-HMAC-SHA256\";  const yyyymmddthhmmssz = date.toISOString().split(\".\")[0].replace(/[\\-:]/g, \"\") + \"Z\";  const yyyymmdd = date.toISOString().split(\"T\")[0].replace(/-/g, \"\");  const credentialScope = `${yyyymmdd}/${region}/${serviceName}/aws4_request`;    const str =    algo + \"\\n\" +    yyyymmddthhmmssz + \"\\n\" +    credentialScope + \"\\n\" +    hashedCanonicalRequest;      return str;};// https://docs.aws.amazon.com/general/latest/gr/sigv4-calculate-signature.htmlconst calculateSignature = function(secretKey, date, region, serviceName, stringToSign) {  const crypto = require(\"crypto\");  const yyyymmdd = date.toISOString().split(\"T\")[0].replace(/-/g, \"\");  const kDate = crypto.createHmac(\"sha256\", \"AWS4\" + secretKey).update(yyyymmdd).digest();  const kRegion = crypto.createHmac(\"sha256\", kDate).update(region).digest();  const kService = crypto.createHmac(\"sha256\", kRegion).update(serviceName).digest();  const kSigning = crypto.createHmac(\"sha256\", kService).update(\"aws4_request\").digest();  const signature = crypto.createHmac(\"sha256\", kSigning).update(stringToSign).digest(\"hex\");  return signature;};// https://docs.aws.amazon.com/general/latest/gr/sigv4-add-signature-to-request.htmlconst createAuthorizationHeader = function(accessKeyId, date, region, serviceName, headers, signature) {  const algo = \"AWS4-HMAC-SHA256\";  const yyyymmdd = date.toISOString().split(\"T\")[0].replace(/-/g, \"\");  const canonicalHeaders = getCanonicalHeaders(headers);  const signedHeaders = Object.keys(canonicalHeaders).join(\";\");  const authorization = `${algo} Credential=${accessKeyId}/${yyyymmdd}/${region}/${serviceName}/aws4_request, SignedHeaders=${signedHeaders}, Signature=${signature}`;  return authorization;};(async function(){  const creds = await getInstanceRole();  const date = new Date();  const yyyymmddthhmmssz = date.toISOString().split(\".\")[0].replace(/[\\-:]/g, \"\") + \"Z\";  let headers = {    \"Host\": HOST,    \"X-Amz-Date\": yyyymmddthhmmssz,    \"X-Amz-Security-Token\": creds.Token  };    const canonicalRequest = createCanonicalRequest(METHOD, PATH, HOST, headers, PAYLOAD);    const hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);    const stringToSign = createStringToSign(date, REGION, SERVICE_NAME, hashedCanonicalRequest);    const signature = calculateSignature(creds.SecretAccessKey, date, REGION, SERVICE_NAME, stringToSign);    const authorization = createAuthorizationHeader(creds.AccessKeyId, date, REGION, SERVICE_NAME, headers, signature);  headers[\"Authorization\"] = authorization;    const res = await sendRequest(`https://${HOST}${PATH}`, {    method: METHOD,    body: PAYLOAD,    headers: headers  });    try {    const json = JSON.parse(res.responseText);    console.log(JSON.stringify(json, undefined, 2));  } catch (e) {    console.log(e.message, res);  }  })();Execute using Node.js in BASH.node example.js",
      "url": "/15-nodejs-aws-signature-version-4.html",
      "href": "/15-nodejs-aws-signature-version-4.html"
    }
    ,
  
    
    "15-nodejs-random-id-html": {
      "title": "Node.js - Generate random IDs",
      "category": "",
      "content": "Node.js - Generate random IDsThe following example uses the built-in crypto library.const crypto = require('crypto');const id = crypto.randomBytes(8).toString(\"hex\");console.log(id);",
      "url": "/15-nodejs-random-id.html",
      "href": "/15-nodejs-random-id.html"
    }
    ,
  
    
    "15-nodejs-web-request-html": {
      "title": "Node.js - Simple HTTP web request for GET and POST",
      "category": "",
      "content": "Node.js - Simple HTTP web request for GET and POSTA simple asyncronous Node.js script for sending HTTP requests.// Web requestconst sendRequest = async function(url, opt) {  opt = opt ? opt : {};  const parsedUrl = require(\"url\").parse(url);  let headers = opt.headers ? opt.headers : {};  headers[\"Content-length\"] = opt.body ? opt.body.length : 0;  const options = {    hostname: parsedUrl.hostname,    port: opt.port ? opt.port : (parsedUrl.protocol == \"https:\" ? 443 : 80),    path: parsedUrl.path,    method: opt.method ? opt.method : \"GET\",    headers: headers  };  let response = await new Promise(function(res, err) {    let request = require(parsedUrl.protocol == \"https:\" ? \"https\" : \"http\").request(options, function(response) {      let responseText = [];      response.on(\"data\", function(d) {        responseText.push(d);      });      response.on(\"end\", function() {        response.responseText = responseText.join(\"\");        res(response);      });    });    request.on(\"error\", function(error) {      console.error(\"sendRequest Error: \" + error);      err(error);    });    request.write(opt.body ? opt.body : \"\");    request.end();  });  return response;};Simple use within an async function.(async function() {    const res = await sendRequest(\"https://example.com\");    console.log(res.responseText);  })();More options.(async function() {    const res = await sendRequest(\"http://example.com\", {    headers: {      Key: \"Value\"    },    port: 8000,    method: \"POST\",    body: \"Some payload\"  });    console.log(res.responseText);  })();",
      "url": "/15-nodejs-web-request.html",
      "href": "/15-nodejs-web-request.html"
    }
    ,
  
    
    "20-bash-aws-cloudshell-docker-html": {
      "title": "Bash - Run Docker in AWS CloudShell",
      "category": "",
      "content": "Run Docker in AWS CloudShellOpen AWS CloudShell.Run the following command to install and run Docker daemon in background.sudo yum update -y;sudo amazon-linux-extras install -y docker;echo $(nohup sudo dockerd &gt; /tmp/dockerd.log 2&gt;&amp;1 &amp;);To find process ID number.pgrep -a dockerd;To kill process, append the process ID number and run.sudo kill ",
      "url": "/20-bash-aws-cloudshell-docker.html",
      "href": "/20-bash-aws-cloudshell-docker.html"
    }
    ,
  
    
    "20-bash-boot-script-html": {
      "title": "Bash - Boot script - Run script on reboot (auto restart) or on a schedule",
      "category": "",
      "content": "Bash - Boot script - Run script on reboot (auto restart) or on a scheduleEdit to /etc/crontab file.sudo vim /etc/crontabAdd @reboot followed by the user to run and the script.@reboot ubuntu /home/ubuntu/my_script.shYou can also add the above line into the crontab directory /etc/cron.d/ (do not use filename extension)The following runs a script at the top of every hour.sudo bash -c \"echo '0 * * * * ubuntu /home/ubuntu/my_script.sh' &gt; /etc/cron.d/myScript\";",
      "url": "/20-bash-boot-script.html",
      "href": "/20-bash-boot-script.html"
    }
    ,
  
    
    "20-bash-checksum-html": {
      "title": "Bash - Checksum (SHA, MD5)",
      "category": "",
      "content": "Bash - Checksums (SHA, MD5)SHA Checksumsshasum text.txtorecho -n \"Hello world!\" | shasumMD5 Checksumsmd5sum text.txtorecho -n \"Hello world!\" | md5sum",
      "url": "/20-bash-checksum.html",
      "href": "/20-bash-checksum.html"
    }
    ,
  
    
    "20-bash-compress-tar-html": {
      "title": "Bash - Tar and Un-tar (.tar.gz or .tgz)",
      "category": "",
      "content": "Bash - Tar and Un-tar (.tar.gz or .tgz)CompressEntire Directory or a Single Filetar -czvf name-of-archive.tar.gz /path/to/directory-or-file-c Create an archive.-z Compress the archive with gzip.-v Verbose-f Specify the filename of the archive.Un-compress / De-compress / Extract an ArchiveThe following command will extract the contents of archive.tar.gz to the current directory.tar -xzvf archive.tar.gz-x This specifies you want to extract an archive instead of create one.tar -xzvf archive.tar.gz -C /tmp-C Extract to specific directory",
      "url": "/20-bash-compress-tar.html",
      "href": "/20-bash-compress-tar.html"
    }
    ,
  
    
    "20-bash-date-html": {
      "title": "Bash - Date and timestamps",
      "category": "",
      "content": "Bash - Date and timestampsPrint current datedateWed Aug  5 01:01:41 UTC 2018Print current timestampdate +%s1549024740Convert timestamp to date:date -d @1549024740Results: Fri Feb  1 12:39:00 UTC 2019",
      "url": "/20-bash-date.html",
      "href": "/20-bash-date.html"
    }
    ,
  
    
    "20-bash-here-docs-html": {
      "title": "Bash - Heredocs",
      "category": "",
      "content": "Bash - Heredocshttps://tldp.org/LDP/abs/html/here-docs.htmlcat &gt; hello.txt &lt;&lt; EOFHello WorldEOFQuote the delimeter to prevent parameter and variable expansion, command substitution, arithmetic expansion, or pathname expansion.cat &gt; hello.txt &lt;&lt; \"EOF\"Hello WorldEOF",
      "url": "/20-bash-here-docs.html",
      "href": "/20-bash-here-docs.html"
    }
    ,
  
    
    "20-bash-kubernetes-install-html": {
      "title": "Bash - Install helm, kubectl, and eksctl if not already installed",
      "category": "",
      "content": "Bash - Install helm, kubectl, and eksctl if not already installedInstall common command-lind tools to interact with Kubernetes clusters and Amazon EKS if the environment doesn’t already have it.Install kubectlInstall the latest amd64 version of kubectl for managing Kubernetes 1.23 clusters if not installed:if which kubectl &gt;/dev/null 2&gt;&amp;1; then  echo \"kubectl installed\";else  echo \"kubectl not installed. Installing...\";  curl -o kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.23.7/2022-06-29/bin/linux/amd64/kubectlfi;For more info or other versions, see Installing or updating kubectl in the Amazon EKS User Guide.Install helmInstall the latest version of helm for deploying container applications to Kubernetes if not installed:if which helm &gt;/dev/null 2&gt;&amp;1; then  echo \"helm installed\";else  echo \"helm not installed. Installing...\";  sudo yum install -y openssl \\  &amp;&amp; curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 \\  &amp;&amp; chmod 700 get_helm.sh \\  &amp;&amp; ./get_helm.sh;fi;For more info or other versions, see Installing Helm in the official HELM Docs.Install eksctlInstall the latest version of eksctl for making it easier to manage Kubernetes clusters running on Amazon EKS if not installed:if which eksctl &gt;/dev/null 2&gt;&amp;1; then  echo \"eksctl installed\";else  echo \"eksctl not installed. Installing...\";  curl --silent --location \"https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz\" | tar xz -C /tmp  sudo mv /tmp/eksctl /usr/local/binfi;For more info or other versions, see Installing or updating eksctl in the Amazon EKS User Guide.Install allInstall the latest version of any of the above that are not installed:# kubctlif which kubectl &gt;/dev/null 2&gt;&amp;1; then  echo \"kubectl installed\";else  echo \"kubectl not installed. Installing...\";  curl -o kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.23.7/2022-06-29/bin/linux/amd64/kubectlfi;# helmif which helm &gt;/dev/null 2&gt;&amp;1; then  echo \"helm installed\";else  echo \"helm not installed. Installing...\";  sudo yum install -y openssl \\  &amp;&amp; curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 \\  &amp;&amp; chmod 700 get_helm.sh \\  &amp;&amp; ./get_helm.sh;fi;# eksctlif which eksctl &gt;/dev/null 2&gt;&amp;1; then  echo \"eksctl installed\";else  echo \"eksctl not installed. Installing...\";  curl --silent --location \"https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz\" | tar xz -C /tmp  sudo mv /tmp/eksctl /usr/local/binfi;",
      "url": "/20-bash-kubernetes-install.html",
      "href": "/20-bash-kubernetes-install.html"
    }
    ,
  
    
    "20-bash-mount-html": {
      "title": "Bash - Mount Disk and Drives",
      "category": "",
      "content": "Bash - Mount Disk and DrivesList diskssudo fdisk -lCreate foldersudo mkdir /tmpmountMountsudo mount /dev/sdb /tmpmountUnmountumount /dev/sdbAlternatively:umount /tmpmount",
      "url": "/20-bash-mount.html",
      "href": "/20-bash-mount.html"
    }
    ,
  
    
    "20-bash-rsync-html": {
      "title": "Bash - Rsync - Copy and sync files",
      "category": "",
      "content": "Bash - Rsync - Copy and sync filesCopyrsync -az $source $targetCopy over SSH:rsync -az $source ubuntu@1.1.1.1:$targetTrailing slash or notTrailing slash on destination directory has no effectCopy “hello.txt” file inside “bar” directory resulting in “bar/hello.txt”:rsync -az hello.txt barCopy “foo” directory inside “bar” directory resulting in “bar/foo”:rsync -az foo barCopy files of “foo/*” directory inside “bar” directory resulting in “bar/*”:rsync -az foo/ barSyncRemove files in destination not in source:rsync -az --delete foo/ barExclude filesrsync -az --delete \\  --exclude \".git\" \\  --exclude \".gitignore\" \\  foo/ \\  bar",
      "url": "/20-bash-rsync.html",
      "href": "/20-bash-rsync.html"
    }
    ,
  
    
    "20-bash-service-auto-start-on-reboot-html": {
      "title": "Bash - Service - Auto-start on reboot",
      "category": "",
      "content": "Bash - Service - Auto-start on rebootCheck if Service is RunningFor example, apache2 and httpd.sudo systemctl status apache2Check if Service is Auto-Started on Rebootsudo systemctl is-enabled apache2Enable Auto-Start of Service on Rebootsudo systemctl enable apache2Disable Auto-Start of Service on Rebootsudo systemctl disable apache2",
      "url": "/20-bash-service-auto-start-on-reboot.html",
      "href": "/20-bash-service-auto-start-on-reboot.html"
    }
    ,
  
    
    "20-bash-ssh-generate-public-key-html": {
      "title": "Bash - Generate SSH public key from private key",
      "category": "",
      "content": "Bash - Generate SSH public key from private keyssh-keygen -y -f ~/.ssh/id_rsa",
      "url": "/20-bash-ssh-generate-public-key.html",
      "href": "/20-bash-ssh-generate-public-key.html"
    }
    ,
  
    
    "20-bash-test-if-file-or-directory-exists-html": {
      "title": "Bash - Test if file or directory exists",
      "category": "",
      "content": "Test if file or directory existshttps://www.tldp.org/LDP/abs/html/fto.htmlCheck if regular file exists:if [ -f \"/path/to/file\" ]then  echo \"Exists\";fiCheck if not regular file (or does not exist):if [ ! -f \"/path/to/file\" ]then  echo \"Not file\";fiCheck if file is a directory:if [ -d \"/path/to/dir\" ]then  echo \"Exists\";fiCheck if file is not a directory (or does not exist):if [ ! -d \"/path/to/dir\" ]then  echo \"Not directory\";fi",
      "url": "/20-bash-test-if-file-or-directory-exists.html",
      "href": "/20-bash-test-if-file-or-directory-exists.html"
    }
    ,
  
    
    "20-bash-while-loop-html": {
      "title": "Bash - Infinite while loop",
      "category": "",
      "content": "Infinite while loopInfinite while loop:while :do  echo \"[CTRL+C] to break\"  sleep 1doneOne liner:while :; do echo \"[CTRL+C] to break\"; sleep 1; doneWith counter:ii=0;while :;do  ii=$(expr $ii + 1);  echo \"[CTRL+C] to break... ${ii}\"  sleep 1;done;Piping in text, one loop per line:ls | while read -r LINE;do  echo $LINE;done;Note: When pipe is is used, a subshell is used so values in parent shell will not be affected from within the loop",
      "url": "/20-bash-while-loop.html",
      "href": "/20-bash-while-loop.html"
    }
    ,
  
    
    "30-awscli-assume-role-html": {
      "title": "AWS CLI - Assume role",
      "category": "",
      "content": "AWS CLI - Assume roleBasicsrole_arn=\"arn:aws:iam::123456789012:role/example-role\";role_session_name=\"AWSCLI-Session\";“role_session_name” can be any stringGrab credentialsaws sts assume-role --role-arn \"$role_arn\" --role-session-name \"$role_session_name\";Create three environment variables to assume the IAM role.export AWS_ACCESS_KEY_ID=&lt;access-key-id&gt;;export AWS_SECRET_ACCESS_KEY=&lt;secret-access-key&gt;;export AWS_SESSION_TOKEN=&lt;session-token&gt;;Verify that you assumed the IAM role by running this command:aws sts get-caller-identity;Unset when done:unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN;Assume quickly using jqAssume:eval $(aws sts assume-role --role-arn \"$role_arn\" --role-session-name \"$role_session_name\" \\  | jq --raw-output '.Credentials | \"export AWS_ACCESS_KEY_ID=\\\"\" + .AccessKeyId + \"\\\"\", \"export AWS_SECRET_ACCESS_KEY=\\\"\" + .SecretAccessKey + \"\\\"\", \"export AWS_SESSION_TOKEN=\\\"\" + .SessionToken + \"\\\"\"');Un-assume:unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN;",
      "url": "/30-awscli-assume-role.html",
      "href": "/30-awscli-assume-role.html"
    }
    ,
  
    
    "30-awscli-docker-ecr-login-html": {
      "title": "AWS CLI - Log Docker client into Amazon Elastic Container Registry (Amazon ECR)",
      "category": "",
      "content": "AWS CLI - Log Docker client into Amazon Elastic Container Registry (Amazon ECR)Set region and get AWS account IDLogins are unique to each region.region=us-east-1;account_id=$(aws sts get-caller-identity --query Account --output text);Log inUsing AWS CLI &gt;= v1.17.10 or v2:aws ecr get-login-password --region ${region} \\  | sudo docker login --username AWS --password-stdin \\  ${account_id}.dkr.ecr.${region}.amazonaws.com;Using AWS CLI &lt; v1.17.10sudo $(aws ecr get-login --region ${region} --no-include-email --registry-ids ${account_id});--registry-ids ${account_id} is optional if same account.Create repository in Amazon ECRSet variable for repository name:region=us-east-1;repo_name=my-repo-name;Create repository:aws ecr --region ${region} create-repository --repository-name ${repo_name}Pull imagesudo docker pull ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush imageSet variable for locally built image and target repository name:image_name=my-image-name;repo_name=my-repo-name;Tag with full repository name:sudo docker tag ${image_name} ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush image to repository:sudo docker push ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestClean upDelete all images in repository and delete repository.# Delete all imagesaws ecr --region ${region} batch-delete-image \\  --repository-name ${repo_name} \\  --image-ids \"$(aws ecr --region ${region} list-images --repository-name ${repo_name} --query 'imageIds[*]';)\";# Delete repositoryaws ecr --region ${region} delete-repository --repository-name ${repo_name};",
      "url": "/30-awscli-docker-ecr-login.html",
      "href": "/30-awscli-docker-ecr-login.html"
    }
    ,
  
    
    "40-cfn-create-s3-files-html": {
      "title": "AWS CloudFormation - Use a template to dynamically create and save a file to an S3 bucket",
      "category": "",
      "content": "Use a template to dynamically create and save a file to an S3 bucketIn the following AWS CloudFormation template, it creates a public Amazon S3 bucket to host a web site, files for each of the web pages, and a custom Lambda function that saves those files to that S3 bucket.Create the following template in your working directly called template.yamlResources:  # Create a bucket with random name  S3Bucket:    Type: AWS::S3::Bucket    Properties:      WebsiteConfiguration:        ErrorDocument: not-found        IndexDocument: index.html      PublicAccessBlockConfiguration:        BlockPublicAcls: TRUE        BlockPublicPolicy: FALSE        IgnorePublicAcls: TRUE        RestrictPublicBuckets: FALSE  # Make bucket open to the web  S3BucketPolicy:    Type: AWS::S3::BucketPolicy    Properties:      Bucket: !Ref S3Bucket      PolicyDocument:        Statement:          - Effect: Allow            Principal: \"*\"            Action:              - \"s3:GetObject\"            Resource:              - !Sub \"${S3Bucket.Arn}/*\"  # Add a file for the home page  S3ContentHome:    Type: Custom::Lambda    Properties:      ServiceToken: !GetAtt S3ContentCustomResource.Arn      BucketName: !Ref S3Bucket      Key: index.html      ContentType: \"text/html\"      Body: |        &lt;!DOCTYPE html&gt;        &lt;html&gt;          &lt;head&gt;            &lt;title&gt;Home!&lt;/title&gt;            &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"&gt;          &lt;/head&gt;          &lt;body&gt;            &lt;h1&gt;Home!&lt;/h1&gt;            &lt;a href=\"/\"&gt;Home&lt;/a&gt; | &lt;a href=\"about-us\"&gt;About Us&lt;/a&gt;          &lt;/body&gt;        &lt;/html&gt;  # Add a file for the about-us page  S3ContentAboutUs:    Type: Custom::Lambda    Properties:      ServiceToken: !GetAtt S3ContentCustomResource.Arn      BucketName: !Ref S3Bucket      Key: about-us      ContentType: \"text/html\"      Body: |        &lt;!DOCTYPE html&gt;        &lt;html&gt;          &lt;head&gt;            &lt;title&gt;About Us!&lt;/title&gt;            &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"&gt;          &lt;/head&gt;          &lt;body&gt;            &lt;h1&gt;About Us!&lt;/h1&gt;            &lt;a href=\"/\"&gt;Home&lt;/a&gt; | &lt;a href=\"about-us\"&gt;About Us&lt;/a&gt;          &lt;/body&gt;        &lt;/html&gt;  # Add a file for the 404 page  S3ContentNotFound:    Type: Custom::Lambda    Properties:      ServiceToken: !GetAtt S3ContentCustomResource.Arn      BucketName: !Ref S3Bucket      Key: not-found      ContentType: \"text/html\"      Body: |        &lt;!DOCTYPE html&gt;        &lt;html&gt;          &lt;head&gt;            &lt;title&gt;Oops, not found!&lt;/title&gt;            &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"&gt;          &lt;/head&gt;          &lt;body&gt;            &lt;h1&gt;Oops, not found!&lt;/h1&gt;            &lt;a href=\"/\"&gt;&amp;laquo; Go back home&lt;/a&gt;          &lt;/body&gt;        &lt;/html&gt;  # Custom Lambda function that creates an object in specified S3 bucket and prefix  S3ContentCustomResource:    Type: AWS::Lambda::Function    DependsOn: S3ContentCustomResourceLogGroup    Properties:      Code:         ZipFile: |          var AWS = require(\"aws-sdk\");          var s3 = new AWS.S3();          exports.handler = async function(event, context) {            console.log(\"REQUEST RECEIVED:\\n\" + JSON.stringify(event));            let responseStatus = \"FAILED\";            let responseData = {};            let physicalResourceId = event.ResourceProperties.Key;            // For Delete requests, delete object.            if (event.RequestType == \"Delete\") {              console.log(`Deleting s3://${event.ResourceProperties.BucketName}/${event.ResourceProperties.Key}`);              try {                await s3.deleteObject({                  Bucket: event.ResourceProperties.BucketName,                  Key: event.ResourceProperties.Key                }).promise();                responseStatus = \"SUCCESS\";                console.log(\"Deleted\");              } catch (e) {                console.error(`Failed to delete object: ${e.message}`);              }            } else {              const body = event.ResourceProperties.Body;              console.log(`Saving s3://${event.ResourceProperties.BucketName}/${event.ResourceProperties.Key}`);              try {                await s3.putObject({                  Body: body,                  Bucket: event.ResourceProperties.BucketName,                  Key: event.ResourceProperties.Key,                  ContentType: event.ResourceProperties.ContentType                }).promise();                console.log(\"Saved\");                responseData[\"BucketName\"] = event.ResourceProperties.BucketName;                responseData[\"Key\"] = event.ResourceProperties.Key;                responseData[\"ContentType\"] = event.ResourceProperties.ContentType;                responseStatus = \"SUCCESS\";              } catch (e) {                console.log(`Could not save to S3: ${e.message}`);              }            }            return await sendResponse(event, context, responseStatus, responseData, physicalResourceId);          };          // Send response to the pre-signed S3 URL           const sendResponse = async function(event, context, responseStatus, responseData, physicalResourceId) {            let responseBody = JSON.stringify({                Status: responseStatus,                Reason: \"See the details in CloudWatch Log Stream: \" + context.logStreamName,                PhysicalResourceId: physicalResourceId,                StackId: event.StackId,                RequestId: event.RequestId,                LogicalResourceId: event.LogicalResourceId,                Data: responseData            });            console.log(\"RESPONSE BODY:\\n\", responseBody);            await sendRequest(event.ResponseURL, {              method: \"PUT\",              body: responseBody            })          };          // Web request          const sendRequest = async function(url, opt) {            opt = opt ? opt : {};            const parsedUrl = require(\"url\").parse(url);            let headers = opt.headers ? opt.headers : {};            headers[\"Content-length\"] = opt.body ? opt.body.length : 0;            const options = {              hostname: parsedUrl.hostname,              port: opt.port ? opt.port : (parsedUrl.protocol == \"https:\" ? 443 : 80),              path: parsedUrl.path,              method: opt.method ? opt.method : \"GET\",              headers: headers            };            let response = await new Promise(function(res, err) {              let request = require(parsedUrl.protocol == \"https:\" ? \"https\" : \"http\").request(options, function(response) {                let responseText = [];                response.on(\"data\", function(d) {                  responseText.push(d);                });                response.on(\"end\", function() {                  response.responseText = responseText.join(\"\");                  res(response);                });              });              request.on(\"error\", function(error) {                console.error(\"sendRequest Error: \" + error);                err(error);              });              request.write(opt.body ? opt.body : \"\");              request.end();            });            return response;          };      FunctionName: !Sub \"${AWS::StackName}-S3ContentCustomResource\"      Handler: index.handler      Role: !GetAtt S3ContentCustomResourceRole.Arn      Runtime: nodejs16.x  # Role for custom Lambda function to log activity and put/delete objects in S3 bucket created in this template  S3ContentCustomResourceRole:    Type: AWS::IAM::Role    Properties:      AssumeRolePolicyDocument:        Version: 2012-10-17        Statement:          - Effect: Allow            Principal:              Service:                - lambda.amazonaws.com            Action:              - \"sts:AssumeRole\"      Policies:        - PolicyName: LambdaExecute          PolicyDocument:            Version: 2012-10-17            Statement:              - Effect: Allow                Action:                  - \"logs:CreateLogStream\"                  - \"logs:PutLogEvents\"                Resource:                  - !Sub \"arn:${AWS::Partition}:logs:${AWS::Region}:${AWS::AccountId}:log-group:/aws/lambda/${AWS::StackName}-S3ContentCustomResource*\"              - Effect: Allow                Action:                  - \"s3:PutObject\"                  - \"s3:DeleteObject\"                Resource: !Sub \"${S3Bucket.Arn}/*\"  # Log group for Lambda function  S3ContentCustomResourceLogGroup:    Type: AWS::Logs::LogGroup    Properties:      LogGroupName: !Sub \"/aws/lambda/${AWS::StackName}-S3ContentCustomResource\"      RetentionInDays: 7Outputs:  # URL of S3 bucket open to the web  HomeUrl:    Value: !Sub \"http://${S3Bucket}.s3-website-${AWS::Region}.amazonaws.com\"To deployaws cloudformation create-stack \\  --region us-east-1 \\  --stack-name test-s3-content \\  --template-body file://template.yaml \\  --capabilities CAPABILITY_IAM;To get URL to visitaws cloudformation describe-stacks \\  --region us-east-1 \\  --stack-name test-s3-content \\  --query 'Stacks[0].Outputs[0].OutputValue' \\  --output text;To deleteaws cloudformation delete-stack \\  --region us-east-1 \\  --stack-name test-s3-content;",
      "url": "/40-cfn-create-s3-files.html",
      "href": "/40-cfn-create-s3-files.html"
    }
    ,
  
    
    "40-cfn-dynamodb-html": {
      "title": "AWS CloudFormation - Create DynamoDB datrabase tables in your CloudFromation templates",
      "category": "",
      "content": "AWS CloudFormation - Create DynamoDB datrabase tables in your CloudFromation templatesExamples below include an auto delete if time is passed the UNIX seconds timestamp stored in the exp attribute, a number datatype.Example with one key, a hash key named attr1.Resources:  Table:    Type: AWS::DynamoDB::Table    Properties:      AttributeDefinitions:        - AttributeName: \"attr1\"          AttributeType: \"S\"      BillingMode: \"PAY_PER_REQUEST\"      KeySchema:        - AttributeName: \"attr1\"          KeyType: \"HASH\"      TableName: \"TABLE_NAME\"      TimeToLiveSpecification:        AttributeName: \"exp\"        Enabled: trueExample with two keys, a hash key named attr1 and a range key named attr2.Resources:  Table:    Type: AWS::DynamoDB::Table    Properties:      AttributeDefinitions:        - AttributeName: \"attr1\"          AttributeType: S        - AttributeName: \"attr2\"          AttributeType: S      BillingMode: \"PAY_PER_REQUEST\"      KeySchema:        - AttributeName: \"attr1\"          KeyType: HASH        - AttributeName: \"attr2\"          KeyType: RANGE      TableName: \"TABLE_NAME\"      TimeToLiveSpecification:        AttributeName: \"exp\"        Enabled: trueExample with secondary index (attr2 to attr1 is one-to-many)Resources:  Table:    Type: AWS::DynamoDB::Table    Properties:      AttributeDefinitions:        - AttributeName: \"attr1\"          AttributeType: S        - AttributeName: \"attr2\"          AttributeType: S      BillingMode: \"PAY_PER_REQUEST\"      GlobalSecondaryIndexes:        - IndexName: \"attr2Attr1\"          KeySchema:            - AttributeName: \"attr2\"              KeyType: HASH            - AttributeName: \"attr1\"              KeyType: RANGE          Projection:            NonKeyAttributes:              - \"fulfillmentUrl\"            ProjectionType: INCLUDE      KeySchema:        - AttributeName: \"attr1\"          KeyType: HASH      TableName: !Sub \"${AWS::StackName}-table\"",
      "url": "/40-cfn-dynamodb.html",
      "href": "/40-cfn-dynamodb.html"
    }
    ,
  
    
    "40-cfn-ssm-ami-html": {
      "title": "AWS CloudFormation - Use latest AMIs by dynamically referencing SSM Parameter Store in your CloudFromation templates",
      "category": "",
      "content": "Use latest AMIs by dynamically referencing SSM Parameter Store in your CloudFromation templatesCloudFormation templates with the following will select the latest AMI IDs directly from SSM Parameter store to deploy the instance.Adding inline in Resources of the templateResources:  Instance:     Type: AWS::EC2::Instance    Properties:      ImageId: '{{resolve:ssm:/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id}}'Adding in Parameters of the templateParameters:  ImageId:     Type: 'AWS::SSM::Parameter::Value&lt;AWS::EC2::Image::Id&gt;'    Default: '/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id'Resources:  Instance:     Type: 'AWS::EC2::Instance'    Properties:      ImageId: !Ref ImageIdLooking up the parameter using AWS CLI$ aws ssm get-parameter --name /aws/service/canonical/ubuntu/server/22.04/stable/current/amd64/hvm/ebs-gp2/ami-id{    \"Parameter\": {        \"Name\": \"/aws/service/canonical/ubuntu/server/22.04/stable/current/amd64/hvm/ebs-gp2/ami-id\",        \"Type\": \"String\",        \"Value\": \"ami-0c7217cdde317cfec\",        \"Version\": 44,        \"LastModifiedDate\": \"2023-12-07T03:47:04.175000+00:00\",        \"ARN\": \"arn:aws:ssm:us-east-1::parameter/aws/service/canonical/ubuntu/server/22.04/stable/current/amd64/hvm/ebs-gp2/ami-id\",        \"DataType\": \"aws:ec2:image\"    }}$ aws ssm get-parameter --name /aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id{    \"Parameter\": {        \"Name\": \"/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id\",        \"Type\": \"String\",        \"Value\": \"ami-0c9db8d36d76d38ed\",        \"Version\": 126,        \"LastModifiedDate\": \"2023-12-05T17:35:14.150000+00:00\",        \"ARN\": \"arn:aws:ssm:us-east-1::parameter/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id\",        \"DataType\": \"text\"    }}$ aws ssm get-parameter --name /aws/service/marketplace/prod-tdzx6newyhgcc/6.4.1-6-r13-on-debian-11{    \"Parameter\": {        \"Name\": \"/aws/service/marketplace/prod-tdzx6newyhgcc/6.4.1-6-r13-on-debian-11\",        \"Type\": \"String\",        \"Value\": \"ami-04e81d256e77d2116\",        \"Version\": 6,        \"LastModifiedDate\": \"2023-11-22T20:59:53.391000+00:00\",        \"ARN\": \"arn:aws:ssm:us-east-1::parameter/aws/service/marketplace/prod-tdzx6newyhgcc/6.4.1-6-r13-on-debian-11\",        \"DataType\": \"text\"    }}",
      "url": "/40-cfn-ssm-ami.html",
      "href": "/40-cfn-ssm-ami.html"
    }
    ,
  
    
      
    
      
    
      
    
    "": {
      "title": "Home - Hello world! | Programming, commands, and technical Notes",
      "category": "",
      "content": "# Programming, commands, and technical Notes## From a full-stack developerThis site is a collection of notes gathered over the years of building frontend and backend applications. Much of these commands or snippets are simple, straightforward, and sometimes often forgotten.Use the search bar for instant search.Many notes have yet to be added and will be added from time to time.",
      "url": "/",
      "href": "/"
    }
    
  
};
