# Cityworks TypeScript SDK

The Cityworks TypeScript SDK provides complete typing information and run-time implementations for using the Cityworks API in a JavaScript environment (including Node.js and the browser)

# Installing

The SDK should be installed as a Node module. This is the ideal and preferred way to use the SDK.

Currently, the SDK is not available on any public package repositories (like NPM). You must download it and install locally (NPM and Yarn both allow local installs).

# Package Structure

There are five module entry points in the SDK.

* `cw-sdk/api-interface` This contains all the type information for all available services in the API.
* `cw-sdk/api-service` This includes the implementations of the services. These do not need to be used if you want to create your own implementation (for example, and observable based implementation instead of a promised based one.)
* `cw-sdk/browser` This implements the `IApiService` class for use in web application. It is used only when using services from `cw-sdk/api-service` in the browser 
* `cw-sdk/core` This includes all Cityworks object types and enums as well as service types.


Each of the five module entry points have corresponding physical entry points in multiple formats. When using the SDK in Node.js, the files in `cw-sdk/bundles` are loaded as needed. When using outside of Node.js (e.g., in a browser or tooling like WebPack or Rollup), you need to configure the entry points you whish to use. For each module entry point, there are five possible physical entry points.

* `cw-sdk/esm5` contains ES5 JavaScript using ES modules.
* `cw-sdk/esm2015` contains ES2015 JavaScript using ES modules.
* `cw-sdk/fesm5` contains ES5 Javascript using ES modules in a flat file.
* `cw-sdk/fesm2015` contains ES2015 Javascript using ES modules in a flat file.
* `cw-sdk/bundles` contains ES5 JavaScript using UMD modules in a flat file.

You will need to configure your build tooling and module loaders to point to the correct files as needed. For example, you might use `System.js` as a module loader for web app development builds, and then use `Rollup` (or `WebPack`) to produce optimized production builds.

In this case, your `System.js` configuration might look like this:
```ts
config.map = {
    'cw-isdk/api-interface': 'node_modules/cw-isdk/bundles/api-interface.umd.js'
    'cw-isdk/api-service': 'node_modules/cw-isdk/bundles/api-service.umd.js'
    'cw-isdk/browser': 'node_modules/cw-isdk/bundles/browser.umd.js'
    'cw-isdk/core': 'node_modules/cw-isdk/bundles/core.umd.js'
};
```

Your `Rollup` configuration would then point to `cw-sdk/esm5/<module-name>` or `cw-sdk/esm2015/<module-name>`. (Out of the box, `Rollup` and `WebPack` should work without additional configuration assuming they follow the `package.json` files.)

# Examples

This first example shows usage in a web app using the provided service implementations.

```ts
import { ApiService } from 'cw-sdk/browser';
import { WorkOrderService } from 'cw-sdk/api-service';

async function main() {

    // Creat the API Service for the browser.
    // Note: this is just an implementation of an interface. You can create you own
    // if you want to control the HTTP request.
    const apiService = new ApiService('localhost/cityworks.webapp');

    // If we are in the CW domain, then we can initialize the CSRF token instead of logging in.
    // If running from outside the CW domain, we need to login.
    apiService.initializeCsrfToken();

    // Or let's just log in
    const loginResponse = await apiService.login('jDoe', 'secretPassword');
    console.log(loginResponse.Value);

    // Let's assume login worked and now we can create a work order service and get a work order.
    const woService = new WorkOrderService(apiService);
    const workOrderResponse = await woService.ById({ WorkOrderId: '1234' });
    console.log(workOrderResponse.Value);
}
```


This example shows how to create your own service implementation using the provided type information.

```ts
import { WorkOrderServiceTypes } from 'cw-sdk/api-interface';

import {
    CoreResponseStatus,
    ServiceTypes,
    WorkOrderBase
} from 'cw-sdk/core';


export class HttpService {
    public async makePostRequest(area: string, service: string,
        action: string, token: string | undefined, data: any | undefined): Promise<ServiceTypes.CoreResponseBase_<any>> {

        // Implement code to make an HTTP request...
        throw new Error('not implemented');
    }
}

export class WorkOrderService {

    private _httpService: HttpService;
    private _token: string;


    public constructor(httpService: HttpService, token: string) {
        this._httpService = httpService;
        this._token = token;
    }

    public async getWorkOrderById(id: string): Promise<WorkOrderBase> {
        const request: WorkOrderServiceTypes.Requests.ById = {
            WorkOrderId: id
        };

        const response = await this._httpService.makePostRequest('ams', 'workorder', 'byid', this._token, request);
        if (response && response.Status === CoreResponseStatus.Ok) {
            return response.Value;
        } else {
            throw new Error('something went wrong!');
        }
    }
}
```

**Note**: The above two examples show all imports are named imports. This is the preferred way as it allows better dead code removal and tree-shaking for optimized builds. Do not use imports like 
```ts
import * as Core from 'cw-sdk/core';
``` 
Only use explicitly named imports.