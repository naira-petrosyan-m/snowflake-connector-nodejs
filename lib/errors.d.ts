export enum ErrorCode {
    // 400001
    ERR_INTERNAL_ASSERT_FAILED = 400001,
    ERR_UNSUPPORTED_NODE_JS_VERSION = 400002,

    // 401001
    ERR_SF_NETWORK_COULD_NOT_CONNECT = 401001,
    ERR_SF_RESPONSE_FAILURE = 401002,
    ERR_SF_RESPONSE_NOT_JSON = 401003,
    ERR_SF_RESPONSE_INVALID_TOKEN = 401004,

    // 402001
    ERR_LARGE_RESULT_SET_NETWORK_COULD_NOT_CONNECT = 402001,
    ERR_LARGE_RESULT_SET_RESPONSE_FAILURE = 402002,

    // 403001
    ERR_GLOBAL_CONFIGURE_INVALID_LOG_LEVEL = 403001,
    ERR_GLOBAL_CONFIGURE_INVALID_INSECURE_CONNECT = 403002,
    ERR_GLOBAL_CONFIGURE_INVALID_OCSP_MODE = 403003,
    ERR_GLOBAL_CONFIGURE_INVALID_JSON_PARSER = 403004,
    ERR_GLOBAL_CONFIGURE_INVALID_XML_PARSER = 403005,
    ERR_GLOBAL_CONFIGURE_INVALID_KEEP_ALIVE = 403006,

    // 404001
    ERR_CONN_CREATE_MISSING_OPTIONS = 404001,
    ERR_CONN_CREATE_INVALID_OPTIONS = 404002,
    ERR_CONN_CREATE_MISSING_USERNAME = 404003,
    ERR_CONN_CREATE_INVALID_USERNAME = 404004,
    ERR_CONN_CREATE_MISSING_PASSWORD = 404005,
    ERR_CONN_CREATE_INVALID_PASSWORD = 404006,
    ERR_CONN_CREATE_MISSING_ACCOUNT = 404007,
    ERR_CONN_CREATE_INVALID_ACCOUNT = 404008,
    ERR_CONN_CREATE_MISSING_ACCESS_URL = 404009,
    ERR_CONN_CREATE_INVALID_ACCESS_URL = 404010,
    ERR_CONN_CREATE_INVALID_WAREHOUSE = 404011,
    ERR_CONN_CREATE_INVALID_DATABASE = 404012,
    ERR_CONN_CREATE_INVALID_SCHEMA = 404013,
    ERR_CONN_CREATE_INVALID_ROLE = 404014,
    ERR_CONN_CREATE_MISSING_PROXY_HOST = 404015,
    ERR_CONN_CREATE_INVALID_PROXY_HOST = 404016,
    ERR_CONN_CREATE_MISSING_PROXY_PORT = 404017,
    ERR_CONN_CREATE_INVALID_PROXY_PORT = 404018,
    ERR_CONN_CREATE_INVALID_STREAM_RESULT = 404019,
    ERR_CONN_CREATE_INVALID_FETCH_AS_STRING = 404020,
    ERR_CONN_CREATE_INVALID_FETCH_AS_STRING_VALUES = 404021,
    ERR_CONN_CREATE_INVALID_REGION = 404022,
    ERR_CONN_CREATE_INVALID_KEEP_ALIVE = 404023,
    ERR_CONN_CREATE_INVALID_KEEP_ALIVE_HEARTBEAT_FREQ = 404024,
    ERR_CONN_CREATE_INVALID_TREAT_INTEGER_AS_BIGINT = 404025,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY = 404026,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY_PATH = 404027,
    ERR_CONN_CREATE_INVALID_PRIVATE_KEY_PASS = 404028,
    ERR_CONN_CREATE_INVALID_OAUTH_TOKEN = 404029,
    ERR_CONN_CREATE_INVALID_VALIDATE_DEFAULT_PARAMETERS = 404030,
    ERR_CONN_CREATE_INVALID_APPLICATION = 404031,
    ERR_CONN_CREATE_MISSING_PROXY_USER = 404032,
    ERR_CONN_CREATE_INVALID_PROXY_USER = 404033,
    ERR_CONN_CREATE_MISSING_PROXY_PASS = 404034,
    ERR_CONN_CREATE_INVALID_PROXY_PASS = 404035,
    ERR_CONN_CREATE_INVALID_NO_PROXY = 404036,
    ERR_CONN_CREATE_INVALID_ARRAY_BINDING_THRESHOLD = 404037,
    ERR_CONN_CREATE_INVALID_GCS_USE_DOWNSCOPED_CREDENTIAL = 404038,
    ERR_CONN_CREATE_INVALID_FORCE_STAGE_BIND_ERROR = 404039,
    ERR_CONN_CREATE_INVALID_BROWSER_TIMEOUT = 404040,
    ERR_CONN_CREATE_INVALID_DISABLED_QUERY_CONTEXT_CACHE = 404041,
    ERR_CONN_CREATE_INVALID_INCLUDE_RETRY_REASON = 404042,
    ERR_CONN_CREATE_INVALID_CLIENT_CONFIG_FILE = 404043,
    ERR_CONN_CREATE_INVALID_RETRY_TIMEOUT = 404044,
    ERR_CONN_CREATE_INVALID_ACCOUNT_REGEX = 404045,
    ERR_CONN_CREATE_INVALID_REGION_REGEX = 404046,
    ERR_CONN_CREATE_INVALID_DISABLE_CONSOLE_LOGIN = 404047,

    // 405001
    ERR_CONN_CONNECT_INVALID_CALLBACK = 405001,

    // 405501
    ERR_CONN_CONNECT_STATUS_CONNECTING = 405501, // sql state: 08002
    ERR_CONN_CONNECT_STATUS_CONNECTED = 405502, // sql state: 08002
    ERR_CONN_CONNECT_STATUS_DISCONNECTED = 405503, // sql state: 08002
    ERR_CONN_CREATE_INVALID_AUTH_CONNECT = 405504,
    ERR_CONN_CONNECT_INVALID_CLIENT_CONFIG = 405505,

    // 406001
    ERR_CONN_DESTROY_INVALID_CALLBACK = 406001,

    // 406501
    ERR_CONN_DESTROY_STATUS_PRISTINE = 406501,
    ERR_CONN_DESTROY_STATUS_DISCONNECTED = 406502,

    // 407001
    ERR_CONN_REQUEST_STATUS_PRISTINE = 407001, // sql state: 08003
    ERR_CONN_REQUEST_STATUS_DISCONNECTED = 407002, // sql state: 08003

    // 408001
    ERR_CONN_DESERIALIZE_MISSING_CONFIG = 408001,
    ERR_CONN_DESERIALIZE_INVALID_CONFIG_TYPE = 408002,
    ERR_CONN_DESERIALIZE_INVALID_CONFIG_FORM = 408003,

    // 409001
    ERR_CONN_EXEC_STMT_MISSING_OPTIONS = 409001,
    ERR_CONN_EXEC_STMT_INVALID_OPTIONS = 409002,
    ERR_CONN_EXEC_STMT_MISSING_SQL_TEXT = 409003,
    ERR_CONN_EXEC_STMT_INVALID_SQL_TEXT = 409004,
    ERR_CONN_EXEC_STMT_INVALID_INTERNAL = 409005,
    ERR_CONN_EXEC_STMT_INVALID_PARAMETERS = 409006,
    ERR_CONN_EXEC_STMT_INVALID_BINDS = 409007,
    ERR_CONN_EXEC_STMT_INVALID_BIND_VALUES = 409008,
    ERR_CONN_EXEC_STMT_INVALID_COMPLETE = 409009,
    ERR_CONN_EXEC_STMT_INVALID_STREAM_RESULT = 409010,
    ERR_CONN_EXEC_STMT_INVALID_FETCH_AS_STRING = 409011,
    ERR_CONN_EXEC_STMT_INVALID_FETCH_AS_STRING_VALUES = 409012,
    ERR_CONN_EXEC_STMT_INVALID_REQUEST_ID = 409013,
    ERR_CONN_EXEC_STMT_INVALID_ASYNC_EXEC = 409014,

    // 410001
    ERR_CONN_FETCH_RESULT_MISSING_OPTIONS = 410001,
    ERR_CONN_FETCH_RESULT_INVALID_OPTIONS = 410002,
    ERR_CONN_FETCH_RESULT_MISSING_QUERY_ID = 410003,
    ERR_CONN_FETCH_RESULT_INVALID_QUERY_ID = 410004,
    ERR_CONN_FETCH_RESULT_INVALID_COMPLETE = 410005,
    ERR_CONN_FETCH_RESULT_INVALID_STREAM_RESULT = 410006,
    ERR_CONN_FETCH_RESULT_INVALID_FETCH_AS_STRING = 410007,
    ERR_CONN_FETCH_RESULT_INVALID_FETCH_AS_STRING_VALUES = 410008,

    // 411001
    ERR_STMT_STREAM_ROWS_INVALID_OPTIONS = 411001,
    ERR_STMT_STREAM_ROWS_INVALID_START = 411002,
    ERR_STMT_STREAM_ROWS_INVALID_END = 411003,
    ERR_STMT_STREAM_ROWS_INVALID_FETCH_AS_STRING = 411004,
    ERR_STMT_STREAM_ROWS_INVALID_FETCH_AS_STRING_VALUES = 411005,
    ERR_STMT_STREAM_ROWS_INVALID_ROW_MODE = 411006,

    // 412001
    ERR_OCSP_REVOKED = 412001,
    ERR_OCSP_UNKNOWN = 412002,
    ERR_OCSP_NO_SIGNATURE_ALGORITHM = 412003,
    ERR_OCSP_INVALID_SIGNATURE = 412004,
    ERR_OCSP_NO_RESPONSE = 412005,
    ERR_OCSP_INVALID_VALIDITY = 412006,
    ERR_OCSP_UNKNOWN_STATE = 412007,
    ERR_OCSP_NOT_TWO_ELEMENTS = 412008,
    ERR_OCSP_CACHE_EXPIRED = 412009,
    ERR_OCSP_FAILED_PARSE_RESPONSE = 412010,
    ERR_OCSP_INVALID_CERTIFICATE_VALIDITY = 412011,
    ERR_OCSP_RESPONDER_TIMEOUT = 412012,
    ERR_OCSP_CACHE_SERVER_TIMEOUT = 412013,
    ERR_OCSP_FAILED_OBTAIN_OCSP_RESPONSE = 412014,

    // 450001
    ERR_STMT_FETCH_ROWS_MISSING_OPTIONS = 450001,
    ERR_STMT_FETCH_ROWS_INVALID_OPTIONS = 450002,
    ERR_STMT_FETCH_ROWS_MISSING_EACH = 450003,
    ERR_STMT_FETCH_ROWS_INVALID_EACH = 450004,
    ERR_STMT_FETCH_ROWS_MISSING_END = 450005,
    ERR_STMT_FETCH_ROWS_INVALID_END = 450006,
    ERR_STMT_FETCH_ROWS_FETCHING_RESULT = 450007,

    // 460001
    ERR_GET_RESPONSE_QUERY_INVALID_UUID = 460001,
    ERR_GET_RESULTS_QUERY_ID_NO_DATA = 460002,
    ERR_GET_RESULTS_QUERY_ID_NOT_SUCCESS_STATUS = 460003,
};

export interface SnowflakeErrorExternal extends Error {
    code?: ErrorCode,
    sqlState?: string,
    data?: Record<string, any>,
    response?: Record<string, any>,
    responseBody?: string,
    cause?: Error,
    isFatal?: boolean,
};

export interface SnowflakeError extends SnowflakeErrorExternal {
    externalize?: () => SnowflakeErrorExternal,
};