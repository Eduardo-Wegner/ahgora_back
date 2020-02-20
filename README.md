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
##### Run Project:
* Clone or download the project, execute the following commands:
	*  npm install -(to install all packages dependencies)
	*  node index.js 
---
##### You can download the final compiled project for linux / windows 
	
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
