import Vue from 'vue'
import Amplify from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsExports from '@@/src/aws-exports.js'

Amplify.configure(awsExports)
Vue.use(AmplifyPlugin, Amplify)
