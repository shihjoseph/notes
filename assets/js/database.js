window.database = {
  
    
    "10-js-copy-html": {
      "title": "JavaScript - Copy Text in Browser",
      "category": "",
      "content": "JavaScript - Copy Text in BrowserThis uses ClipboardJS to copy without plugins or Flash.Include script:&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js\"&gt;&lt;/script&gt;In JavaScript, define a function that returns the text to be copied.// Uses event delegation (bubble up)var buttonCopy = new ClipboardJS(\"input[type=\\\"button\\\"][data-copytext]\", {    text: function(trigger) {        return trigger.getAttribute('data-copytext');    }});",
      "url": "/10-js-copy.html",
      "href": "/10-js-copy.html"
    }
    ,
  
    
    "10-js-download-html": {
      "title": "JavaScript - Download Frontend File Without Server",
      "category": "",
      "content": "JavaScript - Download Frontend File Without ServerSometimes you have string in the browser web page you want to download. You can make the string downloadable.var makeDownload = function(val, filename, contentType) {    if (!val || !filename || !contentType) {        return;    }    var a = window.document.createElement('a');    a.href = window.URL.createObjectURL(new Blob([val], {type: contentType}));    a.download = filename;        document.body.appendChild(a);    a.click();    document.body.removeChild(a);};To call the function, pass in the data to download, filename, and content type.makeDownload(    \"First name,Last name,Email\\nJohn,Doe,john@example.com\\nJane,Doe,jane@example.com\",    \"filename.csv\",    \"text/csv\");Here is an example adding a listener to buttons.&lt;input type=\"button\" class=\"download\" data-content=\"Hello World!\" value=\"Download\" /&gt;document.querySelector(\"input[type=\\\"button\\\"].download\").addEventListener(\"click\", function(e) {    makeDownload(this.getAttribute(\"data-content\"), \"filename.txt\", \"text/plain\");});",
      "url": "/10-js-download.html",
      "href": "/10-js-download.html"
    }
    ,
  
    
    "15-nodejs-aws-dynamodb-html": {
      "title": "Node.js - DynamoDB examples within async functions",
      "category": "",
      "content": "Node.js - DynamoDB examples within async functionsThe following examples uses a hash key attr1 and a range key attr2.A simple get example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let getResult;  try {        getResult = await documentClient.get({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      ConsistentRead: false,      ReturnConsumedCapacity: \"NONE\"    }).promise();      } catch (e) {        console.error(`Could not get from DynamoDB: ${e.message}`);    return;      }      // Empty? (getResult = {})  if (!getResult || !getResult.Item) {    console.log(`No item found:`, JSON.stringify(getResult));    return;  }    // Print  console.log(`attr1: ${getResult.Item[\"attr1\"]} and attr2: ${getResult.Item[\"attr2\"]}`);  })();A simple scan example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let scanResult;  try {        scanResult = await documentClient.scan({      TableName: \"TABLE_NAME\",      Limit: 1000,      ConsistentRead: false,      ReturnConsumedCapacity: \"NONE\"    }).promise();      } catch (e) {        console.error(`Could not get from DynamoDB: ${e.message}`);    return;      }    if (!scanResult || !Array.isArray(scanResult.Items) || scanResult.Items.length == 0) {    console.log(`No items in scan result:`, JSON.stringify(scanResult));    response.body = JSON.stringify({      status: \"success\",      items: []    });    return response;  }    // Empty?  if (!scanResult || !Array.isArray(scanResult.Items) || scanResult.Items.length == 0) {    console.log(`No items in scan result:`, JSON.stringify(scanResult));    return;  }    // Print all  for (const item of scanResult.Items) {    console.log(`attr1: ${item[\"attr1\"]} and attr2: ${item[\"attr2\"]}`);  }  })();A simple query example within an async function.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    let queryResult;  try {        queryResult = await documentClient.query({      TableName: \"TABLE_NAME\",      ConsistentRead: false,      ExpressionAttributeNames: {        \"#attr1\": \"attr1\" // Assign attribute names to #varname      },      ExpressionAttributeValues: {        \":attr1\": \"val1\" // Assign attribute value to :varname      },      KeyConditionExpression: \"#attr1 = :attr1\", // Use #varname and :varname      ProjectionExpression: \"attr1,attr2\",      ReturnConsumedCapacity: \"NONE\",      ScanIndexForward: false    }).promise();      } catch (e) {        console.error(`Could not query DynamoDB: ${e.message}`);    return;      }      // Empty?  if (!queryResult || !Array.isArray(queryResult.Items) || queryResult.Items.length == 0) {    console.log(`No items in query result:`, JSON.stringify(queryResult));    return;  }    // Print all  for (const item of queryResult.Items) {    console.log(`attr1: ${item[\"attr1\"]} and attr2: ${item[\"attr2\"]}`);  }  })();Single write example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.put({      TableName: \"TABLE_NAME\",      Item: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      }    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Batch write example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.batchWrite({      RequestItems: {        \"TABLE_NAME\": [          {            PutRequest: {              Item: {                \"attr1\": \"val1\",                \"attr2\": \"val2\"              }            }          },          {            PutRequest: {              Item: {                \"attr1\": \"val1\",                \"attr2\": \"val2\"              }            }          }        ]      },      ReturnConsumedCapacity: \"NONE\",      ReturnItemCollectionMetrics: \"NONE\"    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Single update example.(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.update({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      UpdateExpression: 'set #a = :x + :y',      ConditionExpression: '#a &lt; :MAX',      ExpressionAttributeNames: {'#a' : 'Sum'},      ExpressionAttributeValues: {        ':x' : 20,        ':y' : 45,        ':MAX' : 100,      }    }).promise();          console.log(\"Saved to DynamoDB\");      } catch (e) {        console.error(`Could not save to DynamoDB: ${e.message}`);    return;      }  })();Delete example(async function() {    const AWS = require(\"aws-sdk\");  const documentClient = new AWS.DynamoDB.DocumentClient({region: \"us-east-1\"}); // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html    try {        await documentClient.delete({      TableName: \"TABLE_NAME\",      Key: {        \"attr1\": \"val1\",        \"attr2\": \"val2\"      },      ReturnConsumedCapacity: \"NONE\",      ReturnItemCollectionMetrics: \"NONE\",      ReturnValues: \"NONE\"    }).promise();          console.log(\"Deleted from DynamoDB\");      } catch (e) {        console.error(`Could not delete from DynamoDB: ${e.message}`);    return;      }  })();",
      "url": "/15-nodejs-aws-dynamodb.html",
      "href": "/15-nodejs-aws-dynamodb.html"
    }
    ,
  
    
    "15-nodejs-aws-invoke-lambda-html": {
      "title": "Node.js - Invoke Lambda functino examples",
      "category": "",
      "content": "Node.js - Invoke Lambda functino examplesInvoke a syncronous Lambda function.(async function() {    const AWS = require(\"aws-sdk\");  const lambda = new AWS.Lambda({region: \"us-east-1\"});    let invokeResult;  try {        invokeResult = await lambda.invoke({      FunctionName: \"FUNCTION_ARN\",      InvocationType: \"RequestResponse\",      Payload: JSON.stringify({        \"key\": \"val\"      })    }).promise();      } catch (e) {        console.error(`Could not invoke Lambda function: ${e.message}`);      }    console.log(`Invoke responded with status code: ${invokeResult.StatusCode.toString()}, payload: ${invokeResult.Payload.toString(\"utf8\")}, and function error: ${invokeResult.FunctionError}`);  })();Invoke an asyncronous Lambda function.(async function() {    const AWS = require(\"aws-sdk\");  const lambda = new AWS.Lambda({region: \"us-east-1\"});    try {        await lambda.invoke({      FunctionName: \"FUNCTION_ARN\",      InvocationType: \"Event\",      Payload: JSON.stringify({        \"key\": \"val\"      })    }).promise();          console.log(`Invoked Lambda function`);      } catch (e) {        console.error(`Could not invoke Lambda function: ${e.message}`);      }  })();```",
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
  
    
    "20-bash-boot-script-html": {
      "title": "Bash - Boot Script - Run Script on Reboot - Auto Restart",
      "category": "",
      "content": "Bash - Boot Script - Run Script on Reboot - Auto RestartEdit to /etc/crontab file.sudo vim /etc/crontabAdd @reboot followed by the user to run and the script.@reboot ubuntu /home/ubuntu/my_script.sh",
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
      "title": "Bash - Date and Timestamps",
      "category": "",
      "content": "Bash - Date and TimestampsPrint current datedateWed Aug  5 01:01:41 UTC 2018Print current timestampdate +%s1549024740Convert timestamp to date:date -d @1549024740Results: Fri Feb  1 12:39:00 UTC 2019",
      "url": "/20-bash-date.html",
      "href": "/20-bash-date.html"
    }
    ,
  
    
    "20-bash-here-docs-html": {
      "title": "Bash - Heredocs",
      "category": "",
      "content": "Bash - Heredocshttps://tldp.org/LDP/abs/html/here-docs.htmlcat &gt; hello.txt &lt;&lt; EOFHello WorldEOF",
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
      "title": "Bash - Rsync - Copy and Sync Files",
      "category": "",
      "content": "Bash - Rsync - Copy and Sync FilesCopyrsync -az $source $targetCopy over SSH:rsync -az $source ubuntu@1.1.1.1:$targetTrailing slash or notTrailing slash on destination directory has no effectCopy “hello.txt” file inside “bar” directory resulting in “bar/hello.txt”:rsync -az hello.txt barCopy “foo” directory inside “bar” directory resulting in “bar/foo”:rsync -az foo barCopy files of “foo/*” directory inside “bar” directory resulting in “bar/*”:rsync -az foo/ barSyncRemove files in destination not in source:rsync -az --delete foo/ barExclude filesrsync -az --delete \\  --exclude \".git\" \\  --exclude \".gitignore\" \\  foo/ \\  bar",
      "url": "/20-bash-rsync.html",
      "href": "/20-bash-rsync.html"
    }
    ,
  
    
    "20-bash-service-auto-start-on-reboot-html": {
      "title": "Bash - Service - Auto-Start on Reboot",
      "category": "",
      "content": "Bash - Service - Auto-Start on RebootCheck if Service is RunningFor example, apache2 and httpd.sudo systemctl status apache2Check if Service is Auto-Started on Rebootsudo systemctl is-enabled apache2Enable Auto-Start of Service on Rebootsudo systemctl enable apache2Disable Auto-Start of Service on Rebootsudo systemctl disable apache2",
      "url": "/20-bash-service-auto-start-on-reboot.html",
      "href": "/20-bash-service-auto-start-on-reboot.html"
    }
    ,
  
    
    "20-bash-ssh-generate-public-key-html": {
      "title": "Bash - Generate SSH Public Key from Private Key",
      "category": "",
      "content": "Bash - Generate SSH Public Key from Private Keyssh-keygen -y -f ~/.ssh/id_rsa",
      "url": "/20-bash-ssh-generate-public-key.html",
      "href": "/20-bash-ssh-generate-public-key.html"
    }
    ,
  
    
    "20-bash-test-if-file-or-directory-exists-html": {
      "title": "Bash - Test if File or Directory Exists",
      "category": "",
      "content": "Test if File or Directory Existshttps://www.tldp.org/LDP/abs/html/fto.htmlCheck if regular file exists:if [ -f \"/path/to/file\" ]then  echo \"Exists\";fiCheck if file is a directory:if [ -d \"/path/to/dir\" ]then  echo \"Exists\";fi",
      "url": "/20-bash-test-if-file-or-directory-exists.html",
      "href": "/20-bash-test-if-file-or-directory-exists.html"
    }
    ,
  
    
    "20-bash-while-loop-html": {
      "title": "Bash - Infinite While Loop",
      "category": "",
      "content": "Infinite While LoopInfinite while loop:while :do  echo \"[CTRL+C] to break\"  sleep 1doneOne liner:while :; do echo \"[CTRL+C] to break\"; sleep 1; doneWith counter:ii=0;while :;do  ii=$(expr $ii + 1);  echo \"[CTRL+C] to break... ${ii}\"  sleep 1;done;Piping in text, one loop per line:ls | while read -r LINE;do  echo $LINE;done;Note: When pipe is is used, a subshell is used so values in parent shell will not be affected from within the loop",
      "url": "/20-bash-while-loop.html",
      "href": "/20-bash-while-loop.html"
    }
    ,
  
    
    "30-awscli-assume-role-html": {
      "title": "AWS CLI - Assume Role",
      "category": "",
      "content": "AWS CLI - Assume RoleBasicsrole_arn=\"arn:aws:iam::123456789012:role/example-role\";role_session_name=\"AWSCLI-Session\";“role_session_name” can be any stringGrab credentialsaws sts assume-role --role-arn \"$role_arn\" --role-session-name \"$role_session_name\";Create three environment variables to assume the IAM role.export AWS_ACCESS_KEY_ID=&lt;access-key-id&gt;;export AWS_SECRET_ACCESS_KEY=&lt;secret-access-key&gt;;export AWS_SESSION_TOKEN=&lt;session-token&gt;;Verify that you assumed the IAM role by running this command:aws sts get-caller-identity;Unset when done:unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN;Assume quickly using jqAssume:eval $(aws sts assume-role --role-arn \"$role_arn\" --role-session-name \"$role_session_name\" \\  | jq --raw-output '.Credentials | \"export AWS_ACCESS_KEY_ID=\\\"\" + .AccessKeyId + \"\\\"\", \"export AWS_SECRET_ACCESS_KEY=\\\"\" + .SecretAccessKey + \"\\\"\", \"export AWS_SESSION_TOKEN=\\\"\" + .SessionToken + \"\\\"\"');Un-assume:unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN;",
      "url": "/30-awscli-assume-role.html",
      "href": "/30-awscli-assume-role.html"
    }
    ,
  
    
    "30-awscli-docker-ecr-login-html": {
      "title": "AWS CLI - Login Docker Client into Amazon Elastic Container Registry (Amazon ECR)",
      "category": "",
      "content": "AWS CLI - Log Docker Client into Amazon Elastic Container Registry (Amazon ECR)Set region and get AWS account IDLogins are unique to each region.region=us-east-1;account_id=$(aws sts get-caller-identity --query Account --output text);Log inUsing AWS CLI &gt;= v1.17.10 or v2:aws ecr get-login-password --region ${region} \\  | sudo docker login --username AWS --password-stdin \\  ${account_id}.dkr.ecr.${region}.amazonaws.com;Using AWS CLI &lt; v1.17.10sudo $(aws ecr get-login --region ${region} --no-include-email --registry-ids ${account_id});--registry-ids ${account_id} is optional if same account.Create repository in Amazon ECRSet variable for repository name:region=us-east-1;repo_name=my-repo-name;Create repository:aws ecr --region ${region} create-repository --repository-name ${repo_name}Pull imagesudo docker pull ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush imageSet variable for locally built image and target repository name:image_name=my-image-name;repo_name=my-repo-name;Tag with full repository name:sudo docker tag ${image_name} ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush image to repository:sudo docker push ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestClean upDelete all images in repository and delete repository.# Delete all imagesaws ecr --region ${region} batch-delete-image \\  --repository-name ${repo_name} \\  --image-ids \"$(aws ecr --region ${region} list-images --repository-name ${repo_name} --query 'imageIds[*]';)\";# Delete repositoryaws ecr --region ${region} delete-repository --repository-name ${repo_name};",
      "url": "/30-awscli-docker-ecr-login.html",
      "href": "/30-awscli-docker-ecr-login.html"
    }
    ,
  
    
    "40-cfn-dynamodb-html": {
      "title": "AWS CloudFormation - Create DynamoDB datrabase tables in your CloudFromation templates",
      "category": "",
      "content": "AWS CloudFormation - Create DynamoDB datrabase tables in your CloudFromation templatesExamples below include an auto delete if time is passed the UNIX seconds timestamp stored in the exp attribute, a number datatype.Example with one key, a hash key named attr1.Resources:  Table:    Type: AWS::DynamoDB::Table    Properties:      AttributeDefinitions:        - AttributeName: \"attr1\"          AttributeType: \"S\"      BillingMode: \"PAY_PER_REQUEST\"      KeySchema:        - AttributeName: \"attr1\"          KeyType: \"HASH\"      TableName: \"TABLE_NAME\"      TimeToLiveSpecification:        AttributeName: \"exp\"        Enabled: trueExample with two keys, a hash key named attr1 and a range key named attr2.Resources:  Table:    Type: AWS::DynamoDB::Table    Properties:      AttributeDefinitions:        - AttributeName: \"attr1\"          AttributeType: S        - AttributeName: \"attr2\"          AttributeType: S      BillingMode: \"PAY_PER_REQUEST\"      KeySchema:        - AttributeName: \"attr1\"          KeyType: HASH        - AttributeName: \"attr2\"          KeyType: RANGE      TableName: \"TABLE_NAME\"      TimeToLiveSpecification:        AttributeName: \"exp\"        Enabled: true",
      "url": "/40-cfn-dynamodb.html",
      "href": "/40-cfn-dynamodb.html"
    }
    ,
  
    
    "40-cfn-ssm-ami-html": {
      "title": "AWS CloudFormation - Use latest AMIs by dynamically referencing SSM Parameter Store in your CloudFromation templates",
      "category": "",
      "content": "Use latest AMIs by dynamically referencing SSM Parameter Store in your CloudFromation templatesCloudFormation templates with the following will select the latest AMI IDs directly from SSM Parameter store to deploy the instance.Adding inline in Resources of the templateResources:  Instance:     Type: AWS::EC2::Instance    Properties:      ImageId: \"\"Adding in Parameters of the templateParameters:  ImageId:     Type: 'AWS::SSM::Parameter::Value&lt;AWS::EC2::Image::Id&gt;'    Default: '/aws/service/ecs/optimized-ami/amazon-linux-2/recommended/image_id'Resources:  Instance:     Type: 'AWS::EC2::Instance'    Properties:      ImageId: !Ref ImageId",
      "url": "/40-cfn-ssm-ami.html",
      "href": "/40-cfn-ssm-ami.html"
    }
    ,
  
    
      
    
      
    
      
    
    "": {
      "title": "Home - Hello World!",
      "category": "",
      "content": "# Programming, Commands, and Technical Notes## From a Full-Stack DeveloperThis site is a collection of notes gathered over the years of building frontend and backend applications. Much of these commands or snippets are simple, straightforward, and sometimes often forgotten.Use the search bar for instant search.Many notes have yet to be added and will be added from time to time.",
      "url": "/",
      "href": "/"
    }
    
  
};
