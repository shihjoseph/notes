window.database = {
  
    
    "10-js-copy-html": {
      "title": "JavaScript - Copy Text in Browser",
      "category": "",
      "content": "Bash - JavaScript - Copy Text in BrowserThis uses ClipboardJS to copy without plugins or Flash.Include script:&lt;script src=\"https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js\"&gt;&lt;/script&gt;In JavaScript, define a function that returns the text to be copied.// Uses event delegation (bubble up)var buttonCopy = new ClipboardJS(\"input[type=\\\"button\\\"][data-copytext]\", {    text: function(trigger) {        return trigger.getAttribute('data-copytext');    }});",
      "url": "/10-js-copy.html",
      "href": "/10-js-copy.html"
    }
    ,
  
    
    "10-js-download-html": {
      "title": "JavaScript - Download Frontend File Without Server",
      "category": "",
      "content": "Bash - JavaScript - Download Frontend File Without ServerSometimes you have string in the browser web page you want to download. You can make the string downloadable.var makeDownload = function(val, filename, contentType) {    if (!val || !filename || !contentType)    {        return;    }    var a = window.document.createElement('a');    a.href = window.URL.createObjectURL(new Blob([val], {type: contentType}));    a.download = filename;        document.body.appendChild(a);    a.click();    document.body.removeChild(a);};$(\"#export_csv\").on(\"click\", function(e) {    makeDownload(arr.join(\"\\n\"), \"bulk-url-shortener.csv\", \"text/csv\");});",
      "url": "/10-js-download.html",
      "href": "/10-js-download.html"
    }
    ,
  
    
    "20-bash-boot-script-html": {
      "title": "Bash - Boot Script - Run Script on Reboot",
      "category": "",
      "content": "Bash - Boot Script - Run Script on RebootEdit to /etc/crontab file.sudo vim /etc/crontabAdd @reboot followed by the user to run and the script.@reboot ubuntu /home/ubuntu/my_script.sh",
      "url": "/20-bash-boot-script.html",
      "href": "/20-bash-boot-script.html"
    }
    ,
  
    
    "20-bash-checksum-html": {
      "title": "Bash - Checksum (SHA, MD5)",
      "category": "",
      "content": "Bash - Checksum (SHA, MD5)SHA Checksumsshasum text.txtorecho -n \"Hello world!\" | shasumMD5 Checksumsmd5sum text.txtorecho -n \"Hello world!\" | md5sum",
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
      "content": "AWS CLI - Log Docker Client into Amazon Elastic Container Registry (Amazon ECR)Set region and get AWS account IDLogins are unique to each region.region=us-east-1;account_id=$(aws sts get-caller-identity --query Account --output text);Log inUsing AWS CLI &gt;= v1.17.10 or v2:aws ecr get-login-password --region ${region} \\  | sudo docker login --username AWS --password-stdin \\  ${account_id}.dkr.ecr.${region}.amazonaws.com;Using AWS CLI &lt; v1.17.10sudo $(aws ecr get-login --region ${region} --no-include-email --registry-ids ${account_id});--registry-ids ${account_id} is optional if same account.Create repository in Amazon ECRSet variable for repository name:region=us-east-1;repo_name=my-repo-name;Create repository:aws ecr --region ${region} create-repository --repository-name ${repo_name}Pull image:sudo docker pull ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush imageSet variable for locally built image and target repository name:image_name=my-image-name;repo_name=my-repo-name;Tag with full repository name:sudo docker tag ${image_name} ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latestPush image to repository:sudo docker push ${account_id}.dkr.ecr.${region}.amazonaws.com/${repo_name}:latest",
      "url": "/30-awscli-docker-ecr-login.html",
      "href": "/30-awscli-docker-ecr-login.html"
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
