// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '23a4074d-cca6-4cd3-878f-7f4c2116918d',
    name: 'AutoscaleRunners',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'microsoft.web', 'microsoft.visualstudio', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc?api-version=2014-08-01-preview')
  .reply(200, "{\"name\":\"Microsoft.Automation/dsc\",\"properties\":{\"state\":\"Registered\"},\"id\":\"/subscriptions/23a4074d-cca6-4cd3-878f-7f4c2116918d/providers/Microsoft.Features/providers/Microsoft.Automation/features/dsc\",\"type\":\"Microsoft.Features/providers/features\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:b412f4d0-a02a-4c6a-96e3-03da322e0379',
  'x-ms-ratelimit-remaining-subscription-reads': '31996',
  'x-ms-correlation-request-id': '8077ffe0-cd89-4aa2-b1a4-9fa58bbe4cdb',
  'x-ms-routing-request-id': 'WESTUS:20150407T232143Z:8077ffe0-cd89-4aa2-b1a4-9fa58bbe4cdb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 07 Apr 2015 23:21:43 GMT' });
 return result; }]];