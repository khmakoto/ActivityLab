# ActivityLab
Gamifying the video annotation task of activity recognition.

1. Download it
2. npm install
3. Set Up Facebook App
⋅⋅⋅[here](http://rationalappdev.com/logging-into-react-native-apps-with-facebook-or-google/) is setting up tutorial
4. Change 'DOMAIN' and 'PORT' in webpack.config.js
```javascript
new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('development'),
			'DOMAIN': JSON.stringify('[HTTP://WWW_EXAMPLE_COM]'),
			'PORT': JSON.stringify('[EX_7777]')
	}
})
```
5. Change 'clientID' 'clientSecret' 'callbackURL' in server/config/auth.js
```javascript
module.exports = {
    'facebookAuth' : {
        'clientID'      : '[YOUR_APP_ID]', // your App ID
        'clientSecret'  : '[YOUR_APP_SECRET]', // your App Secret
        'callbackURL'   : '[HTTP://WWW_EXAMPLE_COM:7777/auth/facebook/callback]',
        'profileFields' : ['id', 'email', 'name']
    }
};
```
6. npm run build
7. npm run server
8. Access index page via port 7777
