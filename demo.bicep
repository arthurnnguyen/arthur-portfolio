@description('Name of the Static Web App (must be globally unique)')
param siteName string

@description('Azure region for deployment')
param location string = resourceGroup().location

@description('Git repository URL for your app code')
param repositoryUrl string = 'https://github.com/arthurnnguyen/${siteName}'

@description('Branch to build from')
param branchName string = 'main'

@description('Enable basic authentication (dev/test only)')
param enableBasicAuth bool = false

resource staticSite 'Microsoft.Web/staticSites@2024-04-01' = {
  name: siteName
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branchName
    allowConfigFileUpdates: true
    enterpriseGradeCdnStatus: 'Disabled'
    stagingEnvironmentPolicy: 'Enabled'
  }
}

@description('Optional basicAuth configuration')
resource basicAuth 'Microsoft.Web/staticSites/basicAuth@2024-04-01' = if (enableBasicAuth) {
  parent: staticSite
  name: 'default'
  properties: {
    applicableEnvironmentsMode: 'SpecifiedEnvironments'
  }
}
