import Amplify, {Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import {Hub, Logger} from 'aws-amplify';

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