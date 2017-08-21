// ***** Interfacing with Polyglot ******* //

export class Method {
    public name: string = "";
    public request: string = "";
    public response: string = "";
}

export class Service {
    public name: string = "";
    public path: string = "";
    public methodMap: Map<string, Method> = new Map();
    public clientStreaming: boolean = false;
    public serverStreaming: boolean = false;
}

export class PolyglotSettings {
    public protoDiscoveryRoot: string = "";
    public endpoint: string = "";
    public configSetPath: string = "";
    public addProtocIncludes: string = "";
    public configName: string = "";
    public tlsCaCertPath: string = "";
    public deadlineMs: number = -1;
    [key: string]: string | number;

    public constructor(init?: Partial<PolyglotSettings>) {
        Object.assign(this, init);
    }
}

export class ListServicesOptions {
    public serviceFilter: string = "";
    public methodFilter: string = "";

    public constructor(init?: Partial<ListServicesOptions>) {
        Object.assign(this, init);
    }
}

export class CallServiceOptions {
    public jsonBody: string = "";
    public fullMethod: string = "";

    public constructor(init?: Partial<CallServiceOptions>) {
        Object.assign(this, init);
    }
}

export class PolyglotRequestOptions {
    public polyglotSettings: PolyglotSettings = new PolyglotSettings();

    public constructor(init?: Partial<PolyglotRequestOptions>) {
        Object.assign(this, init);
    }
}

export class ListServicesRequest extends PolyglotRequestOptions {
    public listServicesOptions: ListServicesOptions = new ListServicesOptions();

    public constructor(init?: Partial<ListServicesRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class CallServiceRequest extends PolyglotRequestOptions {
    public callServiceOptions: CallServiceOptions = new CallServiceOptions();

    public constructor(init?: Partial<CallServiceRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class PolyglotResponse {
    public error: Error;
    public response: string | ArrayBuffer;
}

export class PolyglotLog {
    public log: string | ArrayBuffer;
    public level: string;
}

// ************************************** //

// ************* Validation ************* //

export class ValidatePathsRequest {
    public paths: string[];
    public id: string;
}

export class ValidatePathsResponse {
    public validPaths: boolean[];
    public id: string;
}

// ************************************** //

// ************ App UI State ************ //

export class SettingsUIState {
    public settingsOpen: boolean = true;
    public endpointRequired: boolean = false;
    public endpointError: boolean = false;

    public constructor(init?: Partial<SettingsUIState>) {
        Object.assign(this, init);
    }
}

export class AppUIState {
    public errorDialogVisible: boolean = false;
    public errorDialogTitle: string = "";
    public errorDialogExplanation: string = "";
    public callRequestInProgress: boolean = false;

    public constructor(init?: Partial<AppUIState>) {
        Object.assign(this, init);
    }
}

// ************************************** //
