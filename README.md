# ahgora_back
Backend Ahgora Challenge
# Ahgora Challenge
------
### Challenge:
>This backend provides interaction with YouTube API, using oAuth2, making a search and return the 200 first videos and filtered based on the maximum expended time daily set by the user, based on the filter, must return the total of days will be expended to watch all the videos respecting the filter value.**
---
### Requirements:
* Must have a google account.
---
### How To:
##### Change environment variables:
* Edit ".env" to change HTTP and HTTPS port.

---
##### Run TEST:
> The test files is in test folder, to run the test execute 'npm run test'
> This will test the modules initializations and test the Google Authorize and search in youtube.
> * The authorize test will open a Browser tab and you must follow the steps to authorize your account, you'll have 50 seconds before next text or this will show a fail test on search video.

---
##### Run Project:
* Clone or download the project, execute the following commands:
	*  npm install -(to install all packages dependencies)
	*  node index.js 
---
##### You can download the final compiled project for linux / windows 
	* https://drive.google.com/open?id=1jFFBR-5o6HnidWe1cOnThDItXfPI47-t
    	* Download -  LINUX -> ahgora_challenge_linux.sh
			      - WINDOWS -> ahgora_challenge.exe
	* Create or download a .env on the same folder of executable.
		ex .env:
				# .env

        #HTTP PORT
        PORT_HTTP = 5000
        PORT_HTTPS = 443
        
        #MONGODB
        DB_NAME = 'ahgora'
        MONGODB_URL = 'mongodb://localhost/'
        
        #GOOGLE
        GOOGLE_CLIENT_ID='296046418107-ae1ipu116cmivpp4c8hh45hjsb012jka.apps.googleusercontent.com'
        GOOGLE_CLIENT_SECRET='SM2N7kAZ1j7ZwQ-2HbiyYeVk'
        GOOGLE_REDIRECT_URL='http://localhost:5000/authcode'
        GOOGLE_SCOPE='https://www.googleapis.com/auth/youtube.readonly'
        GOOGLE_API_TOKEN='AIzaSyDqPZ3cHecAqfJtXJ-RxWKtxKtSKNBoPg8'
        #GOOGLE_API_TOKEN='AIzaSyCGDSNInqz-mkt5CggPa9Ib7HbkSV4DUJQ'
---
