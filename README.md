# Cityworks Activities

[![CI/CD](https://github.com/vertigis/workflow-activities-cityworks/workflows/CI/CD/badge.svg)](https://github.com/vertigis/workflow-activities-cityworks/actions)
[![npm](https://img.shields.io/npm/v/@vertigis/workflow-activities-cityworks)](https://www.npmjs.com/package/@vertigis/workflow-activities-cityworks)

This project contains activities for interacting with the Cityworks REST API in a [VertiGIS Studio Workflow](https://www.vertigisstudio.com/products/vertigis-studio-workflow/).

This project uses version `15.8.3` of the Cityworks TypeScript SDK. To use this activity pack you must have a license to use the Cityworks REST API.

## Usage

To use the Cityworks activities in [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/) you need to register an activity pack and then add the activities to a workflow.

### Register the Cityworks activity pack

1. Sign in to ArcGIS Online or Portal for ArcGIS
1. Go to **My Content**
1. Select **Add Item > An application**
    - Type: `Web Mapping`
    - Purpose: `Ready To Use`
    - API: `JavaScript`
    - URL: The URL to this activity pack manifest
        - Use https://unpkg.com/@vertigis/workflow-activities-cityworks@1.0.0/activitypack.json for a specific version
        - Use https://unpkg.com/@vertigis/workflow-activities-cityworks@1/activitypack.json for the latest revision of a specific major version
        - Use https://unpkg.com/@vertigis/workflow-activities-cityworks/activitypack.json for the latest version (not recommended for production use)
        - Use https://localhost:5000/activitypack.json for a local development version
    - Title: Your desired title
    - Tags: Must include `geocortex-workflow-activity-pack`
1. Reload [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/)
1. The Cityworks activities will now appear in the activity toolbox in various `Cityworks` categories

### Use the Cityworks activities in a workflow

1. Establish a connection to the Cityworks service
    1. Add the `Create Cityworks API Service` activity to a workflow
    1. Set the `URL` input to the root URL of your Cityworks server. For example, `https://cloud01.cityworks.com/<organization>`.
    1. If you have an existing Cityworks access token, assign it to the `Token` input
    1. If you have a username and password, assign them to the `Username` and `Password` inputs
    - **IMPORTANT:** tokens and passwords are credentials that should not be hard coded into workflows. These values should be acquired by the workflow at runtime from the end user or from another secure system.
1. Use the Cityworks service
    1. Add one of the other Cityworks activities to the workflow. For example, `Get Service Requests`.
    1. Set the `Service` input of the activity to be the output of the `Create Cityworks API Service` activity
        - Typically this would use an expression like `=$cwApi.service`
    1. Supply any additional inputs to the activity
    1. Supply the `result` output of the activity to the inputs of other activities in the workflow
1. Run the workflow

## Development

This project was bootstrapped with the [VertiGIS Studio Workflow SDK](https://github.com/geocortex/vertigis-workflow-sdk). Before you can use this activity pack in the [VertiGIS Studio Workflow Designer](https://apps.vertigisstudio.com/workflow/designer/), you will need to [register the activity pack](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview#register-the-activity-pack).

## Available Scripts

Inside this project, you can run some built-in commands:

### `npm run generate`

Interactively generate a new activity or form element.

### `npm start`

Runs the project in development mode. Your activity pack will be available at [http://localhost:5000/main.js](http://localhost:5000/main.js). The HTTPS certificate of the development server is a self-signed certificate that web browsers will warn about. To work around this open [`https://localhost:5000/main.js`](https://localhost:5000/main.js) in a web browser and allow the invalid certificate as an exception. For creating a locally-trusted HTTPS certificate see the [Configuring a HTTPS Certificate](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/#configuring-a-https-certificate) section on the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/).

### `npm run lint`

Runs linter to perform static analysis.

### `npm run test`

Runs all unit tests.

### `npm run test -- --coverage`

Runs all unit tests with coverage.

### `npm run build`

Builds the activity pack for production to the `build` folder. It optimizes the build for the best performance.

Your custom activity pack is now ready to be deployed!

See the [section about deployment](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/#deployment) in the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/) for more information.

## Documentation

Find [further documentation on the SDK](https://developers.vertigisstudio.com/docs/workflow/sdk-web-overview/) on the [VertiGIS Studio Developer Center](https://developers.vertigisstudio.com/docs/workflow/overview/)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contributing guidelines.
