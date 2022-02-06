import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import {Hub, Logger} from 'aws-amplify';


Amplify.configure({
    aws_cognito_region: 'eu-west-1',
    aws_user_pools_id:  "eu-west-1_QLZhzSObW", // (optional) -  Amazon Cognito User Pool ID   
    aws_user_pools_web_client_id: "11e47qm43729i0b95k8lh1q8n6", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
});

const logger = new Logger('FirstLogin');
const listener = (data) => {
    switch (data.payload.event) {

        case 'signIn':
            logger.info('user signed in')
            break;

        case 'signOut':
            logger.info('user signed out')
            break;

        case 'signIn_failure':
            logger.error('user sign in failed')
            break;

        case 'configured':
            logger.info('Auth module configured')
            break;
        
    }
}

Hub.listen('auth', listener);